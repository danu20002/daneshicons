import React from 'react';

export const iconData = {
  "id": "ProtoDove",
  "name": "ProtoDove",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 5.85 L 20.95 5.85 L 20.95 18.15 L 3.05 18.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 5.85 L 6.67 2.23 L 24.58 2.23 L 20.95 5.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.95 5.85 L 24.58 2.23 L 24.58 14.52 L 20.95 18.15"
      }
    ]
  ]
};

export const ProtoDove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 5.85 L 20.95 5.85 L 20.95 18.15 L 3.05 18.15 Z" />
      <path d="M 3.05 5.85 L 6.67 2.23 L 24.58 2.23 L 20.95 5.85" />
      <path d="M 20.95 5.85 L 24.58 2.23 L 24.58 14.52 L 20.95 18.15" />
      {children}
    </svg>
  );
});

export default ProtoDove;
