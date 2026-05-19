import React from 'react';

export const iconData = {
  "id": "ThecoList",
  "name": "ThecoList",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 5.13 L 19.51 5.13 L 19.51 18.87 L 4.49 18.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.13 L 9.20 0.41 L 24.23 0.41 L 19.51 5.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.13 L 24.23 0.41 L 24.23 14.16 L 19.51 18.87"
      }
    ]
  ]
};

export const ThecoList = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 5.13 L 19.51 5.13 L 19.51 18.87 L 4.49 18.87 Z" />
      <path d="M 4.49 5.13 L 9.20 0.41 L 24.23 0.41 L 19.51 5.13" />
      <path d="M 19.51 5.13 L 24.23 0.41 L 24.23 14.16 L 19.51 18.87" />
      {children}
    </svg>
  );
});

export default ThecoList;
