import React from 'react';

export const iconData = {
  "id": "VezzoXerox",
  "name": "VezzoXerox",
  "category": "BD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 6.87 L 19.90 6.87 L 19.90 17.13 L 4.10 17.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 6.87 L 7.92 3.05 L 23.72 3.05 L 19.90 6.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.90 6.87 L 23.72 3.05 L 23.72 13.31 L 19.90 17.13"
      }
    ]
  ]
};

export const VezzoXerox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 6.87 L 19.90 6.87 L 19.90 17.13 L 4.10 17.13 Z" />
      <path d="M 4.10 6.87 L 7.92 3.05 L 23.72 3.05 L 19.90 6.87" />
      <path d="M 19.90 6.87 L 23.72 3.05 L 23.72 13.31 L 19.90 17.13" />
      {children}
    </svg>
  );
});

export default VezzoXerox;
