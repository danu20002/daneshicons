import React from 'react';

export const iconData = {
  "id": "StigmaDesign",
  "name": "StigmaDesign",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.51 14.83 L 8.29 10.59 L 6.06 2.90 L 12.20 8.04 L 18.82 3.54 L 15.83 10.96 L 22.15 15.87 L 14.17 15.32 L 11.45 22.85 L 9.51 15.09 Z"
      }
    ]
  ]
};

export const StigmaDesign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.51 14.83 L 8.29 10.59 L 6.06 2.90 L 12.20 8.04 L 18.82 3.54 L 15.83 10.96 L 22.15 15.87 L 14.17 15.32 L 11.45 22.85 L 9.51 15.09 Z" />
      {children}
    </svg>
  );
});

export default StigmaDesign;
