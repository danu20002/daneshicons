import React from 'react';

export const iconData = {
  "id": "SoroGroove",
  "name": "SoroGroove",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 12.00 a 4.81 4.81 0 1 0 9.62 0 a 4.81 4.81 0 1 0 -9.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.38 12.00 a 7.62 7.62 0 1 0 15.24 0 a 7.62 7.62 0 1 0 -15.24 0"
      }
    ]
  ]
};

export const SoroGroove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0" stroke-dasharray="4 1" />
      <path d="M 7.19 12.00 a 4.81 4.81 0 1 0 9.62 0 a 4.81 4.81 0 1 0 -9.62 0" />
      <path d="M 4.38 12.00 a 7.62 7.62 0 1 0 15.24 0 a 7.62 7.62 0 1 0 -15.24 0" />
      {children}
    </svg>
  );
});

export default SoroGroove;
