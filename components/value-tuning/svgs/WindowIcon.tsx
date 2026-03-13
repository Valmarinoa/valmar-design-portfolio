import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  stroke?: string;
  fill?: string;
};

export function WindowIcon({
  stroke = "currentColor",
  fill = "black",
  className,
  ...props
}: Props) {
  return (
    <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65.4911 31.0954V65.5H33.9058M65.4911 31.0954C65.6506 25.3417 63.6985 16.2323 56.9004 9.63873M65.4911 31.0954H33.9058M1.5 31.0954V65.5H33.9058M1.5 31.0954H33.9058M1.5 31.0954C1.65683 26.0037 3.52247 17.0186 10.1142 10.2803M33.9058 1.5C44.7103 1.5 52.0426 4.92705 56.9004 9.63873M33.9058 1.5V31.0954M33.9058 1.5C22.5335 1.5 15.0167 5.26878 10.1142 10.2803M33.9058 65.5V31.0954M56.9004 9.63873L33.9058 31.0954M33.9058 31.0954L10.1142 10.2803" stroke="white" strokeWidth="3"/>
    </svg>
    
    
  );
}