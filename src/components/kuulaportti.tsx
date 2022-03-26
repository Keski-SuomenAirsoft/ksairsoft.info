import React, { SVGAttributes } from "react";
import { ThemeUIStyleObject } from "theme-ui";

export const Kuulaportti: React.FC<
  ThemeUIStyleObject & SVGAttributes<SVGSVGElement>
> = (props) => (
  <svg
    width="420"
    height="297"
    viewBox="0 0 420 297"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="271.5" cy="148.5" r="148.5" fill="#ccc6be" />
    <circle cx="148.5" cy="148.5" r="148.5" fill="#726250" />
  </svg>
);
