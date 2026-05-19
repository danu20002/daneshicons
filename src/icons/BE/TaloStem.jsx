import React from 'react';

export const iconData = {
  "id": "TaloStem",
  "name": "TaloStem",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 8.32 0 1 0 16.65 0 a 8.32 8.32 0 1 0 -16.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 12.00 a 5.80 5.80 0 1 1 11.60 0 a 5.80 5.80 0 1 1 -11.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 12.00 L 21.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 16.23 L 20.26 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 19.12 L 16.08 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 19.74 L 10.60 21.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 17.91 L 5.57 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 14.20 L 2.57 14.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 9.80 L 2.57 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 6.09 L 5.57 4.58"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 4.26 L 10.60 2.28"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 4.88 L 16.08 3.06"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 7.77 L 20.26 6.69"
      }
    ]
  ]
};

export const TaloStem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 12.00 a 8.32 8.32 0 1 0 16.65 0 a 8.32 8.32 0 1 0 -16.65 0" />
      <path d="M 6.20 12.00 a 5.80 5.80 0 1 1 11.60 0 a 5.80 5.80 0 1 1 -11.60 0" />
      <path d="M 19.82 12.00 L 21.82 12.00" />
      <path d="M 18.58 16.23 L 20.26 17.31" />
      <path d="M 15.25 19.12 L 16.08 20.94" />
      <path d="M 10.89 19.74 L 10.60 21.72" />
      <path d="M 6.88 17.91 L 5.57 19.42" />
      <path d="M 4.49 14.20 L 2.57 14.77" />
      <path d="M 4.49 9.80 L 2.57 9.23" />
      <path d="M 6.88 6.09 L 5.57 4.58" />
      <path d="M 10.89 4.26 L 10.60 2.28" />
      <path d="M 15.25 4.88 L 16.08 3.06" />
      <path d="M 18.58 7.77 L 20.26 6.69" />
      {children}
    </svg>
  );
});

export default TaloStem;
