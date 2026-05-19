import React from 'react';

export const iconData = {
  "id": "TrimeroCubicle",
  "name": "TrimeroCubicle",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 5.79 L 19.12 5.79 L 19.12 18.21 L 4.88 18.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 5.79 L 9.34 1.33 L 23.58 1.33 L 19.12 5.79"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 5.79 L 23.58 1.33 L 23.58 13.75 L 19.12 18.21"
      }
    ]
  ]
};

export const TrimeroCubicle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 5.79 L 19.12 5.79 L 19.12 18.21 L 4.88 18.21 Z" />
      <path d="M 4.88 5.79 L 9.34 1.33 L 23.58 1.33 L 19.12 5.79" />
      <path d="M 19.12 5.79 L 23.58 1.33 L 23.58 13.75 L 19.12 18.21" />
      {children}
    </svg>
  );
});

export default TrimeroCubicle;
