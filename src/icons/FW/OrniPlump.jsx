import React from 'react';

export const iconData = {
  "id": "OrniPlump",
  "name": "OrniPlump",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.18 9.61 C 12.52 6.46, 13.05 9.59, 21.22 16.36"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 8.20 C 7.72 4.22, 11.88 13.01, 20.89 15.20"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 3.88 C 12.45 10.36, 13.08 10.73, 21.64 14.41"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 8.04 C 11.95 14.08, 7.65 7.05, 14.77 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 3.18 C 4.02 17.46, 4.78 16.84, 18.74 19.72"
      }
    ]
  ]
};

export const OrniPlump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.18 9.61 C 12.52 6.46, 13.05 9.59, 21.22 16.36" />
      <path d="M 4.06 8.20 C 7.72 4.22, 11.88 13.01, 20.89 15.20" />
      <path d="M 8.97 3.88 C 12.45 10.36, 13.08 10.73, 21.64 14.41" />
      <path d="M 8.05 8.04 C 11.95 14.08, 7.65 7.05, 14.77 18.61" />
      <path d="M 4.49 3.18 C 4.02 17.46, 4.78 16.84, 18.74 19.72" />
      {children}
    </svg>
  );
});

export default OrniPlump;
