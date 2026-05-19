import React from 'react';

export const iconData = {
  "id": "BoreEast",
  "name": "BoreEast",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 3.84 L 18.01 6.08 L 20.13 14.25 L 14.12 20.16 L 5.99 17.92 L 3.87 9.75 Z"
      }
    ]
  ]
};

export const BoreEast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 3.84 L 18.01 6.08 L 20.13 14.25 L 14.12 20.16 L 5.99 17.92 L 3.87 9.75 Z" />
      {children}
    </svg>
  );
});

export default BoreEast;
