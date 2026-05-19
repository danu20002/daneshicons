import React from 'react';

export const iconData = {
  "id": "UngeLiquid",
  "name": "UngeLiquid",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 12.00 a 2.08 2.08 0 1 0 4.17 0 a 2.08 2.08 0 1 0 -4.17 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 12.00 a 4.03 4.03 0 1 0 8.07 0 a 4.03 4.03 0 1 0 -8.07 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 12.00 a 6.06 6.06 0 1 0 12.13 0 a 6.06 6.06 0 1 0 -12.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 12.00 a 8.20 8.20 0 1 0 16.41 0 a 8.20 8.20 0 1 0 -16.41 0"
      }
    ]
  ]
};

export const UngeLiquid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 12.00 a 2.08 2.08 0 1 0 4.17 0 a 2.08 2.08 0 1 0 -4.17 0" stroke-dasharray="3 2" />
      <path d="M 7.97 12.00 a 4.03 4.03 0 1 0 8.07 0 a 4.03 4.03 0 1 0 -8.07 0" stroke-dasharray="2 3" />
      <path d="M 5.94 12.00 a 6.06 6.06 0 1 0 12.13 0 a 6.06 6.06 0 1 0 -12.13 0" />
      <path d="M 3.80 12.00 a 8.20 8.20 0 1 0 16.41 0 a 8.20 8.20 0 1 0 -16.41 0" />
      {children}
    </svg>
  );
});

export default UngeLiquid;
