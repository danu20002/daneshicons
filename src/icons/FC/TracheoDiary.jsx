import React from 'react';

export const iconData = {
  "id": "TracheoDiary",
  "name": "TracheoDiary",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.01 0 a 2.01 2.01 0 1 0 -4.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 12.00 a 4.87 4.87 0 1 0 9.73 0 a 4.87 4.87 0 1 0 -9.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 12.00 a 7.61 7.61 0 1 0 15.22 0 a 7.61 7.61 0 1 0 -15.22 0"
      }
    ]
  ]
};

export const TracheoDiary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.01 0 a 2.01 2.01 0 1 0 -4.01 0" />
      <path d="M 7.13 12.00 a 4.87 4.87 0 1 0 9.73 0 a 4.87 4.87 0 1 0 -9.73 0" />
      <path d="M 4.39 12.00 a 7.61 7.61 0 1 0 15.22 0 a 7.61 7.61 0 1 0 -15.22 0" />
      {children}
    </svg>
  );
});

export default TracheoDiary;
