import React from 'react';

export const iconData = {
  "id": "RedoxScene",
  "name": "RedoxScene",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 7.00 L 19.78 7.00 L 19.78 17.00 L 4.22 17.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 7.00 L 8.30 2.92 L 23.86 2.92 L 19.78 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 7.00 L 23.86 2.92 L 23.86 12.92 L 19.78 17.00"
      }
    ]
  ]
};

export const RedoxScene = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 7.00 L 19.78 7.00 L 19.78 17.00 L 4.22 17.00 Z" />
      <path d="M 4.22 7.00 L 8.30 2.92 L 23.86 2.92 L 19.78 7.00" />
      <path d="M 19.78 7.00 L 23.86 2.92 L 23.86 12.92 L 19.78 17.00" />
      {children}
    </svg>
  );
});

export default RedoxScene;
