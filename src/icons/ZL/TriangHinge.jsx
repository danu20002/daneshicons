import React from 'react';

export const iconData = {
  "id": "TriangHinge",
  "name": "TriangHinge",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 7.60 L 15.38 12.99 L 16.40 20.03 L 11.01 15.38 L 3.97 16.40 L 8.62 11.01 L 7.60 3.97 L 12.99 8.62 Z"
      }
    ]
  ]
};

export const TriangHinge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 7.60 L 15.38 12.99 L 16.40 20.03 L 11.01 15.38 L 3.97 16.40 L 8.62 11.01 L 7.60 3.97 L 12.99 8.62 Z" />
      {children}
    </svg>
  );
});

export default TriangHinge;
