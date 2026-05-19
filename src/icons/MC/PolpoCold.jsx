import React from 'react';

export const iconData = {
  "id": "PolpoCold",
  "name": "PolpoCold",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 5.59 L 19.26 5.59 L 19.26 18.41 L 4.74 18.41 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.59 L 7.97 2.35 L 22.50 2.35 L 19.26 5.59"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.59 L 22.50 2.35 L 22.50 15.18 L 19.26 18.41"
      }
    ]
  ]
};

export const PolpoCold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 5.59 L 19.26 5.59 L 19.26 18.41 L 4.74 18.41 Z" />
      <path d="M 4.74 5.59 L 7.97 2.35 L 22.50 2.35 L 19.26 5.59" />
      <path d="M 19.26 5.59 L 22.50 2.35 L 22.50 15.18 L 19.26 18.41" />
      {children}
    </svg>
  );
});

export default PolpoCold;
