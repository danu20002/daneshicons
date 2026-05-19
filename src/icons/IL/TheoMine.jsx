import React from 'react';

export const iconData = {
  "id": "TheoMine",
  "name": "TheoMine",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 6.01 L 19.80 6.01 L 19.80 17.99 L 4.20 17.99 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 6.01 L 7.33 2.88 L 22.94 2.88 L 19.80 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 19.80 6.01 L 22.94 2.88 L 22.94 14.86 L 19.80 17.99"
      }
    ]
  ]
};

export const TheoMine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 6.01 L 19.80 6.01 L 19.80 17.99 L 4.20 17.99 Z" />
      <path d="M 4.20 6.01 L 7.33 2.88 L 22.94 2.88 L 19.80 6.01" />
      <path d="M 19.80 6.01 L 22.94 2.88 L 22.94 14.86 L 19.80 17.99" />
      {children}
    </svg>
  );
});

export default TheoMine;
