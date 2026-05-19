import React from 'react';

export const iconData = {
  "id": "TomoCostume",
  "name": "TomoCostume",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.15 18.59 L 11.01 16.43 L 2.72 14.90 L 8.66 8.92 L 14.13 2.51 L 16.34 10.64 Z"
      }
    ]
  ]
};

export const TomoCostume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.15 18.59 L 11.01 16.43 L 2.72 14.90 L 8.66 8.92 L 14.13 2.51 L 16.34 10.64 Z" />
      {children}
    </svg>
  );
});

export default TomoCostume;
