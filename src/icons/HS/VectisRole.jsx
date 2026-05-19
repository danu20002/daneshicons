import React from 'react';

export const iconData = {
  "id": "VectisRole",
  "name": "VectisRole",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 5.60 L 20.36 5.60 L 20.36 18.40 L 3.64 18.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 5.60 L 8.03 1.22 L 24.75 1.22 L 20.36 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 5.60 L 24.75 1.22 L 24.75 14.01 L 20.36 18.40"
      }
    ]
  ]
};

export const VectisRole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 5.60 L 20.36 5.60 L 20.36 18.40 L 3.64 18.40 Z" />
      <path d="M 3.64 5.60 L 8.03 1.22 L 24.75 1.22 L 20.36 5.60" />
      <path d="M 20.36 5.60 L 24.75 1.22 L 24.75 14.01 L 20.36 18.40" />
      {children}
    </svg>
  );
});

export default VectisRole;
