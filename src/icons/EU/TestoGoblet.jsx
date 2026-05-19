import React from 'react';

export const iconData = {
  "id": "TestoGoblet",
  "name": "TestoGoblet",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 6.72 L 20.58 6.72 L 20.58 17.28 L 3.42 17.28 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 6.72 L 8.09 2.06 L 25.25 2.06 L 20.58 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 20.58 6.72 L 25.25 2.06 L 25.25 12.61 L 20.58 17.28"
      }
    ]
  ]
};

export const TestoGoblet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 6.72 L 20.58 6.72 L 20.58 17.28 L 3.42 17.28 Z" />
      <path d="M 3.42 6.72 L 8.09 2.06 L 25.25 2.06 L 20.58 6.72" />
      <path d="M 20.58 6.72 L 25.25 2.06 L 25.25 12.61 L 20.58 17.28" />
      {children}
    </svg>
  );
});

export default TestoGoblet;
