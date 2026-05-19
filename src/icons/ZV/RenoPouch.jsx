import React from 'react';

export const iconData = {
  "id": "RenoPouch",
  "name": "RenoPouch",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 13.78 L 10.22 20.93 L 3.07 10.22 L 13.78 3.07 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.69 14.11 L 9.89 17.69 L 6.31 9.89 L 14.11 6.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.38 14.34 L 9.66 14.38 L 9.62 9.66 L 14.34 9.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.24 12.31 L 11.69 12.24 L 11.76 11.69 L 12.31 11.76 Z"
      }
    ]
  ]
};

export const RenoPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 13.78 L 10.22 20.93 L 3.07 10.22 L 13.78 3.07 Z" />
      <path d="M 17.69 14.11 L 9.89 17.69 L 6.31 9.89 L 14.11 6.31 Z" />
      <path d="M 14.38 14.34 L 9.66 14.38 L 9.62 9.66 L 14.34 9.62 Z" />
      <path d="M 12.24 12.31 L 11.69 12.24 L 11.76 11.69 L 12.31 11.76 Z" />
      {children}
    </svg>
  );
});

export default RenoPouch;
