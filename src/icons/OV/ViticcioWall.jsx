import React from 'react';

export const iconData = {
  "id": "ViticcioWall",
  "name": "ViticcioWall",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 11.02 A 5.05 6.04 44 0 0 15.12 12.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 14.13 L 8.00 17.15"
      }
    ]
  ]
};

export const ViticcioWall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 11.02 A 5.05 6.04 44 0 0 15.12 12.16" />
      <path d="M 4.11 14.13 L 8.00 17.15" />
      {children}
    </svg>
  );
});

export default ViticcioWall;
