import React from 'react';

export const iconData = {
  "id": "FantoEngine",
  "name": "FantoEngine",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.53 13.19 L 13.82 21.43 L 3.59 16.64 L 4.99 5.44 L 16.07 3.31 Z"
      }
    ]
  ]
};

export const FantoEngine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.53 13.19 L 13.82 21.43 L 3.59 16.64 L 4.99 5.44 L 16.07 3.31 Z" />
      {children}
    </svg>
  );
});

export default FantoEngine;
