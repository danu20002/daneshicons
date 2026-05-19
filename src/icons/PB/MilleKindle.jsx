import React from 'react';

export const iconData = {
  "id": "MilleKindle",
  "name": "MilleKindle",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 12.00 a 8.51 8.51 0 1 0 17.01 0 a 8.51 8.51 0 1 0 -17.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 12.00 a 5.76 5.76 0 1 1 11.52 0 a 5.76 5.76 0 1 1 -11.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.01 12.00 L 22.01 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 17.66 L 19.08 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.01 L 12.00 22.01"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 17.66 L 4.92 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 12.00 L 1.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 6.34 L 4.92 4.92"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.99 L 12.00 1.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.66 6.34 L 19.08 4.92"
      }
    ]
  ]
};

export const MilleKindle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 12.00 a 8.51 8.51 0 1 0 17.01 0 a 8.51 8.51 0 1 0 -17.01 0" />
      <path d="M 6.24 12.00 a 5.76 5.76 0 1 1 11.52 0 a 5.76 5.76 0 1 1 -11.52 0" />
      <path d="M 20.01 12.00 L 22.01 12.00" />
      <path d="M 17.66 17.66 L 19.08 19.08" />
      <path d="M 12.00 20.01 L 12.00 22.01" />
      <path d="M 6.34 17.66 L 4.92 19.08" />
      <path d="M 3.99 12.00 L 1.99 12.00" />
      <path d="M 6.34 6.34 L 4.92 4.92" />
      <path d="M 12.00 3.99 L 12.00 1.99" />
      <path d="M 17.66 6.34 L 19.08 4.92" />
      {children}
    </svg>
  );
});

export default MilleKindle;
