import React from 'react';

export const iconData = {
  "id": "PelvoLegal",
  "name": "PelvoLegal",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 6.68 L 20.50 6.68 L 20.50 17.32 L 3.50 17.32 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 6.68 L 7.53 2.64 L 24.53 2.64 L 20.50 6.68"
      }
    ],
    [
      "path",
      {
        "d": "M 20.50 6.68 L 24.53 2.64 L 24.53 13.29 L 20.50 17.32"
      }
    ]
  ]
};

export const PelvoLegal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 6.68 L 20.50 6.68 L 20.50 17.32 L 3.50 17.32 Z" />
      <path d="M 3.50 6.68 L 7.53 2.64 L 24.53 2.64 L 20.50 6.68" />
      <path d="M 20.50 6.68 L 24.53 2.64 L 24.53 13.29 L 20.50 17.32" />
      {children}
    </svg>
  );
});

export default PelvoLegal;
