import React from 'react';

export const iconData = {
  "id": "PrismoRaise",
  "name": "PrismoRaise",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 5.81 L 20.27 5.81 L 20.27 18.19 L 3.73 18.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 5.81 L 8.15 1.39 L 24.69 1.39 L 20.27 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 20.27 5.81 L 24.69 1.39 L 24.69 13.77 L 20.27 18.19"
      }
    ]
  ]
};

export const PrismoRaise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 5.81 L 20.27 5.81 L 20.27 18.19 L 3.73 18.19 Z" />
      <path d="M 3.73 5.81 L 8.15 1.39 L 24.69 1.39 L 20.27 5.81" />
      <path d="M 20.27 5.81 L 24.69 1.39 L 24.69 13.77 L 20.27 18.19" />
      {children}
    </svg>
  );
});

export default PrismoRaise;
