import React from 'react';

export const iconData = {
  "id": "LapisoForest",
  "name": "LapisoForest",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 5.19 L 20.87 5.19 L 20.87 18.81 L 3.13 18.81 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 5.19 L 8.09 0.23 L 25.83 0.23 L 20.87 5.19"
      }
    ],
    [
      "path",
      {
        "d": "M 20.87 5.19 L 25.83 0.23 L 25.83 13.85 L 20.87 18.81"
      }
    ]
  ]
};

export const LapisoForest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 5.19 L 20.87 5.19 L 20.87 18.81 L 3.13 18.81 Z" />
      <path d="M 3.13 5.19 L 8.09 0.23 L 25.83 0.23 L 20.87 5.19" />
      <path d="M 20.87 5.19 L 25.83 0.23 L 25.83 13.85 L 20.87 18.81" />
      {children}
    </svg>
  );
});

export default LapisoForest;
