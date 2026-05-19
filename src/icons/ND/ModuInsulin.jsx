import React from 'react';

export const iconData = {
  "id": "ModuInsulin",
  "name": "ModuInsulin",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.81 0 a 2.40 2.40 0 1 0 -4.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 12.00 a 6.01 6.01 0 1 0 12.03 0 a 6.01 6.01 0 1 0 -12.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0"
      }
    ]
  ]
};

export const ModuInsulin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.81 0 a 2.40 2.40 0 1 0 -4.81 0" />
      <path d="M 7.59 12.00 a 4.41 4.41 0 1 0 8.82 0 a 4.41 4.41 0 1 0 -8.82 0" />
      <path d="M 5.99 12.00 a 6.01 6.01 0 1 0 12.03 0 a 6.01 6.01 0 1 0 -12.03 0" />
      <path d="M 3.60 12.00 a 8.40 8.40 0 1 0 16.80 0 a 8.40 8.40 0 1 0 -16.80 0" />
      {children}
    </svg>
  );
});

export default ModuInsulin;
