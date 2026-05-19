import React from 'react';

export const iconData = {
  "id": "VocioMine",
  "name": "VocioMine",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.76 20.68 L 8.35 14.01 L 1.86 11.80 L 8.43 9.84 L 7.10 3.12 L 12.08 7.83 L 17.24 3.32 L 15.65 9.99 L 22.14 12.20 L 15.57 14.16 L 16.90 20.88 L 11.92 16.17 Z"
      }
    ]
  ]
};

export const VocioMine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.76 20.68 L 8.35 14.01 L 1.86 11.80 L 8.43 9.84 L 7.10 3.12 L 12.08 7.83 L 17.24 3.32 L 15.65 9.99 L 22.14 12.20 L 15.57 14.16 L 16.90 20.88 L 11.92 16.17 Z" />
      {children}
    </svg>
  );
});

export default VocioMine;
