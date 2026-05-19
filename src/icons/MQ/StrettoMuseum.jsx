import React from 'react';

export const iconData = {
  "id": "StrettoMuseum",
  "name": "StrettoMuseum",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.80 16.37 Q 8.05 17.34 8.64 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 8.33 L 4.29 10.00 L 7.82 13.19 L 12.59 8.62"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 6.61 A 3.38 5.34 40 0 0 16.34 9.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 18.59 C 9.78 15.87, 5.33 12.42, 15.32 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 3.35 C 4.34 7.21, 7.58 5.62, 3.90 13.71"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 13.98 C 15.95 10.77, 8.67 18.52, 11.45 14.60"
      }
    ]
  ]
};

export const StrettoMuseum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.80 16.37 Q 8.05 17.34 8.64 19.03" />
      <path d="M 4.74 8.33 L 4.29 10.00 L 7.82 13.19 L 12.59 8.62" />
      <path d="M 9.33 6.61 A 3.38 5.34 40 0 0 16.34 9.56" />
      <path d="M 4.30 18.59 C 9.78 15.87, 5.33 12.42, 15.32 18.08" />
      <path d="M 5.62 3.35 C 4.34 7.21, 7.58 5.62, 3.90 13.71" />
      <path d="M 14.57 13.98 C 15.95 10.77, 8.67 18.52, 11.45 14.60" />
      {children}
    </svg>
  );
});

export default StrettoMuseum;
