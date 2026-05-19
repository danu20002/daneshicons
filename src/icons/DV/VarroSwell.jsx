import React from 'react';

export const iconData = {
  "id": "VarroSwell",
  "name": "VarroSwell",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.28 12.00 Q 14.32 13.34 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 20.04 Q 12.00 14.68 7.36 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 20.04 Q 9.68 13.34 2.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 12.00 Q 9.68 10.66 7.36 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.96 Q 12.00 9.32 16.64 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.96 Q 14.32 10.66 21.28 12.00"
      }
    ]
  ]
};

export const VarroSwell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.28 12.00 Q 14.32 13.34 16.64 20.04" />
      <path d="M 16.64 20.04 Q 12.00 14.68 7.36 20.04" />
      <path d="M 7.36 20.04 Q 9.68 13.34 2.72 12.00" />
      <path d="M 2.72 12.00 Q 9.68 10.66 7.36 3.96" />
      <path d="M 7.36 3.96 Q 12.00 9.32 16.64 3.96" />
      <path d="M 16.64 3.96 Q 14.32 10.66 21.28 12.00" />
      {children}
    </svg>
  );
});

export default VarroSwell;
