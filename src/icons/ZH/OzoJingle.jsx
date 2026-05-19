import React from 'react';

export const iconData = {
  "id": "OzoJingle",
  "name": "OzoJingle",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.35 12.00 a 6.65 6.65 0 1 1 13.29 0 a 6.65 6.65 0 1 1 -13.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.88 12.00 L 21.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 16.26 L 20.31 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 19.17 L 16.10 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 19.80 L 10.59 21.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 17.95 L 5.53 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 14.22 L 2.52 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 9.78 L 2.52 9.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 6.05 L 5.53 4.53"
      }
    ],
    [
      "path",
      {
        "d": "M 10.88 4.20 L 10.59 2.22"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 4.83 L 16.10 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 7.74 L 20.31 6.66"
      }
    ]
  ]
};

export const OzoJingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 12.00 a 8.38 8.38 0 1 0 16.76 0 a 8.38 8.38 0 1 0 -16.76 0" />
      <path d="M 5.35 12.00 a 6.65 6.65 0 1 1 13.29 0 a 6.65 6.65 0 1 1 -13.29 0" />
      <path d="M 19.88 12.00 L 21.88 12.00" />
      <path d="M 18.63 16.26 L 20.31 17.34" />
      <path d="M 15.27 19.17 L 16.10 20.99" />
      <path d="M 10.88 19.80 L 10.59 21.78" />
      <path d="M 6.84 17.95 L 5.53 19.47" />
      <path d="M 4.44 14.22 L 2.52 14.78" />
      <path d="M 4.44 9.78 L 2.52 9.22" />
      <path d="M 6.84 6.05 L 5.53 4.53" />
      <path d="M 10.88 4.20 L 10.59 2.22" />
      <path d="M 15.27 4.83 L 16.10 3.01" />
      <path d="M 18.63 7.74 L 20.31 6.66" />
      {children}
    </svg>
  );
});

export default OzoJingle;
