import React from 'react';

export const iconData = {
  "id": "StenoPill",
  "name": "StenoPill",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.20 12.00 a 5.80 5.80 0 1 1 11.59 0 a 5.80 5.80 0 1 1 -11.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.26 12.00 L 22.26 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.15 18.46 L 18.40 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 10.16 20.05 L 9.72 22.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 15.58 L 2.76 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.56 8.42 L 2.76 7.55"
      }
    ],
    [
      "path",
      {
        "d": "M 10.16 3.95 L 9.72 2.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.15 5.54 L 18.40 3.98"
      }
    ]
  ]
};

export const StenoPill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.24 12.00 a 8.76 8.76 0 1 0 17.52 0 a 8.76 8.76 0 1 0 -17.52 0" />
      <path d="M 6.20 12.00 a 5.80 5.80 0 1 1 11.59 0 a 5.80 5.80 0 1 1 -11.59 0" />
      <path d="M 20.26 12.00 L 22.26 12.00" />
      <path d="M 17.15 18.46 L 18.40 20.02" />
      <path d="M 10.16 20.05 L 9.72 22.00" />
      <path d="M 4.56 15.58 L 2.76 16.45" />
      <path d="M 4.56 8.42 L 2.76 7.55" />
      <path d="M 10.16 3.95 L 9.72 2.00" />
      <path d="M 17.15 5.54 L 18.40 3.98" />
      {children}
    </svg>
  );
});

export default StenoPill;
