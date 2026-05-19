import React from 'react';

export const iconData = {
  "id": "SaphoProtect",
  "name": "SaphoProtect",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 5.69 L 20.36 5.69 L 20.36 18.31 L 3.64 18.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 5.69 L 8.13 1.20 L 24.85 1.20 L 20.36 5.69"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 5.69 L 24.85 1.20 L 24.85 13.83 L 20.36 18.31"
      }
    ]
  ]
};

export const SaphoProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 5.69 L 20.36 5.69 L 20.36 18.31 L 3.64 18.31 Z" />
      <path d="M 3.64 5.69 L 8.13 1.20 L 24.85 1.20 L 20.36 5.69" />
      <path d="M 20.36 5.69 L 24.85 1.20 L 24.85 13.83 L 20.36 18.31" />
      {children}
    </svg>
  );
});

export default SaphoProtect;
