import React from 'react';

export const iconData = {
  "id": "VescicaPeril",
  "name": "VescicaPeril",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 2.5205260578542945 0 1 0 16.80 0 a 8.40 2.5205260578542945 0 1 0 -16.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 4.72 A 2 2 0 0 0 16.20 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 4.72 A 2 2 0 0 1 16.20 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.72 A 2 2 0 0 0 7.80 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.72 A 2 2 0 0 1 7.80 19.28"
      }
    ]
  ]
};

export const VescicaPeril = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0" />
      <path d="M 3.60 12.00 a 8.40 2.5205260578542945 0 1 0 16.80 0 a 8.40 2.5205260578542945 0 1 0 -16.80 0" />
      <path d="M 16.20 4.72 A 2 2 0 0 0 16.20 19.28" />
      <path d="M 16.20 4.72 A 2 2 0 0 1 16.20 19.28" />
      <path d="M 7.80 4.72 A 2 2 0 0 0 7.80 19.28" />
      <path d="M 7.80 4.72 A 2 2 0 0 1 7.80 19.28" />
      {children}
    </svg>
  );
});

export default VescicaPeril;
