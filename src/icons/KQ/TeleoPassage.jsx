import React from 'react';

export const iconData = {
  "id": "TeleoPassage",
  "name": "TeleoPassage",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 6.15 L 20.21 6.15 L 20.21 17.85 L 3.79 17.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.79 6.15 L 8.14 1.80 L 24.56 1.80 L 20.21 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 6.15 L 24.56 1.80 L 24.56 13.49 L 20.21 17.85"
      }
    ]
  ]
};

export const TeleoPassage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 6.15 L 20.21 6.15 L 20.21 17.85 L 3.79 17.85 Z" />
      <path d="M 3.79 6.15 L 8.14 1.80 L 24.56 1.80 L 20.21 6.15" />
      <path d="M 20.21 6.15 L 24.56 1.80 L 24.56 13.49 L 20.21 17.85" />
      {children}
    </svg>
  );
});

export default TeleoPassage;
