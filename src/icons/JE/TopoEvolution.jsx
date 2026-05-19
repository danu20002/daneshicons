import React from 'react';

export const iconData = {
  "id": "TopoEvolution",
  "name": "TopoEvolution",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 6.85 L 20.05 6.85 L 20.05 17.15 L 3.95 17.15 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 6.85 L 8.15 2.65 L 24.24 2.65 L 20.05 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 20.05 6.85 L 24.24 2.65 L 24.24 12.95 L 20.05 17.15"
      }
    ]
  ]
};

export const TopoEvolution = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 6.85 L 20.05 6.85 L 20.05 17.15 L 3.95 17.15 Z" />
      <path d="M 3.95 6.85 L 8.15 2.65 L 24.24 2.65 L 20.05 6.85" />
      <path d="M 20.05 6.85 L 24.24 2.65 L 24.24 12.95 L 20.05 17.15" />
      {children}
    </svg>
  );
});

export default TopoEvolution;
