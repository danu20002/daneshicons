import React from 'react';

export const iconData = {
  "id": "PaleoChamp",
  "name": "PaleoChamp",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.36 5.32 L 20.64 5.32 L 20.64 18.68 L 3.36 18.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.36 5.32 L 7.36 1.32 L 24.65 1.32 L 20.64 5.32"
      }
    ],
    [
      "path",
      {
        "d": "M 20.64 5.32 L 24.65 1.32 L 24.65 14.67 L 20.64 18.68"
      }
    ]
  ]
};

export const PaleoChamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.36 5.32 L 20.64 5.32 L 20.64 18.68 L 3.36 18.68 Z" />
      <path d="M 3.36 5.32 L 7.36 1.32 L 24.65 1.32 L 20.64 5.32" />
      <path d="M 20.64 5.32 L 24.65 1.32 L 24.65 14.67 L 20.64 18.68" />
      {children}
    </svg>
  );
});

export default PaleoChamp;
