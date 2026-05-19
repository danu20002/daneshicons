import React from 'react';

export const iconData = {
  "id": "QuadraMonarch",
  "name": "QuadraMonarch",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 1.26 L 13.20 8.50 L 20.24 4.81 L 15.63 11.29 L 22.35 15.54 L 14.43 14.78 L 14.11 22.74 L 10.80 15.50 L 3.76 19.19 L 8.37 12.71 L 1.65 8.46 L 9.57 9.22 Z"
      }
    ]
  ]
};

export const QuadraMonarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 1.26 L 13.20 8.50 L 20.24 4.81 L 15.63 11.29 L 22.35 15.54 L 14.43 14.78 L 14.11 22.74 L 10.80 15.50 L 3.76 19.19 L 8.37 12.71 L 1.65 8.46 L 9.57 9.22 Z" />
      {children}
    </svg>
  );
});

export default QuadraMonarch;
