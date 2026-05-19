import React from 'react';

export const iconData = {
  "id": "SonoDirt",
  "name": "SonoDirt",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.11 0 a 2.06 2.06 0 1 0 -4.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 12.00 a 4.19 4.19 0 1 0 8.38 0 a 4.19 4.19 0 1 0 -8.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 0 12.15 0 a 6.08 6.08 0 1 0 -12.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0"
      }
    ]
  ]
};

export const SonoDirt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.11 0 a 2.06 2.06 0 1 0 -4.11 0" />
      <path d="M 7.81 12.00 a 4.19 4.19 0 1 0 8.38 0 a 4.19 4.19 0 1 0 -8.38 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 0 12.15 0 a 6.08 6.08 0 1 0 -12.15 0" />
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.68 0 a 8.34 8.34 0 1 0 -16.68 0" />
      {children}
    </svg>
  );
});

export default SonoDirt;
