import React from 'react';

export const iconData = {
  "id": "ZoppicoCrank",
  "name": "ZoppicoCrank",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.59 0 a 8.30 8.30 0 1 0 -16.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 12.00 a 6.63 6.63 0 1 1 13.26 0 a 6.63 6.63 0 1 1 -13.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 12.00 L 21.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 15.90 L 20.48 16.90"
      }
    ],
    [
      "path",
      {
        "d": "M 15.90 18.75 L 16.90 20.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.80 L 12.00 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 18.75 L 7.10 20.48"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 15.90 L 3.52 16.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 12.00 L 2.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 8.10 L 3.52 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 5.25 L 7.10 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.20 L 12.00 2.20"
      }
    ],
    [
      "path",
      {
        "d": "M 15.90 5.25 L 16.90 3.52"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 8.10 L 20.48 7.10"
      }
    ]
  ]
};

export const ZoppicoCrank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.59 0 a 8.30 8.30 0 1 0 -16.59 0" />
      <path d="M 5.37 12.00 a 6.63 6.63 0 1 1 13.26 0 a 6.63 6.63 0 1 1 -13.26 0" />
      <path d="M 19.80 12.00 L 21.80 12.00" />
      <path d="M 18.75 15.90 L 20.48 16.90" />
      <path d="M 15.90 18.75 L 16.90 20.48" />
      <path d="M 12.00 19.80 L 12.00 21.80" />
      <path d="M 8.10 18.75 L 7.10 20.48" />
      <path d="M 5.25 15.90 L 3.52 16.90" />
      <path d="M 4.20 12.00 L 2.20 12.00" />
      <path d="M 5.25 8.10 L 3.52 7.10" />
      <path d="M 8.10 5.25 L 7.10 3.52" />
      <path d="M 12.00 4.20 L 12.00 2.20" />
      <path d="M 15.90 5.25 L 16.90 3.52" />
      <path d="M 18.75 8.10 L 20.48 7.10" />
      {children}
    </svg>
  );
});

export default ZoppicoCrank;
