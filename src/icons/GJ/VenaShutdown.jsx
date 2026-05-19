import React from 'react';

export const iconData = {
  "id": "VenaShutdown",
  "name": "VenaShutdown",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.14 5.75 L 15.82 3.55 L 21.22 13.02 L 13.88 21.08 L 3.94 16.59 Z"
      }
    ]
  ]
};

export const VenaShutdown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.14 5.75 L 15.82 3.55 L 21.22 13.02 L 13.88 21.08 L 3.94 16.59 Z" />
      {children}
    </svg>
  );
});

export default VenaShutdown;
