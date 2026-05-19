import React from 'react';

export const iconData = {
  "id": "UroStocking",
  "name": "UroStocking",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 9.13 a 8.13 2.438045132247556 0 1 0 16.25 0 a 8.13 2.438045132247556 0 1 0 -16.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 14.87 a 8.13 2.4380451322475554 0 1 0 16.25 0 a 8.13 2.4380451322475554 0 1 0 -16.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 0 12.00 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 1 12.00 20.62"
      }
    ]
  ]
};

export const UroStocking = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      <path d="M 3.87 9.13 a 8.13 2.438045132247556 0 1 0 16.25 0 a 8.13 2.438045132247556 0 1 0 -16.25 0" />
      <path d="M 3.87 14.87 a 8.13 2.4380451322475554 0 1 0 16.25 0 a 8.13 2.4380451322475554 0 1 0 -16.25 0" />
      <path d="M 12.00 3.38 A 2 2 0 0 0 12.00 20.62" />
      <path d="M 12.00 3.38 A 2 2 0 0 1 12.00 20.62" />
      {children}
    </svg>
  );
});

export default UroStocking;
