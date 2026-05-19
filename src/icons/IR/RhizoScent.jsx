import React from 'react';

export const iconData = {
  "id": "RhizoScent",
  "name": "RhizoScent",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 22.32 L 9.05 14.23 L 1.21 12.19 L 8.97 9.88 L 8.48 1.80 L 13.08 8.46 L 20.62 5.50 L 15.70 11.93 L 20.84 18.19 L 13.20 15.49 Z"
      }
    ]
  ]
};

export const RhizoScent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 22.32 L 9.05 14.23 L 1.21 12.19 L 8.97 9.88 L 8.48 1.80 L 13.08 8.46 L 20.62 5.50 L 15.70 11.93 L 20.84 18.19 L 13.20 15.49 Z" />
      {children}
    </svg>
  );
});

export default RhizoScent;
