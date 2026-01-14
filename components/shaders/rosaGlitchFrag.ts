// components/shaders/rosaGlitchFrag.ts
export const rosaGlitchFrag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D image;
uniform float seed;

// controls
uniform float u_speed;   // 1.0 default
uniform float u_amount;  // 0..1
uniform vec3  u_bg;      // background color (0..1)

// image size on screen (0.66 ~ 2/3)
uniform float u_imageSize;

varying vec2 v_texcoord;

// hash helpers
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float inside01(vec2 p) {
  return step(0.0, p.x) * step(0.0, p.y) * step(p.x, 1.0) * step(p.y, 1.0);
}

// wrapping distance on x so cars loop smoothly
float wrapDist(float a, float b) {
  float d = abs(a - b);
  return min(d, 1.0 - d);
}

// 0..1..0 triangle wave
float tri(float x) {
  return 1.0 - abs(fract(x) * 2.0 - 1.0);
}

void main() {
  vec2 uv = v_texcoord;
  float t = u_time * max(u_speed, 0.0001);

  // ✅ image smaller (~2/3 screen)
  vec2 imgUV = (uv - 0.5) / max(u_imageSize, 0.0001) + 0.5;
  float maskImg = inside01(imgUV);

  // ------------------------------------------------------------
  // ✅ WAVY DEFORMATION (kept)
  // ------------------------------------------------------------
  vec2 baseUV = imgUV;

  baseUV.y += sin(imgUV.x * 6.0 + t * 0.70 + seed) * 0.0020 * u_amount;
  baseUV.x += sin(imgUV.y * 4.0 + t * 0.60 + seed) * 0.0015 * u_amount;

  baseUV += vec2(
    sin((imgUV.x + imgUV.y) * 3.0 + t * 0.25 + seed * 2.0),
    cos((imgUV.x - imgUV.y) * 3.0 + t * 0.22 + seed * 2.0)
  ) * 0.0030 * u_amount;

  baseUV.y += sin(imgUV.x * 2.0 + t * 0.18 + seed * 5.0) * 0.0035 * u_amount;
  baseUV.x += sin(imgUV.y * 10.0 + t * 0.40 + seed * 7.0) * 0.0010 * u_amount;

  // ------------------------------------------------------------
  // ✅ MOVING RECTANGLES ("cars") — NO image translation inside cars
  // They:
  // - move left -> right
  // - grow in width then shrink (loop)
  // - locally magnify (lens) + horizontal chromatic offset
  // - do NOT warp/shift the image (no carWarp)
  // ------------------------------------------------------------
  float carsMask = 0.0;
  vec2 carUV = baseUV;

  const int CAR_COUNT = 18;

  for (int i = 0; i < CAR_COUNT; i++) {
    float fi = float(i);

    // lanes
    float laneY = mix(0.12, 0.88, hash11(seed * 201.7 + fi * 13.1));

    // ✅ thinner cars (height)
    float laneH = mix(0.0025, 0.0055, hash11(seed * 311.3 + fi * 9.7));

    // movement
    float carSpeed = mix(0.012, 0.035, hash11(seed * 88.8 + fi * 6.2));
    float x0 = hash11(seed * 55.1 + fi * 21.7);
    float carX = fract(x0 + t * carSpeed);

    // width pulse (grow then shrink)
    float baseW = mix(0.12, 0.26, hash11(seed * 127.9 + fi * 4.9)); // longer base
    float ampW  = mix(0.14, 0.34, hash11(seed * 333.8 + fi * 2.3)); // growth amount
    float rate  = mix(0.08, 0.18, hash11(seed * 444.4 + fi * 1.7)); // loop speed

    float pulse = tri(t * rate + x0);
    float carW = baseW + ampW * pulse;

    // soft edges
    float featherX = 0.020;
    float featherY = 0.003;

    // rectangle mask (wrap x for looping)
    float dx = wrapDist(uv.x, carX);
    float dy = abs(uv.y - laneY);

    float fx = smoothstep(carW * 0.5 + featherX, carW * 0.5, dx);
    float fy = smoothstep(laneH + featherY, laneH, dy);

    float car = fx * fy * maskImg;

    carsMask = max(carsMask, car);

    // ✅ local magnify (lens) WITHOUT shifting the image:
    // only changes sampling locally, centered on the car, no slice jitter
    float lensStrength = (0.08 + 0.10 * pulse) * u_amount;
    vec2 carCenter = vec2(carX, laneY);

    // falloff makes it feel more lens-like (strong center, softer edge)
    float falloff = car * car;

    // move sampling coords slightly toward the car center (local zoom)
    carUV += (carCenter - uv) * (falloff * lensStrength);
  }

  // ------------------------------------------------------------
  // sampling + subtle chromatic offset (mostly horizontal) inside cars
  // ------------------------------------------------------------
  float rgbBase = 0.0010 * u_amount;
  float rgbCar  = 0.0045 * carsMask * u_amount;
  float rgb = rgbBase + rgbCar;

  vec2 ro = vec2(rgb, 0.0);

  vec4 texR = texture2D(image, carUV + ro);
  vec4 texG = texture2D(image, carUV);
  vec4 texB = texture2D(image, carUV - ro);

  vec4 tex = vec4(texR.r, texG.g, texB.b, texG.a);

  // gentle highlight where cars pass (optional)
  tex.rgb = mix(tex.rgb, tex.rgb * 0.75 + vec3(1.0) * 0.16, carsMask * 0.28 * u_amount);

  // apply image mask to alpha so outside region becomes bg
  tex.a *= maskImg;

  // composite over bg
  vec3 outRgb = mix(u_bg, tex.rgb, tex.a);
  gl_FragColor = vec4(outRgb, 1.0);
}
`;
