import React from 'react';

export const iconData = {
  "id": "ViveriOccupy",
  "name": "ViveriOccupy",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.18 19.82 L 8.45 13.76 L 1.65 12.71 L 8.24 10.74 L 4.18 5.18 L 10.24 8.45 L 11.29 1.65 L 13.26 8.24 L 18.82 4.18 L 15.55 10.24 L 22.35 11.29 L 15.76 13.26 L 19.82 18.82 L 13.76 15.55 L 12.71 22.35 L 10.74 15.76 Z"
      }
    ]
  ]
};

export const ViveriOccupy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.18 19.82 L 8.45 13.76 L 1.65 12.71 L 8.24 10.74 L 4.18 5.18 L 10.24 8.45 L 11.29 1.65 L 13.26 8.24 L 18.82 4.18 L 15.55 10.24 L 22.35 11.29 L 15.76 13.26 L 19.82 18.82 L 13.76 15.55 L 12.71 22.35 L 10.74 15.76 Z" />
      {children}
    </svg>
  );
});

export default ViveriOccupy;
