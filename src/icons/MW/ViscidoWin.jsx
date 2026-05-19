import React from 'react';

export const iconData = {
  "id": "ViscidoWin",
  "name": "ViscidoWin",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 12.00 a 7.30 7.30 0 1 0 14.59 0 a 7.30 7.30 0 1 0 -14.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 a 5.13 5.13 0 1 1 10.26 0 a 5.13 5.13 0 1 1 -10.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.80 12.00 L 20.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 15.40 L 19.62 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 17.89 L 16.40 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.80 L 12.00 20.80"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 17.89 L 7.60 19.62"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 15.40 L 4.38 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 12.00 L 3.20 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.11 8.60 L 4.38 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 6.11 L 7.60 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.20 L 12.00 3.20"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 6.11 L 16.40 4.38"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 8.60 L 19.62 7.60"
      }
    ]
  ]
};

export const ViscidoWin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 12.00 a 7.30 7.30 0 1 0 14.59 0 a 7.30 7.30 0 1 0 -14.59 0" />
      <path d="M 6.87 12.00 a 5.13 5.13 0 1 1 10.26 0 a 5.13 5.13 0 1 1 -10.26 0" />
      <path d="M 18.80 12.00 L 20.80 12.00" />
      <path d="M 17.89 15.40 L 19.62 16.40" />
      <path d="M 15.40 17.89 L 16.40 19.62" />
      <path d="M 12.00 18.80 L 12.00 20.80" />
      <path d="M 8.60 17.89 L 7.60 19.62" />
      <path d="M 6.11 15.40 L 4.38 16.40" />
      <path d="M 5.20 12.00 L 3.20 12.00" />
      <path d="M 6.11 8.60 L 4.38 7.60" />
      <path d="M 8.60 6.11 L 7.60 4.38" />
      <path d="M 12.00 5.20 L 12.00 3.20" />
      <path d="M 15.40 6.11 L 16.40 4.38" />
      <path d="M 17.89 8.60 L 19.62 7.60" />
      {children}
    </svg>
  );
});

export default ViscidoWin;
