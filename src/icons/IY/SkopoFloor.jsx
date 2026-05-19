import React from 'react';

export const iconData = {
  "id": "SkopoFloor",
  "name": "SkopoFloor",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.50 12.00 Q 13.90 12.79 18.72 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 18.72 Q 12.79 13.90 12.00 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.50 Q 11.21 13.90 5.28 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 18.72 Q 10.10 12.79 2.50 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.50 12.00 Q 10.10 11.21 5.28 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 5.28 Q 11.21 10.10 12.00 2.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.50 Q 12.79 10.10 18.72 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 5.28 Q 13.90 11.21 21.50 12.00"
      }
    ]
  ]
};

export const SkopoFloor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.50 12.00 Q 13.90 12.79 18.72 18.72" />
      <path d="M 18.72 18.72 Q 12.79 13.90 12.00 21.50" />
      <path d="M 12.00 21.50 Q 11.21 13.90 5.28 18.72" />
      <path d="M 5.28 18.72 Q 10.10 12.79 2.50 12.00" />
      <path d="M 2.50 12.00 Q 10.10 11.21 5.28 5.28" />
      <path d="M 5.28 5.28 Q 11.21 10.10 12.00 2.50" />
      <path d="M 12.00 2.50 Q 12.79 10.10 18.72 5.28" />
      <path d="M 18.72 5.28 Q 13.90 11.21 21.50 12.00" />
      {children}
    </svg>
  );
});

export default SkopoFloor;
