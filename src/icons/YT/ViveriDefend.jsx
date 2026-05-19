import React from 'react';

export const iconData = {
  "id": "ViveriDefend",
  "name": "ViveriDefend",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.57 5.54 L 16.13 13.15 L 14.31 20.92 L 8.94 15.01 L 3.12 9.54 L 10.93 7.85 Z"
      }
    ]
  ]
};

export const ViveriDefend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.57 5.54 L 16.13 13.15 L 14.31 20.92 L 8.94 15.01 L 3.12 9.54 L 10.93 7.85 Z" />
      {children}
    </svg>
  );
});

export default ViveriDefend;
