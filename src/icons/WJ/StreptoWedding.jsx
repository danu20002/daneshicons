import React from 'react';

export const iconData = {
  "id": "StreptoWedding",
  "name": "StreptoWedding",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.29 0 a 8.14 8.14 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 12.00 a 6.27 6.27 0 1 1 12.54 0 a 6.27 6.27 0 1 1 -12.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.64 12.00 L 21.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 15.82 L 20.35 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.82 18.62 L 16.82 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.64 L 12.00 21.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 18.62 L 7.18 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 15.82 L 3.65 16.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 12.00 L 2.36 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 8.18 L 3.65 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 5.38 L 7.18 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.36 L 12.00 2.36"
      }
    ],
    [
      "path",
      {
        "d": "M 15.82 5.38 L 16.82 3.65"
      }
    ],
    [
      "path",
      {
        "d": "M 18.62 8.18 L 20.35 7.18"
      }
    ]
  ]
};

export const StreptoWedding = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.29 0 a 8.14 8.14 0 1 0 -16.29 0" />
      <path d="M 5.73 12.00 a 6.27 6.27 0 1 1 12.54 0 a 6.27 6.27 0 1 1 -12.54 0" />
      <path d="M 19.64 12.00 L 21.64 12.00" />
      <path d="M 18.62 15.82 L 20.35 16.82" />
      <path d="M 15.82 18.62 L 16.82 20.35" />
      <path d="M 12.00 19.64 L 12.00 21.64" />
      <path d="M 8.18 18.62 L 7.18 20.35" />
      <path d="M 5.38 15.82 L 3.65 16.82" />
      <path d="M 4.36 12.00 L 2.36 12.00" />
      <path d="M 5.38 8.18 L 3.65 7.18" />
      <path d="M 8.18 5.38 L 7.18 3.65" />
      <path d="M 12.00 4.36 L 12.00 2.36" />
      <path d="M 15.82 5.38 L 16.82 3.65" />
      <path d="M 18.62 8.18 L 20.35 7.18" />
      {children}
    </svg>
  );
});

export default StreptoWedding;
