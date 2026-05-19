import React from 'react';

export const iconData = {
  "id": "PolarisCorps",
  "name": "PolarisCorps",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.85 3.64 L 19.93 8.11 L 20.36 14.85 L 15.89 19.93 L 9.15 20.36 L 4.07 15.89 L 3.64 9.15 L 8.11 4.07 Z"
      }
    ]
  ]
};

export const PolarisCorps = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.85 3.64 L 19.93 8.11 L 20.36 14.85 L 15.89 19.93 L 9.15 20.36 L 4.07 15.89 L 3.64 9.15 L 8.11 4.07 Z" />
      {children}
    </svg>
  );
});

export default PolarisCorps;
