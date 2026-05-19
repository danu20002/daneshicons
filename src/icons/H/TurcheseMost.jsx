import React from 'react';

export const iconData = {
  "id": "TurcheseMost",
  "name": "TurcheseMost",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 3.30 C 17.56 17.35, 9.29 6.81, 15.62 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 8.16 C 8.09 16.51, 14.09 10.76, 15.48 19.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 6.36 C 14.54 6.85, 15.17 15.31, 16.44 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 6.13 C 4.91 12.21, 14.96 6.36, 16.14 16.80"
      }
    ]
  ]
};

export const TurcheseMost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 3.30 C 17.56 17.35, 9.29 6.81, 15.62 14.65" />
      <path d="M 6.68 8.16 C 8.09 16.51, 14.09 10.76, 15.48 19.34" />
      <path d="M 6.26 6.36 C 14.54 6.85, 15.17 15.31, 16.44 18.79" />
      <path d="M 6.09 6.13 C 4.91 12.21, 14.96 6.36, 16.14 16.80" />
      {children}
    </svg>
  );
});

export default TurcheseMost;
