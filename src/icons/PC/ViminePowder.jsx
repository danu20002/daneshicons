import React from 'react';

export const iconData = {
  "id": "ViminePowder",
  "name": "ViminePowder",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.90 2.95 L 17.89 19.90 L 2.22 13.15 Z"
      }
    ]
  ]
};

export const ViminePowder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.90 2.95 L 17.89 19.90 L 2.22 13.15 Z" />
      {children}
    </svg>
  );
});

export default ViminePowder;
