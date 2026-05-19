import React from 'react';

export const iconData = {
  "id": "VisieraMetal",
  "name": "VisieraMetal",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 5.18 L 20.72 5.18 L 20.72 18.82 L 3.28 18.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 5.18 L 7.79 0.67 L 25.22 0.67 L 20.72 5.18"
      }
    ],
    [
      "path",
      {
        "d": "M 20.72 5.18 L 25.22 0.67 L 25.22 14.32 L 20.72 18.82"
      }
    ]
  ]
};

export const VisieraMetal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 5.18 L 20.72 5.18 L 20.72 18.82 L 3.28 18.82 Z" />
      <path d="M 3.28 5.18 L 7.79 0.67 L 25.22 0.67 L 20.72 5.18" />
      <path d="M 20.72 5.18 L 25.22 0.67 L 25.22 14.32 L 20.72 18.82" />
      {children}
    </svg>
  );
});

export default VisieraMetal;
