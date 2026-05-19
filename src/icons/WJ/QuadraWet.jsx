import React from 'react';

export const iconData = {
  "id": "QuadraWet",
  "name": "QuadraWet",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.15 12.00 a 7.85 7.85 0 1 0 15.71 0 a 7.85 7.85 0 1 0 -15.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 12.00 a 5.18 5.18 0 1 1 10.37 0 a 5.18 5.18 0 1 1 -10.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.35 12.00 L 21.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.63 16.73 L 19.16 18.01"
      }
    ],
    [
      "path",
      {
        "d": "M 13.28 19.24 L 13.62 21.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 18.37 L 7.32 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 14.51 L 3.21 15.20"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 9.49 L 3.21 8.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.32 5.63 L 7.32 3.90"
      }
    ],
    [
      "path",
      {
        "d": "M 13.28 4.76 L 13.62 2.79"
      }
    ],
    [
      "path",
      {
        "d": "M 17.63 7.27 L 19.16 5.99"
      }
    ]
  ]
};

export const QuadraWet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.15 12.00 a 7.85 7.85 0 1 0 15.71 0 a 7.85 7.85 0 1 0 -15.71 0" />
      <path d="M 6.82 12.00 a 5.18 5.18 0 1 1 10.37 0 a 5.18 5.18 0 1 1 -10.37 0" />
      <path d="M 19.35 12.00 L 21.35 12.00" />
      <path d="M 17.63 16.73 L 19.16 18.01" />
      <path d="M 13.28 19.24 L 13.62 21.21" />
      <path d="M 8.32 18.37 L 7.32 20.10" />
      <path d="M 5.09 14.51 L 3.21 15.20" />
      <path d="M 5.09 9.49 L 3.21 8.80" />
      <path d="M 8.32 5.63 L 7.32 3.90" />
      <path d="M 13.28 4.76 L 13.62 2.79" />
      <path d="M 17.63 7.27 L 19.16 5.99" />
      {children}
    </svg>
  );
});

export default QuadraWet;
