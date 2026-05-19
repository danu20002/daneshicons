import React from 'react';

export const iconData = {
  "id": "FantoStorm",
  "name": "FantoStorm",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.01 2.35 L 12.52 8.57 L 19.63 4.28 L 15.43 11.44 L 21.70 16.87 L 13.59 15.08 L 10.37 22.74 L 9.56 14.47 L 1.28 13.76 L 8.90 10.44 Z"
      }
    ]
  ]
};

export const FantoStorm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.01 2.35 L 12.52 8.57 L 19.63 4.28 L 15.43 11.44 L 21.70 16.87 L 13.59 15.08 L 10.37 22.74 L 9.56 14.47 L 1.28 13.76 L 8.90 10.44 Z" />
      {children}
    </svg>
  );
});

export default FantoStorm;
