import React from 'react';

export const iconData = {
  "id": "VarroTransit",
  "name": "VarroTransit",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 12.00 a 6.91 6.91 0 1 1 13.81 0 a 6.91 6.91 0 1 1 -13.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 12.00 L 21.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 16.30 L 20.38 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 19.24 L 16.14 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 19.88 L 10.58 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 18.02 L 5.48 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 14.24 L 2.44 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.36 9.76 L 2.44 9.19"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 5.98 L 5.48 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 4.12 L 10.58 2.14"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 4.76 L 16.14 2.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 7.70 L 20.38 6.61"
      }
    ]
  ]
};

export const VarroTransit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      <path d="M 5.09 12.00 a 6.91 6.91 0 1 1 13.81 0 a 6.91 6.91 0 1 1 -13.81 0" />
      <path d="M 19.96 12.00 L 21.96 12.00" />
      <path d="M 18.70 16.30 L 20.38 17.39" />
      <path d="M 15.31 19.24 L 16.14 21.06" />
      <path d="M 10.87 19.88 L 10.58 21.86" />
      <path d="M 6.79 18.02 L 5.48 19.53" />
      <path d="M 4.36 14.24 L 2.44 14.81" />
      <path d="M 4.36 9.76 L 2.44 9.19" />
      <path d="M 6.79 5.98 L 5.48 4.47" />
      <path d="M 10.87 4.12 L 10.58 2.14" />
      <path d="M 15.31 4.76 L 16.14 2.94" />
      <path d="M 18.70 7.70 L 20.38 6.61" />
      {children}
    </svg>
  );
});

export default VarroTransit;
