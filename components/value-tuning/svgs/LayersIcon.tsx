import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  stroke?: string;
  fill?: string;
};

export function LayersIcon({
  stroke = "currentColor",
  fill = "none",
  className,
  ...props
}: Props) {
  return (
    <svg width="71" height="68" viewBox="0 0 71 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5244 44.6722L3.44751 49.9284L35.4475 65.6719L67.4475 49.9284L55.7552 44.6722M55.7552 27.8916L67.4475 33.1478L35.4475 48.8913L3.44751 33.1478L14.5244 27.8916M35.4475 1.67188L3.44751 17.416L35.4475 33.1595L67.4475 17.416L35.4475 1.67188Z" stroke="white" strokeWidth="3"/>
</svg>

  );
}