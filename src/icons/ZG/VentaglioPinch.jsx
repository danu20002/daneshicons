import React from 'react';

export const iconData = {
  "id": "VentaglioPinch",
  "name": "VentaglioPinch",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 6.86 L 19.68 6.86 L 19.68 17.14 L 4.32 17.14 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 6.86 L 7.95 3.23 L 23.31 3.23 L 19.68 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 19.68 6.86 L 23.31 3.23 L 23.31 13.51 L 19.68 17.14"
      }
    ]
  ]
};

export const VentaglioPinch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 6.86 L 19.68 6.86 L 19.68 17.14 L 4.32 17.14 Z" />
      <path d="M 4.32 6.86 L 7.95 3.23 L 23.31 3.23 L 19.68 6.86" />
      <path d="M 19.68 6.86 L 23.31 3.23 L 23.31 13.51 L 19.68 17.14" />
      {children}
    </svg>
  );
});

export default VentaglioPinch;
