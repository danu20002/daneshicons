import React from 'react';

export const iconData = {
  "id": "ToloPremier",
  "name": "ToloPremier",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 12.00 a 4.17 4.17 0 1 0 8.33 0 a 4.17 4.17 0 1 0 -8.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 12.00 a 6.08 6.08 0 1 0 12.15 0 a 6.08 6.08 0 1 0 -12.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const ToloPremier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.87 0 a 2.44 2.44 0 1 0 -4.87 0" />
      <path d="M 7.83 12.00 a 4.17 4.17 0 1 0 8.33 0 a 4.17 4.17 0 1 0 -8.33 0" />
      <path d="M 5.92 12.00 a 6.08 6.08 0 1 0 12.15 0 a 6.08 6.08 0 1 0 -12.15 0" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default ToloPremier;
