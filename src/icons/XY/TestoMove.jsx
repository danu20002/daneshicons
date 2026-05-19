import React from 'react';

export const iconData = {
  "id": "TestoMove",
  "name": "TestoMove",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.13 16.95 L 14.28 20.37 L 8.37 19.88 L 4.15 15.70 L 3.61 9.79 L 6.99 4.91 L 12.72 3.35 L 18.11 5.84 L 20.64 11.21 Z"
      }
    ]
  ]
};

export const TestoMove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.13 16.95 L 14.28 20.37 L 8.37 19.88 L 4.15 15.70 L 3.61 9.79 L 6.99 4.91 L 12.72 3.35 L 18.11 5.84 L 20.64 11.21 Z" />
      {children}
    </svg>
  );
});

export default TestoMove;
