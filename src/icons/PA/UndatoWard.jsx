import React from 'react';

export const iconData = {
  "id": "UndatoWard",
  "name": "UndatoWard",
  "category": "PA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 6.28 L 19.87 6.28 L 19.87 17.72 L 4.13 17.72 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 6.28 L 8.67 1.74 L 24.42 1.74 L 19.87 6.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.87 6.28 L 24.42 1.74 L 24.42 13.18 L 19.87 17.72"
      }
    ]
  ]
};

export const UndatoWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 6.28 L 19.87 6.28 L 19.87 17.72 L 4.13 17.72 Z" />
      <path d="M 4.13 6.28 L 8.67 1.74 L 24.42 1.74 L 19.87 6.28" />
      <path d="M 19.87 6.28 L 24.42 1.74 L 24.42 13.18 L 19.87 17.72" />
      {children}
    </svg>
  );
});

export default UndatoWard;
