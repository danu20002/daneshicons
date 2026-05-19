import React from 'react';

export const iconData = {
  "id": "SkeletoSpoil",
  "name": "SkeletoSpoil",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 5.41 L 20.67 5.41 L 20.67 18.59 L 3.33 18.59 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 5.41 L 8.10 0.64 L 25.44 0.64 L 20.67 5.41"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 5.41 L 25.44 0.64 L 25.44 13.81 L 20.67 18.59"
      }
    ]
  ]
};

export const SkeletoSpoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 5.41 L 20.67 5.41 L 20.67 18.59 L 3.33 18.59 Z" />
      <path d="M 3.33 5.41 L 8.10 0.64 L 25.44 0.64 L 20.67 5.41" />
      <path d="M 20.67 5.41 L 25.44 0.64 L 25.44 13.81 L 20.67 18.59" />
      {children}
    </svg>
  );
});

export default SkeletoSpoil;
