import React from 'react';

export const iconData = {
  "id": "VividoEffort",
  "name": "VividoEffort",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 22.73 L 8.96 15.95 L 2.21 16.92 L 7.02 12.09 L 2.04 7.41 L 8.83 8.16 L 9.38 1.36 L 13.02 7.13 L 18.69 3.31 L 16.45 9.76 L 22.96 11.81 L 16.52 14.08 L 18.98 20.45 L 13.19 16.83 Z"
      }
    ]
  ]
};

export const VividoEffort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 22.73 L 8.96 15.95 L 2.21 16.92 L 7.02 12.09 L 2.04 7.41 L 8.83 8.16 L 9.38 1.36 L 13.02 7.13 L 18.69 3.31 L 16.45 9.76 L 22.96 11.81 L 16.52 14.08 L 18.98 20.45 L 13.19 16.83 Z" />
      {children}
    </svg>
  );
});

export default VividoEffort;
