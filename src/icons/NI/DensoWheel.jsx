import React from 'react';

export const iconData = {
  "id": "DensoWheel",
  "name": "DensoWheel",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 12.00 Q 15.81 14.20 16.12 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 19.13 Q 12.00 16.40 7.88 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 19.13 Q 8.19 14.20 3.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 12.00 Q 8.19 9.80 7.88 4.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 Q 12.00 7.60 16.12 4.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 Q 15.81 9.80 20.24 12.00"
      }
    ]
  ]
};

export const DensoWheel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 12.00 Q 15.81 14.20 16.12 19.13" />
      <path d="M 16.12 19.13 Q 12.00 16.40 7.88 19.13" />
      <path d="M 7.88 19.13 Q 8.19 14.20 3.76 12.00" />
      <path d="M 3.76 12.00 Q 8.19 9.80 7.88 4.87" />
      <path d="M 7.88 4.87 Q 12.00 7.60 16.12 4.87" />
      <path d="M 16.12 4.87 Q 15.81 9.80 20.24 12.00" />
      {children}
    </svg>
  );
});

export default DensoWheel;
