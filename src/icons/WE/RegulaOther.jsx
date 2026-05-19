import React from 'react';

export const iconData = {
  "id": "RegulaOther",
  "name": "RegulaOther",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 13.67 L 13.30 21.41 L 3.45 16.15 L 5.41 5.15 L 16.48 3.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.72 14.93 L 10.98 18.34 L 5.65 12.99 L 9.09 6.27 L 16.55 7.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.63 14.09 L 10.82 15.14 L 8.65 11.85 L 11.10 8.76 L 14.80 10.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.20 12.27 L 11.80 12.28 L 11.68 11.90 L 12.00 11.66 L 12.32 11.89 Z"
      }
    ]
  ]
};

export const RegulaOther = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 13.67 L 13.30 21.41 L 3.45 16.15 L 5.41 5.15 L 16.48 3.62 Z" />
      <path d="M 17.72 14.93 L 10.98 18.34 L 5.65 12.99 L 9.09 6.27 L 16.55 7.47 Z" />
      <path d="M 14.63 14.09 L 10.82 15.14 L 8.65 11.85 L 11.10 8.76 L 14.80 10.15 Z" />
      <path d="M 12.20 12.27 L 11.80 12.28 L 11.68 11.90 L 12.00 11.66 L 12.32 11.89 Z" />
      {children}
    </svg>
  );
});

export default RegulaOther;
