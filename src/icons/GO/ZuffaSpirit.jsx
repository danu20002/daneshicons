import React from 'react';

export const iconData = {
  "id": "ZuffaSpirit",
  "name": "ZuffaSpirit",
  "category": "GO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 12.00 a 4.99 4.99 0 1 0 9.97 0 a 4.99 4.99 0 1 0 -9.97 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const ZuffaSpirit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.69 0 a 2.34 2.34 0 1 0 -4.69 0" />
      <path d="M 7.01 12.00 a 4.99 4.99 0 1 0 9.97 0 a 4.99 4.99 0 1 0 -9.97 0" stroke-dasharray="5 1" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.66 0 a 7.83 7.83 0 1 0 -15.66 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default ZuffaSpirit;
