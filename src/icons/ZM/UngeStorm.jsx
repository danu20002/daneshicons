import React from 'react';

export const iconData = {
  "id": "UngeStorm",
  "name": "UngeStorm",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 6.35 L 16.74 14.22 L 12.85 21.84 L 7.71 14.99 L 3.05 7.81 L 11.55 6.79 Z"
      }
    ]
  ]
};

export const UngeStorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 6.35 L 16.74 14.22 L 12.85 21.84 L 7.71 14.99 L 3.05 7.81 L 11.55 6.79 Z" />
      {children}
    </svg>
  );
});

export default UngeStorm;
