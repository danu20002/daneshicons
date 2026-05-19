import React from 'react';

export const iconData = {
  "id": "ViolaPart",
  "name": "ViolaPart",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 7.79 L 12.21 3.94 L 19.08 8.16 L 18.87 16.21 L 11.79 20.06 L 4.92 15.84 Z"
      }
    ]
  ]
};

export const ViolaPart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 7.79 L 12.21 3.94 L 19.08 8.16 L 18.87 16.21 L 11.79 20.06 L 4.92 15.84 Z" />
      {children}
    </svg>
  );
});

export default ViolaPart;
