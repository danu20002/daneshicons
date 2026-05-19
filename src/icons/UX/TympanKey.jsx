import React from 'react';

export const iconData = {
  "id": "TympanKey",
  "name": "TympanKey",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 12.00 a 8.10 8.10 0 1 0 16.20 0 a 8.10 8.10 0 1 0 -16.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 1 11.23 0 a 5.62 5.62 0 1 1 -11.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.60 12.00 L 21.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 15.80 L 20.31 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 15.80 18.58 L 16.80 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.60 L 12.00 21.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 18.58 L 7.20 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 15.80 L 3.69 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 12.00 L 2.40 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.42 8.20 L 3.69 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 5.42 L 7.20 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.40 L 12.00 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.80 5.42 L 16.80 3.69"
      }
    ],
    [
      "path",
      {
        "d": "M 18.58 8.20 L 20.31 7.20"
      }
    ]
  ]
};

export const TympanKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 12.00 a 8.10 8.10 0 1 0 16.20 0 a 8.10 8.10 0 1 0 -16.20 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 1 11.23 0 a 5.62 5.62 0 1 1 -11.23 0" />
      <path d="M 19.60 12.00 L 21.60 12.00" />
      <path d="M 18.58 15.80 L 20.31 16.80" />
      <path d="M 15.80 18.58 L 16.80 20.31" />
      <path d="M 12.00 19.60 L 12.00 21.60" />
      <path d="M 8.20 18.58 L 7.20 20.31" />
      <path d="M 5.42 15.80 L 3.69 16.80" />
      <path d="M 4.40 12.00 L 2.40 12.00" />
      <path d="M 5.42 8.20 L 3.69 7.20" />
      <path d="M 8.20 5.42 L 7.20 3.69" />
      <path d="M 12.00 4.40 L 12.00 2.40" />
      <path d="M 15.80 5.42 L 16.80 3.69" />
      <path d="M 18.58 8.20 L 20.31 7.20" />
      {children}
    </svg>
  );
});

export default TympanKey;
