import React from 'react';

export const iconData = {
  "id": "SequenNorm",
  "name": "SequenNorm",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.21 19.48 L 4.52 7.21 L 16.79 4.52 L 19.48 16.79 Z"
      }
    ]
  ]
};

export const SequenNorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.21 19.48 L 4.52 7.21 L 16.79 4.52 L 19.48 16.79 Z" />
      {children}
    </svg>
  );
});

export default SequenNorm;
