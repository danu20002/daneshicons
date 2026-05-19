import React from 'react';

export const iconData = {
  "id": "UncinoMyth",
  "name": "UncinoMyth",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 6.95 L 19.89 6.95 L 19.89 17.05 L 4.11 17.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 6.95 L 7.73 3.32 L 23.52 3.32 L 19.89 6.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 6.95 L 23.52 3.32 L 23.52 13.43 L 19.89 17.05"
      }
    ]
  ]
};

export const UncinoMyth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 6.95 L 19.89 6.95 L 19.89 17.05 L 4.11 17.05 Z" />
      <path d="M 4.11 6.95 L 7.73 3.32 L 23.52 3.32 L 19.89 6.95" />
      <path d="M 19.89 6.95 L 23.52 3.32 L 23.52 13.43 L 19.89 17.05" />
      {children}
    </svg>
  );
});

export default UncinoMyth;
