import React from 'react';

export const iconData = {
  "id": "StelloSplice",
  "name": "StelloSplice",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.50 20.71 L 6.21 4.62 L 21.29 10.68 Z"
      }
    ]
  ]
};

export const StelloSplice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.50 20.71 L 6.21 4.62 L 21.29 10.68 Z" />
      {children}
    </svg>
  );
});

export default StelloSplice;
