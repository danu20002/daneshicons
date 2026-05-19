import React from 'react';

export const iconData = {
  "id": "TaloUpdate",
  "name": "TaloUpdate",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.55 0 a 8.77 8.77 0 1 0 -17.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 12.00 a 6.51 6.51 0 1 1 13.03 0 a 6.51 6.51 0 1 1 -13.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.27 12.00 L 22.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.34 17.32 L 19.87 18.60"
      }
    ],
    [
      "path",
      {
        "d": "M 13.44 20.15 L 13.78 22.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.86 19.17 L 6.86 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 14.83 L 2.34 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 9.17 L 2.34 8.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.86 4.83 L 6.86 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 13.44 3.85 L 13.78 1.88"
      }
    ],
    [
      "path",
      {
        "d": "M 18.34 6.68 L 19.87 5.40"
      }
    ]
  ]
};

export const TaloUpdate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.55 0 a 8.77 8.77 0 1 0 -17.55 0" />
      <path d="M 5.49 12.00 a 6.51 6.51 0 1 1 13.03 0 a 6.51 6.51 0 1 1 -13.03 0" />
      <path d="M 20.27 12.00 L 22.27 12.00" />
      <path d="M 18.34 17.32 L 19.87 18.60" />
      <path d="M 13.44 20.15 L 13.78 22.12" />
      <path d="M 7.86 19.17 L 6.86 20.90" />
      <path d="M 4.22 14.83 L 2.34 15.51" />
      <path d="M 4.22 9.17 L 2.34 8.49" />
      <path d="M 7.86 4.83 L 6.86 3.10" />
      <path d="M 13.44 3.85 L 13.78 1.88" />
      <path d="M 18.34 6.68 L 19.87 5.40" />
      {children}
    </svg>
  );
});

export default TaloUpdate;
