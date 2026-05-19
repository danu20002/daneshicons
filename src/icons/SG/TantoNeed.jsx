import React from 'react';

export const iconData = {
  "id": "TantoNeed",
  "name": "TantoNeed",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.89 0 a 2.44 2.44 0 1 0 -4.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 12.00 a 4.12 4.12 0 1 0 8.24 0 a 4.12 4.12 0 1 0 -8.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0"
      }
    ]
  ]
};

export const TantoNeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.89 0 a 2.44 2.44 0 1 0 -4.89 0" />
      <path d="M 7.88 12.00 a 4.12 4.12 0 1 0 8.24 0 a 4.12 4.12 0 1 0 -8.24 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0" />
      {children}
    </svg>
  );
});

export default TantoNeed;
