import React from 'react';

export const iconData = {
  "id": "ZulùCap",
  "name": "ZulùCap",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.15 5.54 L 18.46 7.15 L 16.85 18.46 L 5.54 16.85 Z"
      }
    ]
  ]
};

export const ZulùCap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.15 5.54 L 18.46 7.15 L 16.85 18.46 L 5.54 16.85 Z" />
      {children}
    </svg>
  );
});

export default ZulùCap;
