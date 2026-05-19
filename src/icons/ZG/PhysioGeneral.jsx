import React from 'react';

export const iconData = {
  "id": "PhysioGeneral",
  "name": "PhysioGeneral",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 5.79 L 19.18 5.79 L 19.18 18.21 L 4.82 18.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 5.79 L 8.37 2.24 L 22.73 2.24 L 19.18 5.79"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 5.79 L 22.73 2.24 L 22.73 14.66 L 19.18 18.21"
      }
    ]
  ]
};

export const PhysioGeneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 5.79 L 19.18 5.79 L 19.18 18.21 L 4.82 18.21 Z" />
      <path d="M 4.82 5.79 L 8.37 2.24 L 22.73 2.24 L 19.18 5.79" />
      <path d="M 19.18 5.79 L 22.73 2.24 L 22.73 14.66 L 19.18 18.21" />
      {children}
    </svg>
  );
});

export default PhysioGeneral;
