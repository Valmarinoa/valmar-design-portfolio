import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  stroke?: string;
  fill?: string;
};

export function ContextIcon({
  stroke = "white",
  fill = "none",
  className,
  ...props
}: Props) {
  return (
    <svg width="80" height="52" viewBox="0 0 80 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.31763 51L22.5319 12L35.8891 31.5M49.2462 51L35.8891 31.5M35.8891 31.5L49.2462 18.5L78.3176 51" stroke="white" strokeWidth="3"/>
    <circle cx="39.8176" cy="4.5" r="4.5" fill="white"/>
    </svg>
    
  );
}