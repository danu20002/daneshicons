import React from 'react';

export const iconData = {
  "id": "SyntoGirder",
  "name": "SyntoGirder",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 12.00 a 4.29 4.29 0 1 0 8.57 0 a 4.29 4.29 0 1 0 -8.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 12.00 a 6.25 6.25 0 1 0 12.50 0 a 6.25 6.25 0 1 0 -12.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0"
      }
    ]
  ]
};

export const SyntoGirder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.85 0 a 2.43 2.43 0 1 0 -4.85 0" />
      <path d="M 7.71 12.00 a 4.29 4.29 0 1 0 8.57 0 a 4.29 4.29 0 1 0 -8.57 0" />
      <path d="M 5.75 12.00 a 6.25 6.25 0 1 0 12.50 0 a 6.25 6.25 0 1 0 -12.50 0" />
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0" />
      {children}
    </svg>
  );
});

export default SyntoGirder;
