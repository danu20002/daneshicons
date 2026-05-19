import React from 'react';

export const iconData = {
  "id": "ForgeProvide",
  "name": "ForgeProvide",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 9.14 L 8.54 4.49 L 14.86 4.25 L 19.51 8.54 L 19.75 14.86 L 15.46 19.51 L 9.14 19.75 L 4.49 15.46 Z"
      }
    ]
  ]
};

export const ForgeProvide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 9.14 L 8.54 4.49 L 14.86 4.25 L 19.51 8.54 L 19.75 14.86 L 15.46 19.51 L 9.14 19.75 L 4.49 15.46 Z" />
      {children}
    </svg>
  );
});

export default ForgeProvide;
