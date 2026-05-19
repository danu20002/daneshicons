import React from 'react';

export const iconData = {
  "id": "XerofiloCircuit",
  "name": "XerofiloCircuit",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 6.52 L 20.87 6.52 L 20.87 17.48 L 3.13 17.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 6.52 L 7.47 2.18 L 25.21 2.18 L 20.87 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.87 6.52 L 25.21 2.18 L 25.21 13.14 L 20.87 17.48"
      }
    ]
  ]
};

export const XerofiloCircuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 6.52 L 20.87 6.52 L 20.87 17.48 L 3.13 17.48 Z" />
      <path d="M 3.13 6.52 L 7.47 2.18 L 25.21 2.18 L 20.87 6.52" />
      <path d="M 20.87 6.52 L 25.21 2.18 L 25.21 13.14 L 20.87 17.48" />
      {children}
    </svg>
  );
});

export default XerofiloCircuit;
