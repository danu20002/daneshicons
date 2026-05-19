import React from 'react';

export const iconData = {
  "id": "UlivoHem",
  "name": "UlivoHem",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 12.00 L 19.80 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.20 L 12.00 19.80"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 6.54 L 17.46 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 17.46 L 17.46 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 1.92 12.00 a 10.08 10.08 0 1 0 20.15 0 a 10.08 10.08 0 1 0 -20.15 0"
      }
    ]
  ]
};

export const UlivoHem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 12.00 L 19.80 12.00" />
      <path d="M 12.00 4.20 L 12.00 19.80" />
      <path d="M 6.54 6.54 L 17.46 17.46" />
      <path d="M 6.54 17.46 L 17.46 6.54" />
      <path d="M 1.92 12.00 a 10.08 10.08 0 1 0 20.15 0 a 10.08 10.08 0 1 0 -20.15 0" />
      {children}
    </svg>
  );
});

export default UlivoHem;
