import React from 'react';

export const iconData = {
  "id": "DorsoPan",
  "name": "DorsoPan",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.88 11.11 L 15.88 15.29 L 12.89 22.88 L 8.71 15.88 L 1.12 12.89 L 8.12 8.71 L 11.11 1.12 L 15.29 8.12 Z"
      }
    ]
  ]
};

export const DorsoPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.88 11.11 L 15.88 15.29 L 12.89 22.88 L 8.71 15.88 L 1.12 12.89 L 8.12 8.71 L 11.11 1.12 L 15.29 8.12 Z" />
      {children}
    </svg>
  );
});

export default DorsoPan;
