import React from 'react';

export const iconData = {
  "id": "ValchiriaStranger",
  "name": "ValchiriaStranger",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 6.64 L 20.81 6.64 L 20.81 17.36 L 3.19 17.36 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.19 6.64 L 6.57 3.27 L 24.18 3.27 L 20.81 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 20.81 6.64 L 24.18 3.27 L 24.18 13.98 L 20.81 17.36"
      }
    ]
  ]
};

export const ValchiriaStranger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 6.64 L 20.81 6.64 L 20.81 17.36 L 3.19 17.36 Z" />
      <path d="M 3.19 6.64 L 6.57 3.27 L 24.18 3.27 L 20.81 6.64" />
      <path d="M 20.81 6.64 L 24.18 3.27 L 24.18 13.98 L 20.81 17.36" />
      {children}
    </svg>
  );
});

export default ValchiriaStranger;
