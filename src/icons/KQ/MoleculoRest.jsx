import React from 'react';

export const iconData = {
  "id": "MoleculoRest",
  "name": "MoleculoRest",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 6.75 L 20.19 6.75 L 20.19 17.25 L 3.81 17.25 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.81 6.75 L 7.34 3.22 L 23.72 3.22 L 20.19 6.75"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 6.75 L 23.72 3.22 L 23.72 13.72 L 20.19 17.25"
      }
    ]
  ]
};

export const MoleculoRest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 6.75 L 20.19 6.75 L 20.19 17.25 L 3.81 17.25 Z" />
      <path d="M 3.81 6.75 L 7.34 3.22 L 23.72 3.22 L 20.19 6.75" />
      <path d="M 20.19 6.75 L 23.72 3.22 L 23.72 13.72 L 20.19 17.25" />
      {children}
    </svg>
  );
});

export default MoleculoRest;
