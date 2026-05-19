import React from 'react';

export const iconData = {
  "id": "VocaleSwift",
  "name": "VocaleSwift",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 12.00 a 8.59 8.59 0 1 0 17.17 0 a 8.59 8.59 0 1 0 -17.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 12.00 a 6.17 6.17 0 1 1 12.35 0 a 6.17 6.17 0 1 1 -12.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.09 12.00 L 22.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 16.37 L 20.49 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.36 19.36 L 16.19 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 20.01 L 10.56 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 18.11 L 5.39 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 14.28 L 2.32 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 9.72 L 2.32 9.16"
      }
    ],
    [
      "path",
      {
        "d": "M 6.70 5.89 L 5.39 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 3.99 L 10.56 2.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.36 4.64 L 16.19 2.82"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 7.63 L 20.49 6.55"
      }
    ]
  ]
};

export const VocaleSwift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 12.00 a 8.59 8.59 0 1 0 17.17 0 a 8.59 8.59 0 1 0 -17.17 0" />
      <path d="M 5.83 12.00 a 6.17 6.17 0 1 1 12.35 0 a 6.17 6.17 0 1 1 -12.35 0" />
      <path d="M 20.09 12.00 L 22.09 12.00" />
      <path d="M 18.80 16.37 L 20.49 17.45" />
      <path d="M 15.36 19.36 L 16.19 21.18" />
      <path d="M 10.85 20.01 L 10.56 21.98" />
      <path d="M 6.70 18.11 L 5.39 19.62" />
      <path d="M 4.24 14.28 L 2.32 14.84" />
      <path d="M 4.24 9.72 L 2.32 9.16" />
      <path d="M 6.70 5.89 L 5.39 4.38" />
      <path d="M 10.85 3.99 L 10.56 2.02" />
      <path d="M 15.36 4.64 L 16.19 2.82" />
      <path d="M 18.80 7.63 L 20.49 6.55" />
      {children}
    </svg>
  );
});

export default VocaleSwift;
