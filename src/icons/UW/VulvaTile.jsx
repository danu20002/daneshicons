import React from 'react';

export const iconData = {
  "id": "VulvaTile",
  "name": "VulvaTile",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 6.14 L 20.87 6.14 L 20.87 17.86 L 3.13 17.86 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 6.14 L 7.95 1.32 L 25.68 1.32 L 20.87 6.14"
      }
    ],
    [
      "path",
      {
        "d": "M 20.87 6.14 L 25.68 1.32 L 25.68 13.05 L 20.87 17.86"
      }
    ]
  ]
};

export const VulvaTile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 6.14 L 20.87 6.14 L 20.87 17.86 L 3.13 17.86 Z" />
      <path d="M 3.13 6.14 L 7.95 1.32 L 25.68 1.32 L 20.87 6.14" />
      <path d="M 20.87 6.14 L 25.68 1.32 L 25.68 13.05 L 20.87 17.86" />
      {children}
    </svg>
  );
});

export default VulvaTile;
