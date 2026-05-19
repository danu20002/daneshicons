import React from 'react';

export const iconData = {
  "id": "VulcanoLotion",
  "name": "VulcanoLotion",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.71 2.90 L 11.78 7.48 L 15.40 2.53 L 15.04 8.65 L 21.10 7.71 L 16.52 11.78 L 21.47 15.40 L 15.35 15.04 L 16.29 21.10 L 12.22 16.52 L 8.60 21.47 L 8.96 15.35 L 2.90 16.29 L 7.48 12.22 L 2.53 8.60 L 8.65 8.96 Z"
      }
    ]
  ]
};

export const VulcanoLotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.71 2.90 L 11.78 7.48 L 15.40 2.53 L 15.04 8.65 L 21.10 7.71 L 16.52 11.78 L 21.47 15.40 L 15.35 15.04 L 16.29 21.10 L 12.22 16.52 L 8.60 21.47 L 8.96 15.35 L 2.90 16.29 L 7.48 12.22 L 2.53 8.60 L 8.65 8.96 Z" />
      {children}
    </svg>
  );
});

export default VulcanoLotion;
