import React from 'react';

export const iconData = {
  "id": "UlivoHunger",
  "name": "UlivoHunger",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 6.44 L 20.36 6.44 L 20.36 17.56 L 3.64 17.56 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 6.44 L 7.57 2.51 L 24.30 2.51 L 20.36 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 6.44 L 24.30 2.51 L 24.30 13.62 L 20.36 17.56"
      }
    ]
  ]
};

export const UlivoHunger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 6.44 L 20.36 6.44 L 20.36 17.56 L 3.64 17.56 Z" />
      <path d="M 3.64 6.44 L 7.57 2.51 L 24.30 2.51 L 20.36 6.44" />
      <path d="M 20.36 6.44 L 24.30 2.51 L 24.30 13.62 L 20.36 17.56" />
      {children}
    </svg>
  );
});

export default UlivoHunger;
