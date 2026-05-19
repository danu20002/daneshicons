import React from 'react';

export const iconData = {
  "id": "ViragoLazy",
  "name": "ViragoLazy",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.81 12.00 a 9.19 9.19 0 1 0 18.38 0 a 9.19 9.19 0 1 0 -18.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 6.48 a 7.35 2.2060427563637495 0 1 0 14.71 0 a 7.35 2.2060427563637495 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 10.16 a 9.01 2.701839551927067 0 1 0 18.01 0 a 9.01 2.701839551927067 0 1 0 -18.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 13.84 a 9.01 2.701839551927067 0 1 0 18.01 0 a 9.01 2.701839551927067 0 1 0 -18.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.65 17.52 a 7.35 2.20604275636375 0 1 0 14.71 0 a 7.35 2.20604275636375 0 1 0 -14.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.04 A 2 2 0 0 0 16.60 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 4.04 A 2 2 0 0 1 16.60 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.04 A 2 2 0 0 0 7.40 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.04 A 2 2 0 0 1 7.40 19.96"
      }
    ]
  ]
};

export const ViragoLazy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.81 12.00 a 9.19 9.19 0 1 0 18.38 0 a 9.19 9.19 0 1 0 -18.38 0" />
      <path d="M 4.65 6.48 a 7.35 2.2060427563637495 0 1 0 14.71 0 a 7.35 2.2060427563637495 0 1 0 -14.71 0" />
      <path d="M 2.99 10.16 a 9.01 2.701839551927067 0 1 0 18.01 0 a 9.01 2.701839551927067 0 1 0 -18.01 0" />
      <path d="M 2.99 13.84 a 9.01 2.701839551927067 0 1 0 18.01 0 a 9.01 2.701839551927067 0 1 0 -18.01 0" />
      <path d="M 4.65 17.52 a 7.35 2.20604275636375 0 1 0 14.71 0 a 7.35 2.20604275636375 0 1 0 -14.71 0" />
      <path d="M 16.60 4.04 A 2 2 0 0 0 16.60 19.96" />
      <path d="M 16.60 4.04 A 2 2 0 0 1 16.60 19.96" />
      <path d="M 7.40 4.04 A 2 2 0 0 0 7.40 19.96" />
      <path d="M 7.40 4.04 A 2 2 0 0 1 7.40 19.96" />
      {children}
    </svg>
  );
});

export default ViragoLazy;
