import React from 'react';

export const iconData = {
  "id": "VoltajeLecture",
  "name": "VoltajeLecture",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.35 20.20 L 3.80 13.35 L 10.65 3.80 L 20.20 10.65 Z"
      }
    ]
  ]
};

export const VoltajeLecture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.35 20.20 L 3.80 13.35 L 10.65 3.80 L 20.20 10.65 Z" />
      {children}
    </svg>
  );
});

export default VoltajeLecture;
