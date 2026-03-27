type Props = {
  color1: string;
  color2: string;
  color3: string;
  className?: string;
};

/**
 * Static CSS gradient approximation of the Granient WebGL component.
 * Three radial blobs blended over a base color — no animation, no WebGL.
 */
export default function StaticGradient({ color1, color2, color3, className = "" }: Props) {
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        background: `
          radial-gradient(ellipse at 15% 70%, ${color1} 0%, transparent 55%),
          radial-gradient(ellipse at 85% 20%, ${color2} 0%, transparent 55%),
          radial-gradient(ellipse at 50% 100%, ${color1}88 0%, transparent 40%),
          ${color3}
        `,
      }}
    />
  );
}
