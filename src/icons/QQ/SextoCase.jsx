import React from 'react';

export const iconData = {
  "id": "SextoCase",
  "name": "SextoCase",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.33 20.15 L 3.74 12.93 L 8.56 4.43 L 18.14 6.39 L 19.23 16.10 Z"
      }
    ]
  ]
};

export const SextoCase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.33 20.15 L 3.74 12.93 L 8.56 4.43 L 18.14 6.39 L 19.23 16.10 Z" />
      {children}
    </svg>
  );
});

export default SextoCase;
