import React from 'react';

export const iconData = {
  "id": "CosmoGentle",
  "name": "CosmoGentle",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 12.00 a 2.00 2.00 0 1 0 4.00 0 a 2.00 2.00 0 1 0 -4.00 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 12.00 a 4.33 4.33 0 1 0 8.65 0 a 4.33 4.33 0 1 0 -8.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.00 12.00 a 6.00 6.00 0 1 0 12.01 0 a 6.00 6.00 0 1 0 -12.01 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.83 0 a 8.42 8.42 0 1 0 -16.83 0"
      }
    ]
  ]
};

export const CosmoGentle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 12.00 a 2.00 2.00 0 1 0 4.00 0 a 2.00 2.00 0 1 0 -4.00 0" stroke-dasharray="5 1" />
      <path d="M 7.67 12.00 a 4.33 4.33 0 1 0 8.65 0 a 4.33 4.33 0 1 0 -8.65 0" />
      <path d="M 6.00 12.00 a 6.00 6.00 0 1 0 12.01 0 a 6.00 6.00 0 1 0 -12.01 0" stroke-dasharray="6 1" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.83 0 a 8.42 8.42 0 1 0 -16.83 0" />
      {children}
    </svg>
  );
});

export default CosmoGentle;
