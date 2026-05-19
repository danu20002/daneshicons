import React from 'react';

export const iconData = {
  "id": "RhodoTorch",
  "name": "RhodoTorch",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.92 7.73 L 19.66 16.73 L 11.73 20.99 L 4.08 16.27 L 4.34 7.27 L 12.27 3.01 Z"
      }
    ]
  ]
};

export const RhodoTorch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.92 7.73 L 19.66 16.73 L 11.73 20.99 L 4.08 16.27 L 4.34 7.27 L 12.27 3.01 Z" />
      {children}
    </svg>
  );
});

export default RhodoTorch;
