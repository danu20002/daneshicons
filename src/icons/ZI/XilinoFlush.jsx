import React from 'react';

export const iconData = {
  "id": "XilinoFlush",
  "name": "XilinoFlush",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.83 2.57 L 18.64 5.20 L 21.46 12.96 L 17.15 19.99 L 8.96 21.01 L 3.06 15.24 L 3.89 7.04 Z"
      }
    ]
  ]
};

export const XilinoFlush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.83 2.57 L 18.64 5.20 L 21.46 12.96 L 17.15 19.99 L 8.96 21.01 L 3.06 15.24 L 3.89 7.04 Z" />
      {children}
    </svg>
  );
});

export default XilinoFlush;
