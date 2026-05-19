import React from 'react';

export const iconData = {
  "id": "EchoForum",
  "name": "EchoForum",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.74 8.44 L 16.08 13.01 L 18.09 19.21 L 12.30 16.19 L 7.02 20.02 L 8.11 13.58 L 2.83 9.74 L 9.29 8.79 L 11.32 2.59 L 14.22 8.43 Z"
      }
    ]
  ]
};

export const EchoForum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.74 8.44 L 16.08 13.01 L 18.09 19.21 L 12.30 16.19 L 7.02 20.02 L 8.11 13.58 L 2.83 9.74 L 9.29 8.79 L 11.32 2.59 L 14.22 8.43 Z" />
      {children}
    </svg>
  );
});

export default EchoForum;
