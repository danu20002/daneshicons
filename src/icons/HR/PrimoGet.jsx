import React from 'react';

export const iconData = {
  "id": "PrimoGet",
  "name": "PrimoGet",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.55 12.00 a 9.45 9.45 0 1 0 18.89 0 a 9.45 9.45 0 1 0 -18.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 7.28 a 8.18 2.454238945532266 0 1 0 16.36 0 a 8.18 2.454238945532266 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 12.00 a 9.45 2.8339110317174345 0 1 0 18.89 0 a 9.45 2.8339110317174345 0 1 0 -18.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 16.72 a 8.18 2.454238945532266 0 1 0 16.36 0 a 8.18 2.454238945532266 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.72 3.82 A 2 2 0 0 0 16.72 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 16.72 3.82 A 2 2 0 0 1 16.72 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 3.82 A 2 2 0 0 0 7.28 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 3.82 A 2 2 0 0 1 7.28 20.18"
      }
    ]
  ]
};

export const PrimoGet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.55 12.00 a 9.45 9.45 0 1 0 18.89 0 a 9.45 9.45 0 1 0 -18.89 0" />
      <path d="M 3.82 7.28 a 8.18 2.454238945532266 0 1 0 16.36 0 a 8.18 2.454238945532266 0 1 0 -16.36 0" />
      <path d="M 2.55 12.00 a 9.45 2.8339110317174345 0 1 0 18.89 0 a 9.45 2.8339110317174345 0 1 0 -18.89 0" />
      <path d="M 3.82 16.72 a 8.18 2.454238945532266 0 1 0 16.36 0 a 8.18 2.454238945532266 0 1 0 -16.36 0" />
      <path d="M 16.72 3.82 A 2 2 0 0 0 16.72 20.18" />
      <path d="M 16.72 3.82 A 2 2 0 0 1 16.72 20.18" />
      <path d="M 7.28 3.82 A 2 2 0 0 0 7.28 20.18" />
      <path d="M 7.28 3.82 A 2 2 0 0 1 7.28 20.18" />
      {children}
    </svg>
  );
});

export default PrimoGet;
