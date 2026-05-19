import React from 'react';

export const iconData = {
  "id": "PentaMost",
  "name": "PentaMost",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.50 14.11 Q 10.45 20.20 8.26 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 14.89 L 17.62 11.21 L 15.08 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 18.69 A 6.13 2.36 15 0 0 8.45 14.71"
      }
    ]
  ]
};

export const PentaMost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.50 14.11 Q 10.45 20.20 8.26 17.27" />
      <path d="M 14.98 14.89 L 17.62 11.21 L 15.08 9.09" />
      <path d="M 13.36 18.69 A 6.13 2.36 15 0 0 8.45 14.71" />
      {children}
    </svg>
  );
});

export default PentaMost;
