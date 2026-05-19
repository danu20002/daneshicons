import React from 'react';

export const iconData = {
  "id": "GeoPseudo",
  "name": "GeoPseudo",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 7.72 L 16.27 13.36"
      }
    ],
    [
      "path",
      {
        "d": "M 18.35 19.93 L 17.39 3.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.87 9.90 Q 18.60 5.15 12.52 11.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.70 16.58 A 3.03 6.05 124 0 1 18.59 13.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 7.99 L 4.79 10.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 21.65 A 4.68 5.45 180 0 1 9.55 9.81"
      }
    ]
  ]
};

export const GeoPseudo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.61 7.72 L 16.27 13.36" />
      <path d="M 18.35 19.93 L 17.39 3.89" />
      <path d="M 14.87 9.90 Q 18.60 5.15 12.52 11.45" />
      <path d="M 15.70 16.58 A 3.03 6.05 124 0 1 18.59 13.01" />
      <path d="M 4.20 7.99 L 4.79 10.16" />
      <path d="M 3.22 21.65 A 4.68 5.45 180 0 1 9.55 9.81" />
      {children}
    </svg>
  );
});

export default GeoPseudo;
