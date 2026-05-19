import React from 'react';

export const iconData = {
  "id": "UrticeGreat",
  "name": "UrticeGreat",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 0 12.65 0 a 6.32 6.32 0 1 0 -12.65 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 12.00 a 8.00 8.00 0 1 0 16.01 0 a 8.00 8.00 0 1 0 -16.01 0"
      }
    ]
  ]
};

export const UrticeGreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.93 12.00 a 2.07 2.07 0 1 0 4.14 0 a 2.07 2.07 0 1 0 -4.14 0" />
      <path d="M 7.95 12.00 a 4.05 4.05 0 1 0 8.10 0 a 4.05 4.05 0 1 0 -8.10 0" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 0 12.65 0 a 6.32 6.32 0 1 0 -12.65 0" stroke-dasharray="5 2" />
      <path d="M 4.00 12.00 a 8.00 8.00 0 1 0 16.01 0 a 8.00 8.00 0 1 0 -16.01 0" />
      {children}
    </svg>
  );
});

export default UrticeGreat;
