import React from 'react';

export const iconData = {
  "id": "SuperImagine",
  "name": "SuperImagine",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 5.18 L 20.65 5.18 L 20.65 18.82 L 3.35 18.82 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 5.18 L 6.45 2.08 L 23.76 2.08 L 20.65 5.18"
      }
    ],
    [
      "path",
      {
        "d": "M 20.65 5.18 L 23.76 2.08 L 23.76 15.72 L 20.65 18.82"
      }
    ]
  ]
};

export const SuperImagine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 5.18 L 20.65 5.18 L 20.65 18.82 L 3.35 18.82 Z" />
      <path d="M 3.35 5.18 L 6.45 2.08 L 23.76 2.08 L 20.65 5.18" />
      <path d="M 20.65 5.18 L 23.76 2.08 L 23.76 15.72 L 20.65 18.82" />
      {children}
    </svg>
  );
});

export default SuperImagine;
