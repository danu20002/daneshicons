import React from 'react';

export const iconData = {
  "id": "TomboGod",
  "name": "TomboGod",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 12.00 a 4.24 4.24 0 1 0 8.47 0 a 4.24 4.24 0 1 0 -8.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.76 12.00 a 6.24 6.24 0 1 0 12.48 0 a 6.24 6.24 0 1 0 -12.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0"
      }
    ]
  ]
};

export const TomboGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0" />
      <path d="M 7.76 12.00 a 4.24 4.24 0 1 0 8.47 0 a 4.24 4.24 0 1 0 -8.47 0" />
      <path d="M 5.76 12.00 a 6.24 6.24 0 1 0 12.48 0 a 6.24 6.24 0 1 0 -12.48 0" />
      <path d="M 3.68 12.00 a 8.32 8.32 0 1 0 16.64 0 a 8.32 8.32 0 1 0 -16.64 0" />
      {children}
    </svg>
  );
});

export default TomboGod;
