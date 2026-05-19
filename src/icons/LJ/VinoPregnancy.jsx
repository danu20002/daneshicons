import React from 'react';

export const iconData = {
  "id": "VinoPregnancy",
  "name": "VinoPregnancy",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 5.28 L 19.84 5.28 L 19.84 18.72 L 4.16 18.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 5.28 L 7.89 1.55 L 23.57 1.55 L 19.84 5.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 5.28 L 23.57 1.55 L 23.57 14.99 L 19.84 18.72"
      }
    ]
  ]
};

export const VinoPregnancy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 5.28 L 19.84 5.28 L 19.84 18.72 L 4.16 18.72 Z" />
      <path d="M 4.16 5.28 L 7.89 1.55 L 23.57 1.55 L 19.84 5.28" />
      <path d="M 19.84 5.28 L 23.57 1.55 L 23.57 14.99 L 19.84 18.72" />
      {children}
    </svg>
  );
});

export default VinoPregnancy;
