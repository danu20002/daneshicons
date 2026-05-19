import React from 'react';

export const iconData = {
  "id": "RivoStone",
  "name": "RivoStone",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 12.00 a 6.87 6.87 0 1 1 13.74 0 a 6.87 6.87 0 1 1 -13.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 12.00 L 22.10 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.05 18.33 L 18.30 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 19.90 L 9.75 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 15.52 L 2.90 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 8.48 L 2.90 7.62"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 4.10 L 9.75 2.15"
      }
    ],
    [
      "path",
      {
        "d": "M 17.05 5.67 L 18.30 4.10"
      }
    ]
  ]
};

export const RivoStone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0" />
      <path d="M 5.13 12.00 a 6.87 6.87 0 1 1 13.74 0 a 6.87 6.87 0 1 1 -13.74 0" />
      <path d="M 20.10 12.00 L 22.10 12.00" />
      <path d="M 17.05 18.33 L 18.30 19.90" />
      <path d="M 10.20 19.90 L 9.75 21.85" />
      <path d="M 4.70 15.52 L 2.90 16.38" />
      <path d="M 4.70 8.48 L 2.90 7.62" />
      <path d="M 10.20 4.10 L 9.75 2.15" />
      <path d="M 17.05 5.67 L 18.30 4.10" />
      {children}
    </svg>
  );
});

export default RivoStone;
