import React from 'react';

export const iconData = {
  "id": "FusioPioneer",
  "name": "FusioPioneer",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 6.32 L 19.66 6.32 L 19.66 17.68 L 4.34 17.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 6.32 L 8.96 1.70 L 24.28 1.70 L 19.66 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 19.66 6.32 L 24.28 1.70 L 24.28 13.06 L 19.66 17.68"
      }
    ]
  ]
};

export const FusioPioneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 6.32 L 19.66 6.32 L 19.66 17.68 L 4.34 17.68 Z" />
      <path d="M 4.34 6.32 L 8.96 1.70 L 24.28 1.70 L 19.66 6.32" />
      <path d="M 19.66 6.32 L 24.28 1.70 L 24.28 13.06 L 19.66 17.68" />
      {children}
    </svg>
  );
});

export default FusioPioneer;
