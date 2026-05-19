import React from 'react';

export const iconData = {
  "id": "FumoGrave",
  "name": "FumoGrave",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.11 20.50 L 3.58 9.58 L 18.31 5.92 Z"
      }
    ]
  ]
};

export const FumoGrave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.11 20.50 L 3.58 9.58 L 18.31 5.92 Z" />
      {children}
    </svg>
  );
});

export default FumoGrave;
