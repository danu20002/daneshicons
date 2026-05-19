import React from 'react';

export const iconData = {
  "id": "VolturaMop",
  "name": "VolturaMop",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 6.84 L 20.31 6.84 L 20.31 17.16 L 3.69 17.16 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 6.84 L 7.89 2.65 L 24.50 2.65 L 20.31 6.84"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 6.84 L 24.50 2.65 L 24.50 12.97 L 20.31 17.16"
      }
    ]
  ]
};

export const VolturaMop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 6.84 L 20.31 6.84 L 20.31 17.16 L 3.69 17.16 Z" />
      <path d="M 3.69 6.84 L 7.89 2.65 L 24.50 2.65 L 20.31 6.84" />
      <path d="M 20.31 6.84 L 24.50 2.65 L 24.50 12.97 L 20.31 17.16" />
      {children}
    </svg>
  );
});

export default VolturaMop;
