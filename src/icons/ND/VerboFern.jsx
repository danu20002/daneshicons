import React from 'react';

export const iconData = {
  "id": "VerboFern",
  "name": "VerboFern",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 0 12.63 0 a 6.32 6.32 0 1 0 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.35 0 a 8.17 8.17 0 1 0 -16.35 0"
      }
    ]
  ]
};

export const VerboFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0" stroke-dasharray="2 3" />
      <path d="M 7.66 12.00 a 4.34 4.34 0 1 0 8.69 0 a 4.34 4.34 0 1 0 -8.69 0" stroke-dasharray="4 3" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 0 12.63 0 a 6.32 6.32 0 1 0 -12.63 0" />
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.35 0 a 8.17 8.17 0 1 0 -16.35 0" />
      {children}
    </svg>
  );
});

export default VerboFern;
