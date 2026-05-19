import React from 'react';

export const iconData = {
  "id": "NucleoExhibit",
  "name": "NucleoExhibit",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 16.62 L 3.96 16.69 L 11.96 2.69 Z"
      }
    ]
  ]
};

export const NucleoExhibit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 20.09 16.62 L 3.96 16.69 L 11.96 2.69 Z" />
      {children}
    </svg>
  );
});

export default NucleoExhibit;
