import React from 'react';

export const iconData = {
  "id": "RepsoLedger",
  "name": "RepsoLedger",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 13.30 L 13.63 21.22 L 3.74 16.40 L 5.26 5.50 L 16.10 3.59 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 14.99 L 10.91 18.32 L 5.65 12.92 L 9.16 6.25 L 16.60 7.52 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.64 13.86 L 11.04 15.09 L 8.77 12.05 L 10.96 8.94 L 14.59 10.06 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.19 12.32 L 11.75 12.28 L 11.66 11.85 L 12.03 11.63 L 12.36 11.92 Z"
      }
    ]
  ]
};

export const RepsoLedger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 13.30 L 13.63 21.22 L 3.74 16.40 L 5.26 5.50 L 16.10 3.59 Z" />
      <path d="M 17.68 14.99 L 10.91 18.32 L 5.65 12.92 L 9.16 6.25 L 16.60 7.52 Z" />
      <path d="M 14.64 13.86 L 11.04 15.09 L 8.77 12.05 L 10.96 8.94 L 14.59 10.06 Z" />
      <path d="M 12.19 12.32 L 11.75 12.28 L 11.66 11.85 L 12.03 11.63 L 12.36 11.92 Z" />
      {children}
    </svg>
  );
});

export default RepsoLedger;
