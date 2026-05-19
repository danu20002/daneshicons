import React from 'react';

export const iconData = {
  "id": "ViticcioOnly",
  "name": "ViticcioOnly",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 14.57 L 4.71 8.35 L 9.43 4.26 L 15.65 4.71 L 19.74 9.43 L 19.29 15.65 L 14.57 19.74 L 8.35 19.29 Z"
      }
    ]
  ]
};

export const ViticcioOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 14.57 L 4.71 8.35 L 9.43 4.26 L 15.65 4.71 L 19.74 9.43 L 19.29 15.65 L 14.57 19.74 L 8.35 19.29 Z" />
      {children}
    </svg>
  );
});

export default ViticcioOnly;
