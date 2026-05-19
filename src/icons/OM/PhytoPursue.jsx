import React from 'react';

export const iconData = {
  "id": "PhytoPursue",
  "name": "PhytoPursue",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 7.77 L 8.70 8.16 L 9.08 3.10 L 12.38 6.95 L 16.23 3.64 L 15.84 8.70 L 20.90 9.08 L 17.05 12.38 L 20.36 16.23 L 15.30 15.84 L 14.92 20.90 L 11.62 17.05 L 7.77 20.36 L 8.16 15.30 L 3.10 14.92 L 6.95 11.62 Z"
      }
    ]
  ]
};

export const PhytoPursue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 7.77 L 8.70 8.16 L 9.08 3.10 L 12.38 6.95 L 16.23 3.64 L 15.84 8.70 L 20.90 9.08 L 17.05 12.38 L 20.36 16.23 L 15.30 15.84 L 14.92 20.90 L 11.62 17.05 L 7.77 20.36 L 8.16 15.30 L 3.10 14.92 L 6.95 11.62 Z" />
      {children}
    </svg>
  );
});

export default PhytoPursue;
