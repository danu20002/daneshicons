import React from 'react';

export const iconData = {
  "id": "VaranoVary",
  "name": "VaranoVary",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.70 12.00 Q 14.08 12.68 19.04 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 17.11 Q 13.28 13.77 14.69 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 20.28 Q 12.00 14.19 9.31 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 20.28 Q 10.72 13.77 4.96 17.11"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 17.11 Q 9.92 12.68 3.30 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 12.00 Q 9.92 11.32 4.96 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 6.89 Q 10.72 10.23 9.31 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 3.72 Q 12.00 9.81 14.69 3.72"
      }
    ],
    [
      "path",
      {
        "d": "M 14.69 3.72 Q 13.28 10.23 19.04 6.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 6.89 Q 14.08 11.32 20.70 12.00"
      }
    ]
  ]
};

export const VaranoVary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.70 12.00 Q 14.08 12.68 19.04 17.11" />
      <path d="M 19.04 17.11 Q 13.28 13.77 14.69 20.28" />
      <path d="M 14.69 20.28 Q 12.00 14.19 9.31 20.28" />
      <path d="M 9.31 20.28 Q 10.72 13.77 4.96 17.11" />
      <path d="M 4.96 17.11 Q 9.92 12.68 3.30 12.00" />
      <path d="M 3.30 12.00 Q 9.92 11.32 4.96 6.89" />
      <path d="M 4.96 6.89 Q 10.72 10.23 9.31 3.72" />
      <path d="M 9.31 3.72 Q 12.00 9.81 14.69 3.72" />
      <path d="M 14.69 3.72 Q 13.28 10.23 19.04 6.89" />
      <path d="M 19.04 6.89 Q 14.08 11.32 20.70 12.00" />
      {children}
    </svg>
  );
});

export default VaranoVary;
