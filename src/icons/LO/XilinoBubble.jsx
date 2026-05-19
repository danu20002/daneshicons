import React from 'react';

export const iconData = {
  "id": "XilinoBubble",
  "name": "XilinoBubble",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.99 22.64 L 8.72 16.79 L 1.36 13.99 L 7.21 8.72 L 10.01 1.36 L 15.28 7.21 L 22.64 10.01 L 16.79 15.28 Z"
      }
    ]
  ]
};

export const XilinoBubble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.99 22.64 L 8.72 16.79 L 1.36 13.99 L 7.21 8.72 L 10.01 1.36 L 15.28 7.21 L 22.64 10.01 L 16.79 15.28 Z" />
      {children}
    </svg>
  );
});

export default XilinoBubble;
