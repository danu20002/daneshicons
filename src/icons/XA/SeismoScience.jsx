import React from 'react';

export const iconData = {
  "id": "SeismoScience",
  "name": "SeismoScience",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 9.44 0 1 0 18.89 0 a 9.44 9.44 0 1 0 -18.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 12.00 a 9.44 2.8329656696878374 0 1 0 18.89 0 a 9.44 2.8329656696878374 0 1 0 -18.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 0 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 18.68 5.32 A 2 2 0 0 1 18.68 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 0 12.00 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.56 A 2 2 0 0 1 12.00 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 0 5.32 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.32 5.32 A 2 2 0 0 1 5.32 18.68"
      }
    ]
  ]
};

export const SeismoScience = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.56 12.00 a 9.44 9.44 0 1 0 18.89 0 a 9.44 9.44 0 1 0 -18.89 0" />
      <path d="M 2.56 12.00 a 9.44 2.8329656696878374 0 1 0 18.89 0 a 9.44 2.8329656696878374 0 1 0 -18.89 0" />
      <path d="M 18.68 5.32 A 2 2 0 0 0 18.68 18.68" />
      <path d="M 18.68 5.32 A 2 2 0 0 1 18.68 18.68" />
      <path d="M 12.00 2.56 A 2 2 0 0 0 12.00 21.44" />
      <path d="M 12.00 2.56 A 2 2 0 0 1 12.00 21.44" />
      <path d="M 5.32 5.32 A 2 2 0 0 0 5.32 18.68" />
      <path d="M 5.32 5.32 A 2 2 0 0 1 5.32 18.68" />
      {children}
    </svg>
  );
});

export default SeismoScience;
