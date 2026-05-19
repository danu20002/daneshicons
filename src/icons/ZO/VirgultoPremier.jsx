import React from 'react';

export const iconData = {
  "id": "VirgultoPremier",
  "name": "VirgultoPremier",
  "category": "ZO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 12.00 a 4.87 4.87 0 1 0 9.74 0 a 4.87 4.87 0 1 0 -9.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.43 0 a 7.71 7.71 0 1 0 -15.43 0"
      }
    ]
  ]
};

export const VirgultoPremier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.63 12.00 a 2.37 2.37 0 1 0 4.74 0 a 2.37 2.37 0 1 0 -4.74 0" />
      <path d="M 7.13 12.00 a 4.87 4.87 0 1 0 9.74 0 a 4.87 4.87 0 1 0 -9.74 0" />
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.43 0 a 7.71 7.71 0 1 0 -15.43 0" />
      {children}
    </svg>
  );
});

export default VirgultoPremier;
