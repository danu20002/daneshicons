import React from 'react';

export const iconData = {
  "id": "TestoStrap",
  "name": "TestoStrap",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.21 18.36 L 3.10 9.30 L 9.89 2.95 L 18.79 5.64 L 20.90 14.70 L 14.11 21.05 Z"
      }
    ]
  ]
};

export const TestoStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.21 18.36 L 3.10 9.30 L 9.89 2.95 L 18.79 5.64 L 20.90 14.70 L 14.11 21.05 Z" />
      {children}
    </svg>
  );
});

export default TestoStrap;
