import React from 'react';

export const iconData = {
  "id": "RedoxDot",
  "name": "RedoxDot",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.33 3.18 L 19.17 6.71 L 20.82 13.33 L 17.29 19.17 L 10.67 20.82 L 4.83 17.29 L 3.18 10.67 L 6.71 4.83 Z"
      }
    ]
  ]
};

export const RedoxDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.33 3.18 L 19.17 6.71 L 20.82 13.33 L 17.29 19.17 L 10.67 20.82 L 4.83 17.29 L 3.18 10.67 L 6.71 4.83 Z" />
      {children}
    </svg>
  );
});

export default RedoxDot;
