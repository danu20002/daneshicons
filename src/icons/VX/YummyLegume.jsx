import React from 'react';

export const iconData = {
  "id": "YummyLegume",
  "name": "YummyLegume",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 12.00 a 4.90 4.90 0 1 0 9.79 0 a 4.90 4.90 0 1 0 -9.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0"
      }
    ]
  ]
};

export const YummyLegume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 12.00 a 2.11 2.11 0 1 0 4.21 0 a 2.11 2.11 0 1 0 -4.21 0" stroke-dasharray="6 3" />
      <path d="M 7.10 12.00 a 4.90 4.90 0 1 0 9.79 0 a 4.90 4.90 0 1 0 -9.79 0" />
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0" />
      {children}
    </svg>
  );
});

export default YummyLegume;
