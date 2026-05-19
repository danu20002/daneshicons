import React from 'react';

export const iconData = {
  "id": "OzoTrinket",
  "name": "OzoTrinket",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 6.15 L 20.14 6.15 L 20.14 17.85 L 3.86 17.85 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 6.15 L 7.14 2.87 L 23.42 2.87 L 20.14 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 6.15 L 23.42 2.87 L 23.42 14.57 L 20.14 17.85"
      }
    ]
  ]
};

export const OzoTrinket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 6.15 L 20.14 6.15 L 20.14 17.85 L 3.86 17.85 Z" />
      <path d="M 3.86 6.15 L 7.14 2.87 L 23.42 2.87 L 20.14 6.15" />
      <path d="M 20.14 6.15 L 23.42 2.87 L 23.42 14.57 L 20.14 17.85" />
      {children}
    </svg>
  );
});

export default OzoTrinket;
