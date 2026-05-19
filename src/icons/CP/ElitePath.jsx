import React from 'react';

export const iconData = {
  "id": "ElitePath",
  "name": "ElitePath",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.07 5.30 L 19.93 5.30 L 19.93 18.70 L 4.07 18.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 5.30 L 7.74 1.64 L 23.59 1.64 L 19.93 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 5.30 L 23.59 1.64 L 23.59 15.03 L 19.93 18.70"
      }
    ]
  ]
};

export const ElitePath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.07 5.30 L 19.93 5.30 L 19.93 18.70 L 4.07 18.70 Z" />
      <path d="M 4.07 5.30 L 7.74 1.64 L 23.59 1.64 L 19.93 5.30" />
      <path d="M 19.93 5.30 L 23.59 1.64 L 23.59 15.03 L 19.93 18.70" />
      {children}
    </svg>
  );
});

export default ElitePath;
