import { type SVGProps } from "react";
import href from "./icon.svg";
export { href };

export default function Icon({ icon, ...props}: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg {...props}>
      <use href={`${href}#${icon}`} />
    </svg>
  );
}

export const iconNames = [
  "TapIcon",
  "TapIcon2",
  "TapLogoTextHerot",
  "TapLogoTextReducedHeightWhite",
  "TapLogoTextWhiteLargert",
  "TapWhiteLogo",
  "chevron-down",
  "tapCyan",
  "undraw_data_processing_yrrv",
] as const;
export type IconName = typeof iconNames[number];