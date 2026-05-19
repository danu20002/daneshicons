import React from 'react';

export const iconData = {
  "id": "PentaSterling",
  "name": "PentaSterling",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.41 0 a 5.71 5.71 0 1 1 -11.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 12.00 L 20.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 15.67 L 19.39 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 14.82 18.18 L 15.65 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 11.03 18.72 L 10.75 20.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 17.13 L 6.24 18.64"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 13.91 L 3.57 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 10.09 L 3.57 9.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 6.87 L 6.24 5.36"
      }
    ],
    [
      "path",
      {
        "d": "M 11.03 5.28 L 10.75 3.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.82 5.82 L 15.65 4.01"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 8.33 L 19.39 7.25"
      }
    ]
  ]
};

export const PentaSterling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.41 0 a 5.71 5.71 0 1 1 -11.41 0" />
      <path d="M 18.79 12.00 L 20.79 12.00" />
      <path d="M 17.71 15.67 L 19.39 16.75" />
      <path d="M 14.82 18.18 L 15.65 19.99" />
      <path d="M 11.03 18.72 L 10.75 20.70" />
      <path d="M 7.55 17.13 L 6.24 18.64" />
      <path d="M 5.49 13.91 L 3.57 14.48" />
      <path d="M 5.49 10.09 L 3.57 9.52" />
      <path d="M 7.55 6.87 L 6.24 5.36" />
      <path d="M 11.03 5.28 L 10.75 3.30" />
      <path d="M 14.82 5.82 L 15.65 4.01" />
      <path d="M 17.71 8.33 L 19.39 7.25" />
      {children}
    </svg>
  );
});

export default PentaSterling;
