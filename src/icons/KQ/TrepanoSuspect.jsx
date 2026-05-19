import React from 'react';

export const iconData = {
  "id": "TrepanoSuspect",
  "name": "TrepanoSuspect",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 6.18 L 19.46 6.18 L 19.46 17.82 L 4.54 17.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 6.18 L 9.37 1.35 L 24.28 1.35 L 19.46 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 19.46 6.18 L 24.28 1.35 L 24.28 12.99 L 19.46 17.82"
      }
    ]
  ]
};

export const TrepanoSuspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 6.18 L 19.46 6.18 L 19.46 17.82 L 4.54 17.82 Z" />
      <path d="M 4.54 6.18 L 9.37 1.35 L 24.28 1.35 L 19.46 6.18" />
      <path d="M 19.46 6.18 L 24.28 1.35 L 24.28 12.99 L 19.46 17.82" />
      {children}
    </svg>
  );
});

export default TrepanoSuspect;
