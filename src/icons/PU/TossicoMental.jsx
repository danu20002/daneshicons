import React from 'react';

export const iconData = {
  "id": "TossicoMental",
  "name": "TossicoMental",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.87 12.00 a 7.13 7.13 0 1 0 14.26 0 a 7.13 7.13 0 1 0 -14.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 12.00 a 4.15 4.15 0 1 1 8.30 0 a 4.15 4.15 0 1 1 -8.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.63 12.00 L 20.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 16.69 L 18.10 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.63 L 12.00 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 16.69 L 5.90 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 12.00 L 3.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 7.31 L 5.90 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.37 L 12.00 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 7.31 L 18.10 5.90"
      }
    ]
  ]
};

export const TossicoMental = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.87 12.00 a 7.13 7.13 0 1 0 14.26 0 a 7.13 7.13 0 1 0 -14.26 0" />
      <path d="M 7.85 12.00 a 4.15 4.15 0 1 1 8.30 0 a 4.15 4.15 0 1 1 -8.30 0" />
      <path d="M 18.63 12.00 L 20.63 12.00" />
      <path d="M 16.69 16.69 L 18.10 18.10" />
      <path d="M 12.00 18.63 L 12.00 20.63" />
      <path d="M 7.31 16.69 L 5.90 18.10" />
      <path d="M 5.37 12.00 L 3.37 12.00" />
      <path d="M 7.31 7.31 L 5.90 5.90" />
      <path d="M 12.00 5.37 L 12.00 3.37" />
      <path d="M 16.69 7.31 L 18.10 5.90" />
      {children}
    </svg>
  );
});

export default TossicoMental;
