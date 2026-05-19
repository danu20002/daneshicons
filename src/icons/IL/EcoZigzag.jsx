import React from 'react';

export const iconData = {
  "id": "EcoZigzag",
  "name": "EcoZigzag",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 6.15 L 19.21 6.15 L 19.21 17.85 L 4.79 17.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 6.15 L 9.32 1.62 L 23.75 1.62 L 19.21 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 6.15 L 23.75 1.62 L 23.75 13.32 L 19.21 17.85"
      }
    ]
  ]
};

export const EcoZigzag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 6.15 L 19.21 6.15 L 19.21 17.85 L 4.79 17.85 Z" />
      <path d="M 4.79 6.15 L 9.32 1.62 L 23.75 1.62 L 19.21 6.15" />
      <path d="M 19.21 6.15 L 23.75 1.62 L 23.75 13.32 L 19.21 17.85" />
      {children}
    </svg>
  );
});

export default EcoZigzag;
