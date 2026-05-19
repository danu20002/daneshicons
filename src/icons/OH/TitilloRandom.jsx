import React from 'react';

export const iconData = {
  "id": "TitilloRandom",
  "name": "TitilloRandom",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 5.26 L 19.12 5.26 L 19.12 18.74 L 4.88 18.74 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.88 5.26 L 9.28 0.86 L 23.53 0.86 L 19.12 5.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 5.26 L 23.53 0.86 L 23.53 14.34 L 19.12 18.74"
      }
    ]
  ]
};

export const TitilloRandom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 5.26 L 19.12 5.26 L 19.12 18.74 L 4.88 18.74 Z" />
      <path d="M 4.88 5.26 L 9.28 0.86 L 23.53 0.86 L 19.12 5.26" />
      <path d="M 19.12 5.26 L 23.53 0.86 L 23.53 14.34 L 19.12 18.74" />
      {children}
    </svg>
  );
});

export default TitilloRandom;
