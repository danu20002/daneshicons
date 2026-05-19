import React from 'react';

export const iconData = {
  "id": "ForgeWar",
  "name": "ForgeWar",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 13.31 L 6.19 19.44 L 8.46 3.25 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 14.61 L 6.81 15.76 L 11.34 5.63 Z"
      }
    ]
  ]
};

export const ForgeWar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 13.31 L 6.19 19.44 L 8.46 3.25 Z" />
      <path d="M 17.85 14.61 L 6.81 15.76 L 11.34 5.63 Z" />
      {children}
    </svg>
  );
});

export default ForgeWar;
