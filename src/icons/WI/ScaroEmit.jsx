import React from 'react';

export const iconData = {
  "id": "ScaroEmit",
  "name": "ScaroEmit",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 5.05 L 20.65 5.05 L 20.65 18.95 L 3.35 18.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 5.05 L 7.90 0.50 L 25.20 0.50 L 20.65 5.05"
      }
    ],
    [
      "path",
      {
        "d": "M 20.65 5.05 L 25.20 0.50 L 25.20 14.41 L 20.65 18.95"
      }
    ]
  ]
};

export const ScaroEmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 5.05 L 20.65 5.05 L 20.65 18.95 L 3.35 18.95 Z" />
      <path d="M 3.35 5.05 L 7.90 0.50 L 25.20 0.50 L 20.65 5.05" />
      <path d="M 20.65 5.05 L 25.20 0.50 L 25.20 14.41 L 20.65 18.95" />
      {children}
    </svg>
  );
});

export default ScaroEmit;
