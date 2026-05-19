import React from 'react';

export const iconData = {
  "id": "DynamoDust",
  "name": "DynamoDust",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 6.91 C 17.09 17.73, 15.73 16.39, 14.12 14.56"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 2.02 C 15.88 12.12, 5.31 18.05, 18.97 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 3.70 C 17.36 4.95, 18.98 18.83, 20.86 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 2.25 C 9.56 8.31, 9.18 14.51, 17.59 17.55"
      }
    ]
  ]
};

export const DynamoDust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 6.91 C 17.09 17.73, 15.73 16.39, 14.12 14.56" />
      <path d="M 6.31 2.02 C 15.88 12.12, 5.31 18.05, 18.97 15.22" />
      <path d="M 3.03 3.70 C 17.36 4.95, 18.98 18.83, 20.86 14.45" />
      <path d="M 4.81 2.25 C 9.56 8.31, 9.18 14.51, 17.59 17.55" />
      {children}
    </svg>
  );
});

export default DynamoDust;
