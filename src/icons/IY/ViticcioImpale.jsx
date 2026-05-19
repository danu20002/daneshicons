import React from 'react';

export const iconData = {
  "id": "ViticcioImpale",
  "name": "ViticcioImpale",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.88 12.00 Q 13.96 12.81 18.28 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 18.28 Q 12.81 13.96 12.00 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.88 Q 11.19 13.96 5.72 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 18.28 Q 10.04 12.81 3.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.12 12.00 Q 10.04 11.19 5.72 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 5.72 Q 11.19 10.04 12.00 3.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.12 Q 12.81 10.04 18.28 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 5.72 Q 13.96 11.19 20.88 12.00"
      }
    ]
  ]
};

export const ViticcioImpale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.88 12.00 Q 13.96 12.81 18.28 18.28" />
      <path d="M 18.28 18.28 Q 12.81 13.96 12.00 20.88" />
      <path d="M 12.00 20.88 Q 11.19 13.96 5.72 18.28" />
      <path d="M 5.72 18.28 Q 10.04 12.81 3.12 12.00" />
      <path d="M 3.12 12.00 Q 10.04 11.19 5.72 5.72" />
      <path d="M 5.72 5.72 Q 11.19 10.04 12.00 3.12" />
      <path d="M 12.00 3.12 Q 12.81 10.04 18.28 5.72" />
      <path d="M 18.28 5.72 Q 13.96 11.19 20.88 12.00" />
      {children}
    </svg>
  );
});

export default ViticcioImpale;
