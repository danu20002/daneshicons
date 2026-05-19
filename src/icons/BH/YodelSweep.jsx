import React from 'react';

export const iconData = {
  "id": "YodelSweep",
  "name": "YodelSweep",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.70 19.83 L 9.08 20.15 L 4.17 15.70 L 3.85 9.08 L 8.30 4.17 L 14.92 3.85 L 19.83 8.30 L 20.15 14.92 Z"
      }
    ]
  ]
};

export const YodelSweep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.70 19.83 L 9.08 20.15 L 4.17 15.70 L 3.85 9.08 L 8.30 4.17 L 14.92 3.85 L 19.83 8.30 L 20.15 14.92 Z" />
      {children}
    </svg>
  );
});

export default YodelSweep;
