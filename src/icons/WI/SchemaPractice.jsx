import React from 'react';

export const iconData = {
  "id": "SchemaPractice",
  "name": "SchemaPractice",
  "category": "WI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 6.24 L 19.14 6.24 L 19.14 17.76 L 4.86 17.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 6.24 L 8.15 2.95 L 22.43 2.95 L 19.14 6.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 6.24 L 22.43 2.95 L 22.43 14.47 L 19.14 17.76"
      }
    ]
  ]
};

export const SchemaPractice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 6.24 L 19.14 6.24 L 19.14 17.76 L 4.86 17.76 Z" />
      <path d="M 4.86 6.24 L 8.15 2.95 L 22.43 2.95 L 19.14 6.24" />
      <path d="M 19.14 6.24 L 22.43 2.95 L 22.43 14.47 L 19.14 17.76" />
      {children}
    </svg>
  );
});

export default SchemaPractice;
