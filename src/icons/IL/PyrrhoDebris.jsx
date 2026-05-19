import React from 'react';

export const iconData = {
  "id": "PyrrhoDebris",
  "name": "PyrrhoDebris",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.55 5.12 L 19.45 5.12 L 19.45 18.88 L 4.55 18.88 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 5.12 L 9.29 0.38 L 24.20 0.38 L 19.45 5.12"
      }
    ],
    [
      "path",
      {
        "d": "M 19.45 5.12 L 24.20 0.38 L 24.20 14.13 L 19.45 18.88"
      }
    ]
  ]
};

export const PyrrhoDebris = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.55 5.12 L 19.45 5.12 L 19.45 18.88 L 4.55 18.88 Z" />
      <path d="M 4.55 5.12 L 9.29 0.38 L 24.20 0.38 L 19.45 5.12" />
      <path d="M 19.45 5.12 L 24.20 0.38 L 24.20 14.13 L 19.45 18.88" />
      {children}
    </svg>
  );
});

export default PyrrhoDebris;
