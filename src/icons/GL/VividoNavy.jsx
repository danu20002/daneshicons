import React from 'react';

export const iconData = {
  "id": "VividoNavy",
  "name": "VividoNavy",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.08 1.91 L 15.25 7.60 L 21.62 8.96 L 17.18 13.73 L 17.86 20.21 L 11.96 17.46 L 6.01 20.11 L 6.79 13.65 L 2.43 8.81 L 8.82 7.55 Z"
      }
    ]
  ]
};

export const VividoNavy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.08 1.91 L 15.25 7.60 L 21.62 8.96 L 17.18 13.73 L 17.86 20.21 L 11.96 17.46 L 6.01 20.11 L 6.79 13.65 L 2.43 8.81 L 8.82 7.55 Z" />
      {children}
    </svg>
  );
});

export default VividoNavy;
