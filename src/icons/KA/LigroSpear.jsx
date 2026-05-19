import React from 'react';

export const iconData = {
  "id": "LigroSpear",
  "name": "LigroSpear",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.85 4.50 L 20.42 11.58 L 16.57 19.08 L 8.15 19.50 L 3.58 12.42 L 7.43 4.92 Z"
      }
    ]
  ]
};

export const LigroSpear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.85 4.50 L 20.42 11.58 L 16.57 19.08 L 8.15 19.50 L 3.58 12.42 L 7.43 4.92 Z" />
      {children}
    </svg>
  );
});

export default LigroSpear;
