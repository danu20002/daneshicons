import React from 'react';

export const iconData = {
  "id": "VentoCold",
  "name": "VentoCold",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 12.00 a 4.45 4.45 0 1 0 8.90 0 a 4.45 4.45 0 1 0 -8.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0"
      }
    ]
  ]
};

export const VentoCold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0" stroke-dasharray="3 2" />
      <path d="M 7.55 12.00 a 4.45 4.45 0 1 0 8.90 0 a 4.45 4.45 0 1 0 -8.90 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 0 12.36 0 a 6.18 6.18 0 1 0 -12.36 0" stroke-dasharray="5 1" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0" />
      {children}
    </svg>
  );
});

export default VentoCold;
