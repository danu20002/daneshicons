import React from 'react';

export const iconData = {
  "id": "TetraTheater",
  "name": "TetraTheater",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 5.36 L 19.54 5.36 L 19.54 18.64 L 4.46 18.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 5.36 L 7.74 2.08 L 22.82 2.08 L 19.54 5.36"
      }
    ],
    [
      "path",
      {
        "d": "M 19.54 5.36 L 22.82 2.08 L 22.82 15.36 L 19.54 18.64"
      }
    ]
  ]
};

export const TetraTheater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 5.36 L 19.54 5.36 L 19.54 18.64 L 4.46 18.64 Z" />
      <path d="M 4.46 5.36 L 7.74 2.08 L 22.82 2.08 L 19.54 5.36" />
      <path d="M 19.54 5.36 L 22.82 2.08 L 22.82 15.36 L 19.54 18.64" />
      {children}
    </svg>
  );
});

export default TetraTheater;
