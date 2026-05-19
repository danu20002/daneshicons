import React from 'react';

export const iconData = {
  "id": "RegulaPath",
  "name": "RegulaPath",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.95 1.36 L 14.50 9.06 L 22.19 8.37 L 15.80 12.70 L 20.24 19.01 L 13.30 15.64 L 10.05 22.64 L 9.50 14.94 L 1.81 15.63 L 8.20 11.30 L 3.76 4.99 L 10.70 8.36 Z"
      }
    ]
  ]
};

export const RegulaPath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.95 1.36 L 14.50 9.06 L 22.19 8.37 L 15.80 12.70 L 20.24 19.01 L 13.30 15.64 L 10.05 22.64 L 9.50 14.94 L 1.81 15.63 L 8.20 11.30 L 3.76 4.99 L 10.70 8.36 Z" />
      {children}
    </svg>
  );
});

export default RegulaPath;
