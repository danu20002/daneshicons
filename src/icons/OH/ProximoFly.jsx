import React from 'react';

export const iconData = {
  "id": "ProximoFly",
  "name": "ProximoFly",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 6.13 L 19.18 6.13 L 19.18 17.87 L 4.82 17.87 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 6.13 L 8.79 2.16 L 23.15 2.16 L 19.18 6.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 6.13 L 23.15 2.16 L 23.15 13.90 L 19.18 17.87"
      }
    ]
  ]
};

export const ProximoFly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 6.13 L 19.18 6.13 L 19.18 17.87 L 4.82 17.87 Z" />
      <path d="M 4.82 6.13 L 8.79 2.16 L 23.15 2.16 L 19.18 6.13" />
      <path d="M 19.18 6.13 L 23.15 2.16 L 23.15 13.90 L 19.18 17.87" />
      {children}
    </svg>
  );
});

export default ProximoFly;
