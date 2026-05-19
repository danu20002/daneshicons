import React from 'react';

export const iconData = {
  "id": "RenoSwift",
  "name": "RenoSwift",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.08 4.10 L 20.72 10.26 L 18.79 17.73 L 11.75 20.89 L 4.90 17.35 L 3.39 9.78 L 8.37 3.89 Z"
      }
    ]
  ]
};

export const RenoSwift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.08 4.10 L 20.72 10.26 L 18.79 17.73 L 11.75 20.89 L 4.90 17.35 L 3.39 9.78 L 8.37 3.89 Z" />
      {children}
    </svg>
  );
});

export default RenoSwift;
