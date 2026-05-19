import React from 'react';

export const iconData = {
  "id": "RhyoCord",
  "name": "RhyoCord",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 15.89 L 15.02 20.52 L 8.11 20.16 L 3.48 15.02 L 3.84 8.11 L 8.98 3.48 L 15.89 3.84 L 20.52 8.98 Z"
      }
    ]
  ]
};

export const RhyoCord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 15.89 L 15.02 20.52 L 8.11 20.16 L 3.48 15.02 L 3.84 8.11 L 8.98 3.48 L 15.89 3.84 L 20.52 8.98 Z" />
      {children}
    </svg>
  );
});

export default RhyoCord;
