import React from 'react';

export const iconData = {
  "id": "PhytoRice",
  "name": "PhytoRice",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.68 13.47 L 7.79 8.84 L 10.53 1.68 L 15.16 7.79 L 22.32 10.53 L 16.21 15.16 L 13.47 22.32 L 8.84 16.21 Z"
      }
    ]
  ]
};

export const PhytoRice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.68 13.47 L 7.79 8.84 L 10.53 1.68 L 15.16 7.79 L 22.32 10.53 L 16.21 15.16 L 13.47 22.32 L 8.84 16.21 Z" />
      {children}
    </svg>
  );
});

export default PhytoRice;
