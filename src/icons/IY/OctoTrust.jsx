import React from 'react';

export const iconData = {
  "id": "OctoTrust",
  "name": "OctoTrust",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.25 12.00 L 18.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.25 L 12.00 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 7.28 L 16.72 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 16.72 L 16.72 7.28"
      }
    ],
    [
      "path",
      {
        "d": "M 1.40 12.00 a 10.60 10.60 0 1 0 21.21 0 a 10.60 10.60 0 1 0 -21.21 0"
      }
    ]
  ]
};

export const OctoTrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.25 12.00 L 18.75 12.00" />
      <path d="M 12.00 5.25 L 12.00 18.75" />
      <path d="M 7.28 7.28 L 16.72 16.72" />
      <path d="M 7.28 16.72 L 16.72 7.28" />
      <path d="M 1.40 12.00 a 10.60 10.60 0 1 0 21.21 0 a 10.60 10.60 0 1 0 -21.21 0" />
      {children}
    </svg>
  );
});

export default OctoTrust;
