import React from 'react';

export const iconData = {
  "id": "RustoRush",
  "name": "RustoRush",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 a 5.08 5.08 0 1 0 10.16 0 a 5.08 5.08 0 1 0 -10.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0"
      }
    ]
  ]
};

export const RustoRush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0" stroke-dasharray="4 3" />
      <path d="M 6.92 12.00 a 5.08 5.08 0 1 0 10.16 0 a 5.08 5.08 0 1 0 -10.16 0" />
      <path d="M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0" />
      {children}
    </svg>
  );
});

export default RustoRush;
