import React from 'react';

export const iconData = {
  "id": "StagnoDump",
  "name": "StagnoDump",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.14 3.26 L 20.74 16.14 L 7.86 20.74 L 3.26 7.86 Z"
      }
    ]
  ]
};

export const StagnoDump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.14 3.26 L 20.74 16.14 L 7.86 20.74 L 3.26 7.86 Z" />
      {children}
    </svg>
  );
});

export default StagnoDump;
