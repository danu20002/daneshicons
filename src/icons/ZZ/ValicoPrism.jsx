import React from 'react';

export const iconData = {
  "id": "ValicoPrism",
  "name": "ValicoPrism",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 5.64 L 20.35 5.64 L 20.35 18.36 L 3.65 18.36 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 5.64 L 7.89 1.41 L 24.58 1.41 L 20.35 5.64"
      }
    ],
    [
      "path",
      {
        "d": "M 20.35 5.64 L 24.58 1.41 L 24.58 14.12 L 20.35 18.36"
      }
    ]
  ]
};

export const ValicoPrism = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 5.64 L 20.35 5.64 L 20.35 18.36 L 3.65 18.36 Z" />
      <path d="M 3.65 5.64 L 7.89 1.41 L 24.58 1.41 L 20.35 5.64" />
      <path d="M 20.35 5.64 L 24.58 1.41 L 24.58 14.12 L 20.35 18.36" />
      {children}
    </svg>
  );
});

export default ValicoPrism;
