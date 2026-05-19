import React from 'react';

export const iconData = {
  "id": "EvolErect",
  "name": "EvolErect",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 5.81 L 19.05 5.81 L 19.05 18.19 L 4.95 18.19 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 5.81 L 9.61 1.16 L 23.70 1.16 L 19.05 5.81"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 5.81 L 23.70 1.16 L 23.70 13.53 L 19.05 18.19"
      }
    ]
  ]
};

export const EvolErect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 5.81 L 19.05 5.81 L 19.05 18.19 L 4.95 18.19 Z" />
      <path d="M 4.95 5.81 L 9.61 1.16 L 23.70 1.16 L 19.05 5.81" />
      <path d="M 19.05 5.81 L 23.70 1.16 L 23.70 13.53 L 19.05 18.19" />
      {children}
    </svg>
  );
});

export default EvolErect;
