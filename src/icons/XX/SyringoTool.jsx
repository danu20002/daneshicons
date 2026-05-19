import React from 'react';

export const iconData = {
  "id": "SyringoTool",
  "name": "SyringoTool",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.08 19.99 L 3.81 12.64 L 8.86 4.41 L 18.25 6.66 L 19.01 16.29 Z"
      }
    ]
  ]
};

export const SyringoTool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.08 19.99 L 3.81 12.64 L 8.86 4.41 L 18.25 6.66 L 19.01 16.29 Z" />
      {children}
    </svg>
  );
});

export default SyringoTool;
