import React from 'react';

export const iconData = {
  "id": "VentaglioToilet",
  "name": "VentaglioToilet",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 6.32 L 19.96 6.32 L 19.96 17.68 L 4.04 17.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 6.32 L 8.94 1.42 L 24.86 1.42 L 19.96 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 6.32 L 24.86 1.42 L 24.86 12.78 L 19.96 17.68"
      }
    ]
  ]
};

export const VentaglioToilet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 6.32 L 19.96 6.32 L 19.96 17.68 L 4.04 17.68 Z" />
      <path d="M 4.04 6.32 L 8.94 1.42 L 24.86 1.42 L 19.96 6.32" />
      <path d="M 19.96 6.32 L 24.86 1.42 L 24.86 12.78 L 19.96 17.68" />
      {children}
    </svg>
  );
});

export default VentaglioToilet;
