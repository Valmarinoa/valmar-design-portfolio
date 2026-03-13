import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  stroke?: string;
  fill?: string;
};

export function OrderIcon({
  stroke = "currentColor",
  fill = "none",
  className,
  ...props
}: Props) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 64L8.56693 46.5H54.9291L64 64H0Z" fill="white"/>
    <path d="M10.5827 41.5L52.4094 41L43.8425 23.5H19.6535L10.5827 41.5Z" fill="white"/>
    <path d="M41.3228 18.5H21.6693L31.2441 0L41.3228 18.5Z" fill="white"/>
    </svg>
    
  );
}