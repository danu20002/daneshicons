import React from 'react';

export const iconData = {
  "id": "VinileRadix",
  "name": "VinileRadix",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.16 5.53 A 4.17 4.11 18 0 0 14.27 11.53"
      }
    ],
    [
      "path",
      {
        "d": "M 15.80 12.07 A 5.50 4.82 94 0 1 10.38 3.09"
      }
    ],
    [
      "path",
      {
        "d": "M 11.80 8.50 Q 2.55 13.80 15.78 4.35"
      }
    ],
    [
      "path",
      {
        "d": "M 21.74 12.57 L 7.59 19.74 L 8.88 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 12.62 Q 2.30 19.93 18.24 11.28"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 16.08 L 16.84 15.37"
      }
    ]
  ]
};

export const VinileRadix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.16 5.53 A 4.17 4.11 18 0 0 14.27 11.53" />
      <path d="M 15.80 12.07 A 5.50 4.82 94 0 1 10.38 3.09" />
      <path d="M 11.80 8.50 Q 2.55 13.80 15.78 4.35" />
      <path d="M 21.74 12.57 L 7.59 19.74 L 8.88 19.58" />
      <path d="M 18.13 12.62 Q 2.30 19.93 18.24 11.28" />
      <path d="M 3.60 16.08 L 16.84 15.37" />
      {children}
    </svg>
  );
});

export default VinileRadix;
