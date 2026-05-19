import React from 'react';

export const iconData = {
  "id": "TaxoJoin",
  "name": "TaxoJoin",
  "category": "LJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 6.95 L 19.20 6.95 L 19.20 17.05 L 4.80 17.05 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.80 6.95 L 8.10 3.65 L 22.50 3.65 L 19.20 6.95"
      }
    ],
    [
      "path",
      {
        "d": "M 19.20 6.95 L 22.50 3.65 L 22.50 13.75 L 19.20 17.05"
      }
    ]
  ]
};

export const TaxoJoin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 6.95 L 19.20 6.95 L 19.20 17.05 L 4.80 17.05 Z" />
      <path d="M 4.80 6.95 L 8.10 3.65 L 22.50 3.65 L 19.20 6.95" />
      <path d="M 19.20 6.95 L 22.50 3.65 L 22.50 13.75 L 19.20 17.05" />
      {children}
    </svg>
  );
});

export default TaxoJoin;
