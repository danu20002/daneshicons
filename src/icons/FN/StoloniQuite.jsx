import React from 'react';

export const iconData = {
  "id": "StoloniQuite",
  "name": "StoloniQuite",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.50 6.59 L 19.50 6.59 L 19.50 17.41 L 4.50 17.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 6.59 L 9.32 1.76 L 24.32 1.76 L 19.50 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 19.50 6.59 L 24.32 1.76 L 24.32 12.59 L 19.50 17.41"
      }
    ]
  ]
};

export const StoloniQuite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.50 6.59 L 19.50 6.59 L 19.50 17.41 L 4.50 17.41 Z" />
      <path d="M 4.50 6.59 L 9.32 1.76 L 24.32 1.76 L 19.50 6.59" />
      <path d="M 19.50 6.59 L 24.32 1.76 L 24.32 12.59 L 19.50 17.41" />
      {children}
    </svg>
  );
});

export default StoloniQuite;
