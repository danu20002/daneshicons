import React from 'react';

export const iconData = {
  "id": "FrigoDot",
  "name": "FrigoDot",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 6.60 L 20.65 6.60 L 20.65 17.40 L 3.35 17.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 6.60 L 6.81 3.14 L 24.12 3.14 L 20.65 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.65 6.60 L 24.12 3.14 L 24.12 13.94 L 20.65 17.40"
      }
    ]
  ]
};

export const FrigoDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 6.60 L 20.65 6.60 L 20.65 17.40 L 3.35 17.40 Z" />
      <path d="M 3.35 6.60 L 6.81 3.14 L 24.12 3.14 L 20.65 6.60" />
      <path d="M 20.65 6.60 L 24.12 3.14 L 24.12 13.94 L 20.65 17.40" />
      {children}
    </svg>
  );
});

export default FrigoDot;
