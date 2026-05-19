import React from 'react';

export const iconData = {
  "id": "SemiWedding",
  "name": "SemiWedding",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.21 10.85 L 8.80 7.96 L 13.15 2.21 L 16.04 8.80 L 21.79 13.15 L 15.20 16.04 L 10.85 21.79 L 7.96 15.20 Z"
      }
    ]
  ]
};

export const SemiWedding = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.21 10.85 L 8.80 7.96 L 13.15 2.21 L 16.04 8.80 L 21.79 13.15 L 15.20 16.04 L 10.85 21.79 L 7.96 15.20 Z" />
      {children}
    </svg>
  );
});

export default SemiWedding;
