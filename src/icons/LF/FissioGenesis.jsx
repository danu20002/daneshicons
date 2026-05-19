import React from 'react';

export const iconData = {
  "id": "FissioGenesis",
  "name": "FissioGenesis",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 13.76 L 6.02 18.85 L 9.06 3.39 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 14.59 L 6.97 15.54 L 11.45 5.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.33 13.94 L 9.15 13.04 L 12.52 9.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 12.31 12.39 L 11.51 12.07 L 12.18 11.54 Z"
      }
    ]
  ]
};

export const FissioGenesis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 13.76 L 6.02 18.85 L 9.06 3.39 Z" />
      <path d="M 17.59 14.59 L 6.97 15.54 L 11.45 5.87 Z" />
      <path d="M 14.33 13.94 L 9.15 13.04 L 12.52 9.01 Z" />
      <path d="M 12.31 12.39 L 11.51 12.07 L 12.18 11.54 Z" />
      {children}
    </svg>
  );
});

export default FissioGenesis;
