import React from 'react';

export const iconData = {
  "id": "GranoScan",
  "name": "GranoScan",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.95 21.52 L 8.68 13.71 L 2.48 8.95 L 10.29 8.68 L 15.05 2.48 L 15.32 10.29 L 21.52 15.05 L 13.71 15.32 Z"
      }
    ]
  ]
};

export const GranoScan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.95 21.52 L 8.68 13.71 L 2.48 8.95 L 10.29 8.68 L 15.05 2.48 L 15.32 10.29 L 21.52 15.05 L 13.71 15.32 Z" />
      {children}
    </svg>
  );
});

export default GranoScan;
