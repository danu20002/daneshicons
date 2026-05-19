import React from 'react';

export const iconData = {
  "id": "YogurtLathe",
  "name": "YogurtLathe",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 12.00 a 4.27 4.27 0 1 0 8.54 0 a 4.27 4.27 0 1 0 -8.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 12.00 a 6.26 6.26 0 1 0 12.51 0 a 6.26 6.26 0 1 0 -12.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.13 0 a 8.07 8.07 0 1 0 -16.13 0"
      }
    ]
  ]
};

export const YogurtLathe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0" />
      <path d="M 7.73 12.00 a 4.27 4.27 0 1 0 8.54 0 a 4.27 4.27 0 1 0 -8.54 0" />
      <path d="M 5.74 12.00 a 6.26 6.26 0 1 0 12.51 0 a 6.26 6.26 0 1 0 -12.51 0" />
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.13 0 a 8.07 8.07 0 1 0 -16.13 0" />
      {children}
    </svg>
  );
});

export default YogurtLathe;
