import React from 'react';

export const iconData = {
  "id": "NucleoSmoke",
  "name": "NucleoSmoke",
  "category": "RY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 6.83 L 20.81 6.83 L 20.81 17.17 L 3.19 17.17 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.19 6.83 L 7.43 2.58 L 25.06 2.58 L 20.81 6.83"
      }
    ],
    [
      "path",
      {
        "d": "M 20.81 6.83 L 25.06 2.58 L 25.06 12.92 L 20.81 17.17"
      }
    ]
  ]
};

export const NucleoSmoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 6.83 L 20.81 6.83 L 20.81 17.17 L 3.19 17.17 Z" />
      <path d="M 3.19 6.83 L 7.43 2.58 L 25.06 2.58 L 20.81 6.83" />
      <path d="M 20.81 6.83 L 25.06 2.58 L 25.06 12.92 L 20.81 17.17" />
      {children}
    </svg>
  );
});

export default NucleoSmoke;
