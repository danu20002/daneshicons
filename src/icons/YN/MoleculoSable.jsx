import React from 'react';

export const iconData = {
  "id": "MoleculoSable",
  "name": "MoleculoSable",
  "category": "YN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.80 L 19.29 5.80 L 19.29 18.20 L 4.71 18.20 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.80 L 7.97 2.54 L 22.55 2.54 L 19.29 5.80"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.80 L 22.55 2.54 L 22.55 14.94 L 19.29 18.20"
      }
    ]
  ]
};

export const MoleculoSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.80 L 19.29 5.80 L 19.29 18.20 L 4.71 18.20 Z" />
      <path d="M 4.71 5.80 L 7.97 2.54 L 22.55 2.54 L 19.29 5.80" />
      <path d="M 19.29 5.80 L 22.55 2.54 L 22.55 14.94 L 19.29 18.20" />
      {children}
    </svg>
  );
});

export default MoleculoSable;
