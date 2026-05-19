import React from 'react';

export const iconData = {
  "id": "TurbinoTeeth",
  "name": "TurbinoTeeth",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 12.00 a 3.61 3.61 0 1 0 7.22 0 a 3.61 3.61 0 1 0 -7.22 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0"
      }
    ]
  ]
};

export const TurbinoTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" />
      <path d="M 8.39 12.00 a 3.61 3.61 0 1 0 7.22 0 a 3.61 3.61 0 1 0 -7.22 0" stroke-dasharray="4 1" />
      <path d="M 6.68 12.00 a 5.32 5.32 0 1 0 10.65 0 a 5.32 5.32 0 1 0 -10.65 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 0 14.36 0 a 7.18 7.18 0 1 0 -14.36 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" />
      {children}
    </svg>
  );
});

export default TurbinoTeeth;
