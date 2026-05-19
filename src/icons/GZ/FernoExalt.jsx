import React from 'react';

export const iconData = {
  "id": "FernoExalt",
  "name": "FernoExalt",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 5.05 L 19.78 5.05 L 19.78 18.95 L 4.22 18.95 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 5.05 L 8.32 0.95 L 23.89 0.95 L 19.78 5.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.78 5.05 L 23.89 0.95 L 23.89 14.84 L 19.78 18.95"
      }
    ]
  ]
};

export const FernoExalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 5.05 L 19.78 5.05 L 19.78 18.95 L 4.22 18.95 Z" />
      <path d="M 4.22 5.05 L 8.32 0.95 L 23.89 0.95 L 19.78 5.05" />
      <path d="M 19.78 5.05 L 23.89 0.95 L 23.89 14.84 L 19.78 18.95" />
      {children}
    </svg>
  );
});

export default FernoExalt;
