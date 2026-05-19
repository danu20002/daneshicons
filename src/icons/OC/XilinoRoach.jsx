import React from 'react';

export const iconData = {
  "id": "XilinoRoach",
  "name": "XilinoRoach",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.27 8.79 L 8.88 3.79 L 15.12 4.44 L 8.98 18.90 L 16.25 9.50 L 4.03 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.76 10.14 Q 9.76 21.84 8.21 16.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.19 13.57 A 6.87 2.30 119 0 1 14.39 15.31"
      }
    ]
  ]
};

export const XilinoRoach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.27 8.79 L 8.88 3.79 L 15.12 4.44 L 8.98 18.90 L 16.25 9.50 L 4.03 18.87" />
      <path d="M 6.76 10.14 Q 9.76 21.84 8.21 16.52" />
      <path d="M 14.19 13.57 A 6.87 2.30 119 0 1 14.39 15.31" />
      {children}
    </svg>
  );
});

export default XilinoRoach;
