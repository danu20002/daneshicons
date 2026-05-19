import React from 'react';

export const iconData = {
  "id": "PolpoBrace",
  "name": "PolpoBrace",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.61 0 a 8.31 8.31 0 1 0 -16.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.81 12.00 L 21.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 17.02 L 19.51 18.30"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 19.69 L 13.70 21.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 18.76 L 7.10 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 14.67 L 2.79 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 9.33 L 2.79 8.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 5.24 L 7.10 3.51"
      }
    ],
    [
      "path",
      {
        "d": "M 13.36 4.31 L 13.70 2.34"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 6.98 L 19.51 5.70"
      }
    ]
  ]
};

export const PolpoBrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.61 0 a 8.31 8.31 0 1 0 -16.61 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.42 0 a 5.71 5.71 0 1 1 -11.42 0" />
      <path d="M 19.81 12.00 L 21.81 12.00" />
      <path d="M 17.98 17.02 L 19.51 18.30" />
      <path d="M 13.36 19.69 L 13.70 21.66" />
      <path d="M 8.10 18.76 L 7.10 20.49" />
      <path d="M 4.67 14.67 L 2.79 15.35" />
      <path d="M 4.67 9.33 L 2.79 8.65" />
      <path d="M 8.10 5.24 L 7.10 3.51" />
      <path d="M 13.36 4.31 L 13.70 2.34" />
      <path d="M 17.98 6.98 L 19.51 5.70" />
      {children}
    </svg>
  );
});

export default PolpoBrace;
