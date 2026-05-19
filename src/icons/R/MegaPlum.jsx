import React from 'react';

export const iconData = {
  "id": "MegaPlum",
  "name": "MegaPlum",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.15 5.84 L 20.85 5.84 L 20.85 18.16 L 3.15 18.16 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 5.84 L 7.20 1.79 L 24.90 1.79 L 20.85 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 20.85 5.84 L 24.90 1.79 L 24.90 14.11 L 20.85 18.16"
      }
    ]
  ]
};

export const MegaPlum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.15 5.84 L 20.85 5.84 L 20.85 18.16 L 3.15 18.16 Z" />
      <path d="M 3.15 5.84 L 7.20 1.79 L 24.90 1.79 L 20.85 5.84" />
      <path d="M 20.85 5.84 L 24.90 1.79 L 24.90 14.11 L 20.85 18.16" />
      {children}
    </svg>
  );
});

export default MegaPlum;
