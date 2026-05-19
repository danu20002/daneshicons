import React from 'react';

export const iconData = {
  "id": "TisicoReed",
  "name": "TisicoReed",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.41 9.02 C 12.68 11.21, 13.79 9.11, 14.25 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 3.84 3.51 C 12.94 14.97, 8.40 16.33, 14.05 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.24 6.28 C 5.55 12.93, 9.08 19.04, 19.13 17.21"
      }
    ]
  ]
};

export const TisicoReed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.41 9.02 C 12.68 11.21, 13.79 9.11, 14.25 17.32" />
      <path d="M 3.84 3.51 C 12.94 14.97, 8.40 16.33, 14.05 17.98" />
      <path d="M 8.24 6.28 C 5.55 12.93, 9.08 19.04, 19.13 17.21" />
      {children}
    </svg>
  );
});

export default TisicoReed;
