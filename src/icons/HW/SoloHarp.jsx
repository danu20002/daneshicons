import React from 'react';

export const iconData = {
  "id": "SoloHarp",
  "name": "SoloHarp",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.66 20.31 L 6.14 18.46 L 3.48 10.15 L 9.34 3.69 L 17.86 5.54 L 20.52 13.85 Z"
      }
    ]
  ]
};

export const SoloHarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.66 20.31 L 6.14 18.46 L 3.48 10.15 L 9.34 3.69 L 17.86 5.54 L 20.52 13.85 Z" />
      {children}
    </svg>
  );
});

export default SoloHarp;
