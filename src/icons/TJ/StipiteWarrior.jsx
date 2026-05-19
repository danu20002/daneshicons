import React from 'react';

export const iconData = {
  "id": "StipiteWarrior",
  "name": "StipiteWarrior",
  "category": "TJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 9.13 a 8.13 2.4394947193648555 0 1 0 16.26 0 a 8.13 2.4394947193648555 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 14.87 a 8.13 2.4394947193648555 0 1 0 16.26 0 a 8.13 2.4394947193648555 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.31 4.53 A 2 2 0 0 0 16.31 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 16.31 4.53 A 2 2 0 0 1 16.31 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.53 A 2 2 0 0 0 7.69 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.53 A 2 2 0 0 1 7.69 19.47"
      }
    ]
  ]
};

export const StipiteWarrior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0" />
      <path d="M 3.87 9.13 a 8.13 2.4394947193648555 0 1 0 16.26 0 a 8.13 2.4394947193648555 0 1 0 -16.26 0" />
      <path d="M 3.87 14.87 a 8.13 2.4394947193648555 0 1 0 16.26 0 a 8.13 2.4394947193648555 0 1 0 -16.26 0" />
      <path d="M 16.31 4.53 A 2 2 0 0 0 16.31 19.47" />
      <path d="M 16.31 4.53 A 2 2 0 0 1 16.31 19.47" />
      <path d="M 7.69 4.53 A 2 2 0 0 0 7.69 19.47" />
      <path d="M 7.69 4.53 A 2 2 0 0 1 7.69 19.47" />
      {children}
    </svg>
  );
});

export default StipiteWarrior;
