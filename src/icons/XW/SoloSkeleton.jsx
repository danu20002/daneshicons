import React from 'react';

export const iconData = {
  "id": "SoloSkeleton",
  "name": "SoloSkeleton",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.89 20.83 L 4.19 16.53 L 5.28 5.97 L 15.66 3.75 L 20.98 12.93 Z"
      }
    ]
  ]
};

export const SoloSkeleton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.89 20.83 L 4.19 16.53 L 5.28 5.97 L 15.66 3.75 L 20.98 12.93 Z" />
      {children}
    </svg>
  );
});

export default SoloSkeleton;
