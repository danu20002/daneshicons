import React from 'react';

export const iconData = {
  "id": "VacuoDecode",
  "name": "VacuoDecode",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.08 6.36 L 20.92 6.36 L 20.92 17.64 L 3.08 17.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 6.36 L 7.94 1.49 L 25.79 1.49 L 20.92 6.36"
      }
    ],
    [
      "path",
      {
        "d": "M 20.92 6.36 L 25.79 1.49 L 25.79 12.77 L 20.92 17.64"
      }
    ]
  ]
};

export const VacuoDecode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.08 6.36 L 20.92 6.36 L 20.92 17.64 L 3.08 17.64 Z" />
      <path d="M 3.08 6.36 L 7.94 1.49 L 25.79 1.49 L 20.92 6.36" />
      <path d="M 20.92 6.36 L 25.79 1.49 L 25.79 12.77 L 20.92 17.64" />
      {children}
    </svg>
  );
});

export default VacuoDecode;
