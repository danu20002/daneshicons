import React from 'react';

export const iconData = {
  "id": "ZanzaraBand",
  "name": "ZanzaraBand",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.05 0 a 2.02 2.02 0 1 0 -4.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.97 0 a 4.48 4.48 0 1 0 -8.97 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 12.00 a 6.12 6.12 0 1 0 12.25 0 a 6.12 6.12 0 1 0 -12.25 0",
        "stroke-dasharray": "6 1"
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

export const ZanzaraBand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.05 0 a 2.02 2.02 0 1 0 -4.05 0" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.97 0 a 4.48 4.48 0 1 0 -8.97 0" stroke-dasharray="3 3" />
      <path d="M 5.88 12.00 a 6.12 6.12 0 1 0 12.25 0 a 6.12 6.12 0 1 0 -12.25 0" stroke-dasharray="6 1" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0" />
      {children}
    </svg>
  );
});

export default ZanzaraBand;
