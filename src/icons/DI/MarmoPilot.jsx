import React from 'react';

export const iconData = {
  "id": "MarmoPilot",
  "name": "MarmoPilot",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 6.15 L 19.17 6.15 L 19.17 17.85 L 4.83 17.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 6.15 L 9.60 1.38 L 23.94 1.38 L 19.17 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 6.15 L 23.94 1.38 L 23.94 13.08 L 19.17 17.85"
      }
    ]
  ]
};

export const MarmoPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 6.15 L 19.17 6.15 L 19.17 17.85 L 4.83 17.85 Z" />
      <path d="M 4.83 6.15 L 9.60 1.38 L 23.94 1.38 L 19.17 6.15" />
      <path d="M 19.17 6.15 L 23.94 1.38 L 23.94 13.08 L 19.17 17.85" />
      {children}
    </svg>
  );
});

export default MarmoPilot;
