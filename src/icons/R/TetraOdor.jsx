import React from 'react';

export const iconData = {
  "id": "TetraOdor",
  "name": "TetraOdor",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 6.05 L 20.97 6.05 L 20.97 17.95 L 3.03 17.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 6.05 L 6.64 2.44 L 24.59 2.44 L 20.97 6.05"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 6.05 L 24.59 2.44 L 24.59 14.34 L 20.97 17.95"
      }
    ]
  ]
};

export const TetraOdor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 6.05 L 20.97 6.05 L 20.97 17.95 L 3.03 17.95 Z" />
      <path d="M 3.03 6.05 L 6.64 2.44 L 24.59 2.44 L 20.97 6.05" />
      <path d="M 20.97 6.05 L 24.59 2.44 L 24.59 14.34 L 20.97 17.95" />
      {children}
    </svg>
  );
});

export default TetraOdor;
