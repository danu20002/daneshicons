import React from 'react';

export const iconData = {
  "id": "MegaBand",
  "name": "MegaBand",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.74 20.78 L 8.00 14.71 L 2.27 12.70 L 7.66 9.89 L 6.53 3.92 L 11.65 7.19 L 16.26 3.22 L 16.00 9.29 L 21.73 11.30 L 16.34 14.11 L 17.47 20.08 L 12.35 16.81 Z"
      }
    ]
  ]
};

export const MegaBand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.74 20.78 L 8.00 14.71 L 2.27 12.70 L 7.66 9.89 L 6.53 3.92 L 11.65 7.19 L 16.26 3.22 L 16.00 9.29 L 21.73 11.30 L 16.34 14.11 L 17.47 20.08 L 12.35 16.81 Z" />
      {children}
    </svg>
  );
});

export default MegaBand;
