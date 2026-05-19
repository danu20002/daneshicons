import React from 'react';

export const iconData = {
  "id": "RedoxQuanta",
  "name": "RedoxQuanta",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 5.58 L 20.21 5.58 L 20.21 18.42 L 3.79 18.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 5.58 L 8.39 0.98 L 24.81 0.98 L 20.21 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 5.58 L 24.81 0.98 L 24.81 13.82 L 20.21 18.42"
      }
    ]
  ]
};

export const RedoxQuanta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 5.58 L 20.21 5.58 L 20.21 18.42 L 3.79 18.42 Z" />
      <path d="M 3.79 5.58 L 8.39 0.98 L 24.81 0.98 L 20.21 5.58" />
      <path d="M 20.21 5.58 L 24.81 0.98 L 24.81 13.82 L 20.21 18.42" />
      {children}
    </svg>
  );
});

export default RedoxQuanta;
