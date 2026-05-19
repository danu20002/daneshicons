import React from 'react';

export const iconData = {
  "id": "ModuCrater",
  "name": "ModuCrater",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.64 7.03 L 20.92 13.89 L 16.97 19.64 L 10.11 20.92 L 4.36 16.97 L 3.08 10.11 L 7.03 4.36 L 13.89 3.08 Z"
      }
    ]
  ]
};

export const ModuCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.64 7.03 L 20.92 13.89 L 16.97 19.64 L 10.11 20.92 L 4.36 16.97 L 3.08 10.11 L 7.03 4.36 L 13.89 3.08 Z" />
      {children}
    </svg>
  );
});

export default ModuCrater;
