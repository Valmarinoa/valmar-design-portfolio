export const rosaFrag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D image;
uniform float seed;

uniform float u_useBlocks;
uniform float u_speed;
uniform float u_imageScale;

// chromatic
uniform float u_chromatic;

// background color (0..1)
uniform vec3 u_bg;

varying vec2 v_texcoord;

vec2 aspect(vec2 uv, float texture_ratio, float canvas_ratio) {
  if (texture_ratio > canvas_ratio) {
    float diff = canvas_ratio / texture_ratio;
    uv.x *= diff;
    uv.x += (1.0 - diff) / 2.0;
  } else {
    float diff = texture_ratio / canvas_ratio;
    uv.y *= diff;
    uv.y += (1.0 - diff) / 2.0;
  }
  return uv;
}

void main() {
  vec2 uv = v_texcoord;

  float canvas_ratio = u_resolution.x / u_resolution.y;
  vec2 coords = aspect(uv, 1.0, canvas_ratio);
  coords = mix(vec2(0.1), vec2(0.9), coords);

  // scale image around center
  coords = (coords - 0.5) / max(u_imageScale, 0.0001) + 0.5;

  float t = u_time * u_speed;

  vec2 gridUV = uv;
  if (u_useBlocks > 0.5) {
    float blocks = 32.0;
    gridUV = floor(uv * blocks) / blocks;
  }

  // ✅ natural distortion only (no mouse)
  vec2 distortion = 0.1 * vec2(
    sin(t * 0.5 + gridUV.x + gridUV.y * 2.5 + seed),
    cos(t * 0.2 + gridUV.y * 4.0 + seed)
  );

  // chromatic offset
  float chroma = u_chromatic * 0.01;
  vec2 ro = vec2(chroma, 0.0);

  vec4 base = texture2D(image, coords + distortion);

  float r = texture2D(image, coords + distortion + ro).r;
  float g = base.g;
  float b = texture2D(image, coords + distortion - ro).b;

  vec4 tex = vec4(r, g, b, base.a);

  // composite over background color using alpha
  vec3 outRgb = mix(u_bg, tex.rgb, tex.a);
  gl_FragColor = vec4(outRgb, 1.0);
}
`;
