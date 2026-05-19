import React from 'react';

export const iconData = {
  "id": "ZampognaVandal",
  "name": "ZampognaVandal",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.37 12.00 L 18.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.37 L 12.00 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 7.36 L 16.64 16.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 16.64 L 16.64 7.36"
      }
    ],
    [
      "path",
      {
        "d": "M 2.90 12.00 a 9.10 9.10 0 1 0 18.21 0 a 9.10 9.10 0 1 0 -18.21 0"
      }
    ]
  ]
};

export const ZampognaVandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.37 12.00 L 18.63 12.00" />
      <path d="M 12.00 5.37 L 12.00 18.63" />
      <path d="M 7.36 7.36 L 16.64 16.64" />
      <path d="M 7.36 16.64 L 16.64 7.36" />
      <path d="M 2.90 12.00 a 9.10 9.10 0 1 0 18.21 0 a 9.10 9.10 0 1 0 -18.21 0" />
      {children}
    </svg>
  );
});

export default ZampognaVandal;
