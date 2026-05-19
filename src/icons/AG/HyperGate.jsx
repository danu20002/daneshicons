import React from 'react';

export const iconData = {
  "id": "HyperGate",
  "name": "HyperGate",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 12.38 L 11.62 21.03 L 2.97 11.62 L 12.38 2.97 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 13.95 L 10.05 17.71 L 6.29 10.05 L 13.95 6.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.50 14.24 L 9.76 14.50 L 9.50 9.76 L 14.24 9.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 12.19 L 11.81 12.11 L 11.89 11.81 L 12.19 11.89 Z"
      }
    ]
  ]
};

export const HyperGate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 12.38 L 11.62 21.03 L 2.97 11.62 L 12.38 2.97 Z" />
      <path d="M 17.71 13.95 L 10.05 17.71 L 6.29 10.05 L 13.95 6.29 Z" />
      <path d="M 14.50 14.24 L 9.76 14.50 L 9.50 9.76 L 14.24 9.50 Z" />
      <path d="M 12.11 12.19 L 11.81 12.11 L 11.89 11.81 L 12.19 11.89 Z" />
      {children}
    </svg>
  );
});

export default HyperGate;
