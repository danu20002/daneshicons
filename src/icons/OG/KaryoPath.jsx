import React from 'react';

export const iconData = {
  "id": "KaryoPath",
  "name": "KaryoPath",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 12.00 a 8.94 8.94 0 1 0 17.88 0 a 8.94 8.94 0 1 0 -17.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 9.02 a 8.43 2.5279318103703123 0 1 0 16.85 0 a 8.43 2.5279318103703123 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 14.98 a 8.43 2.5279318103703123 0 1 0 16.85 0 a 8.43 2.5279318103703123 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.06 A 2 2 0 0 0 12.00 20.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.06 A 2 2 0 0 1 12.00 20.94"
      }
    ]
  ]
};

export const KaryoPath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 12.00 a 8.94 8.94 0 1 0 17.88 0 a 8.94 8.94 0 1 0 -17.88 0" />
      <path d="M 3.57 9.02 a 8.43 2.5279318103703123 0 1 0 16.85 0 a 8.43 2.5279318103703123 0 1 0 -16.85 0" />
      <path d="M 3.57 14.98 a 8.43 2.5279318103703123 0 1 0 16.85 0 a 8.43 2.5279318103703123 0 1 0 -16.85 0" />
      <path d="M 12.00 3.06 A 2 2 0 0 0 12.00 20.94" />
      <path d="M 12.00 3.06 A 2 2 0 0 1 12.00 20.94" />
      {children}
    </svg>
  );
});

export default KaryoPath;
