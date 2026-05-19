import React from 'react';

export const iconData = {
  "id": "TroficoMule",
  "name": "TroficoMule",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 6.29 L 20.65 6.29 L 20.65 17.71 L 3.35 17.71 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 6.29 L 7.31 2.33 L 24.60 2.33 L 20.65 6.29"
      }
    ],
    [
      "path",
      {
        "d": "M 20.65 6.29 L 24.60 2.33 L 24.60 13.75 L 20.65 17.71"
      }
    ]
  ]
};

export const TroficoMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 6.29 L 20.65 6.29 L 20.65 17.71 L 3.35 17.71 Z" />
      <path d="M 3.35 6.29 L 7.31 2.33 L 24.60 2.33 L 20.65 6.29" />
      <path d="M 20.65 6.29 L 24.60 2.33 L 24.60 13.75 L 20.65 17.71" />
      {children}
    </svg>
  );
});

export default TroficoMule;
