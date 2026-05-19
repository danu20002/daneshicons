import React from 'react';

export const iconData = {
  "id": "OctoGlove",
  "name": "OctoGlove",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 5.28 L 20.69 5.28 L 20.69 18.72 L 3.31 18.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 5.28 L 6.76 1.84 L 24.13 1.84 L 20.69 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 20.69 5.28 L 24.13 1.84 L 24.13 15.27 L 20.69 18.72"
      }
    ]
  ]
};

export const OctoGlove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 5.28 L 20.69 5.28 L 20.69 18.72 L 3.31 18.72 Z" />
      <path d="M 3.31 5.28 L 6.76 1.84 L 24.13 1.84 L 20.69 5.28" />
      <path d="M 20.69 5.28 L 24.13 1.84 L 24.13 15.27 L 20.69 18.72" />
      {children}
    </svg>
  );
});

export default OctoGlove;
