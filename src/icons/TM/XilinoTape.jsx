import React from 'react';

export const iconData = {
  "id": "XilinoTape",
  "name": "XilinoTape",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.64 3.96 L 20.46 12.03 L 14.59 20.05 L 5.14 16.95 L 5.17 7.01 Z"
      }
    ]
  ]
};

export const XilinoTape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.64 3.96 L 20.46 12.03 L 14.59 20.05 L 5.14 16.95 L 5.17 7.01 Z" />
      {children}
    </svg>
  );
});

export default XilinoTape;
