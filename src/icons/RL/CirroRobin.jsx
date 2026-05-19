import React from 'react';

export const iconData = {
  "id": "CirroRobin",
  "name": "CirroRobin",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.83 13.82 L 8.41 7.90 L 15.01 3.15 L 17.35 10.94 L 18.16 19.03 L 10.24 17.16 Z"
      }
    ]
  ]
};

export const CirroRobin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.83 13.82 L 8.41 7.90 L 15.01 3.15 L 17.35 10.94 L 18.16 19.03 L 10.24 17.16 Z" />
      {children}
    </svg>
  );
});

export default CirroRobin;
