import React from 'react';

export const iconData = {
  "id": "OlivoMeal",
  "name": "OlivoMeal",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.41 12.00 a 9.59 9.59 0 1 0 19.18 0 a 9.59 9.59 0 1 0 -19.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.41 12.00 a 9.59 2.8774874904658643 0 1 0 19.18 0 a 9.59 2.8774874904658643 0 1 0 -19.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 5.22 A 2 2 0 0 0 18.78 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.78 5.22 A 2 2 0 0 1 18.78 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.41 A 2 2 0 0 0 12.00 21.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.41 A 2 2 0 0 1 12.00 21.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 5.22 A 2 2 0 0 0 5.22 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 5.22 A 2 2 0 0 1 5.22 18.78"
      }
    ]
  ]
};

export const OlivoMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.41 12.00 a 9.59 9.59 0 1 0 19.18 0 a 9.59 9.59 0 1 0 -19.18 0" />
      <path d="M 2.41 12.00 a 9.59 2.8774874904658643 0 1 0 19.18 0 a 9.59 2.8774874904658643 0 1 0 -19.18 0" />
      <path d="M 18.78 5.22 A 2 2 0 0 0 18.78 18.78" />
      <path d="M 18.78 5.22 A 2 2 0 0 1 18.78 18.78" />
      <path d="M 12.00 2.41 A 2 2 0 0 0 12.00 21.59" />
      <path d="M 12.00 2.41 A 2 2 0 0 1 12.00 21.59" />
      <path d="M 5.22 5.22 A 2 2 0 0 0 5.22 18.78" />
      <path d="M 5.22 5.22 A 2 2 0 0 1 5.22 18.78" />
      {children}
    </svg>
  );
});

export default OlivoMeal;
