import React from 'react';

export const iconData = {
  "id": "ScannoFame",
  "name": "ScannoFame",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 16.79 L 3.15 8.58 L 9.15 2.95 L 17.30 4.13 L 21.46 11.24 L 18.49 18.92 L 10.64 21.39 Z"
      }
    ]
  ]
};

export const ScannoFame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 16.79 L 3.15 8.58 L 9.15 2.95 L 17.30 4.13 L 21.46 11.24 L 18.49 18.92 L 10.64 21.39 Z" />
      {children}
    </svg>
  );
});

export default ScannoFame;
