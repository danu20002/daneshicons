import React from 'react';

export const iconData = {
  "id": "MaltoStrap",
  "name": "MaltoStrap",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 5.43 L 19.24 5.43 L 19.24 18.57 L 4.76 18.57 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 5.43 L 8.54 1.65 L 23.03 1.65 L 19.24 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 19.24 5.43 L 23.03 1.65 L 23.03 14.78 L 19.24 18.57"
      }
    ]
  ]
};

export const MaltoStrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 5.43 L 19.24 5.43 L 19.24 18.57 L 4.76 18.57 Z" />
      <path d="M 4.76 5.43 L 8.54 1.65 L 23.03 1.65 L 19.24 5.43" />
      <path d="M 19.24 5.43 L 23.03 1.65 L 23.03 14.78 L 19.24 18.57" />
      {children}
    </svg>
  );
});

export default MaltoStrap;
