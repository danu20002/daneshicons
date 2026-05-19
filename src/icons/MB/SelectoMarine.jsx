import React from 'react';

export const iconData = {
  "id": "SelectoMarine",
  "name": "SelectoMarine",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 12.00 a 9.11 9.11 0 1 0 18.23 0 a 9.11 9.11 0 1 0 -18.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 8.96 a 8.59 2.57780676784931 0 1 0 17.19 0 a 8.59 2.57780676784931 0 1 0 -17.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 15.04 a 8.59 2.57780676784931 0 1 0 17.19 0 a 8.59 2.57780676784931 0 1 0 -17.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.44 5.56 A 2 2 0 0 0 18.44 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 18.44 5.56 A 2 2 0 0 1 18.44 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.89 A 2 2 0 0 0 12.00 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.89 A 2 2 0 0 1 12.00 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 5.56 A 2 2 0 0 0 5.56 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 5.56 A 2 2 0 0 1 5.56 18.44"
      }
    ]
  ]
};

export const SelectoMarine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 12.00 a 9.11 9.11 0 1 0 18.23 0 a 9.11 9.11 0 1 0 -18.23 0" />
      <path d="M 3.41 8.96 a 8.59 2.57780676784931 0 1 0 17.19 0 a 8.59 2.57780676784931 0 1 0 -17.19 0" />
      <path d="M 3.41 15.04 a 8.59 2.57780676784931 0 1 0 17.19 0 a 8.59 2.57780676784931 0 1 0 -17.19 0" />
      <path d="M 18.44 5.56 A 2 2 0 0 0 18.44 18.44" />
      <path d="M 18.44 5.56 A 2 2 0 0 1 18.44 18.44" />
      <path d="M 12.00 2.89 A 2 2 0 0 0 12.00 21.11" />
      <path d="M 12.00 2.89 A 2 2 0 0 1 12.00 21.11" />
      <path d="M 5.56 5.56 A 2 2 0 0 0 5.56 18.44" />
      <path d="M 5.56 5.56 A 2 2 0 0 1 5.56 18.44" />
      {children}
    </svg>
  );
});

export default SelectoMarine;
