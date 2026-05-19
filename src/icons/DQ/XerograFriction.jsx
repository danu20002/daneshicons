import React from 'react';

export const iconData = {
  "id": "XerograFriction",
  "name": "XerograFriction",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.78 12.00 a 2.22 2.22 0 1 0 4.43 0 a 2.22 2.22 0 1 0 -4.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 12.00 a 4.92 4.92 0 1 0 9.84 0 a 4.92 4.92 0 1 0 -9.84 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 12.00 a 7.45 7.45 0 1 0 14.89 0 a 7.45 7.45 0 1 0 -14.89 0",
        "stroke-dasharray": "4 3"
      }
    ]
  ]
};

export const XerograFriction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.78 12.00 a 2.22 2.22 0 1 0 4.43 0 a 2.22 2.22 0 1 0 -4.43 0" />
      <path d="M 7.08 12.00 a 4.92 4.92 0 1 0 9.84 0 a 4.92 4.92 0 1 0 -9.84 0" stroke-dasharray="2 3" />
      <path d="M 4.55 12.00 a 7.45 7.45 0 1 0 14.89 0 a 7.45 7.45 0 1 0 -14.89 0" stroke-dasharray="4 3" />
      {children}
    </svg>
  );
});

export default XerograFriction;
