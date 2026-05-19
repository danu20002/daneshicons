import React from 'react';

export const iconData = {
  "id": "GravitoDrive",
  "name": "GravitoDrive",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 8.77 L 11.92 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 10.55 A 5.89 6.85 38 0 0 3.82 19.45"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 2.13 L 5.16 11.56"
      }
    ],
    [
      "path",
      {
        "d": "M 14.17 9.92 A 2.37 6.72 64 0 1 15.96 14.20"
      }
    ]
  ]
};

export const GravitoDrive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 8.77 L 11.92 18.08" />
      <path d="M 5.69 10.55 A 5.89 6.85 38 0 0 3.82 19.45" />
      <path d="M 7.66 2.13 L 5.16 11.56" />
      <path d="M 14.17 9.92 A 2.37 6.72 64 0 1 15.96 14.20" />
      {children}
    </svg>
  );
});

export default GravitoDrive;
