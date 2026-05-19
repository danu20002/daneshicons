import React from 'react';

export const iconData = {
  "id": "FiberSkull",
  "name": "FiberSkull",
  "category": "HR",
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
        "d": "M 3.41 8.96 a 8.59 2.577891249231517 0 1 0 17.19 0 a 8.59 2.577891249231517 0 1 0 -17.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 15.04 a 8.59 2.577891249231517 0 1 0 17.19 0 a 8.59 2.577891249231517 0 1 0 -17.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.56 4.11 A 2 2 0 0 0 16.56 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 16.56 4.11 A 2 2 0 0 1 16.56 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 4.11 A 2 2 0 0 0 7.44 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 4.11 A 2 2 0 0 1 7.44 19.89"
      }
    ]
  ]
};

export const FiberSkull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 8.96 a 8.59 2.577891249231517 0 1 0 17.19 0 a 8.59 2.577891249231517 0 1 0 -17.19 0" />
      <path d="M 3.41 15.04 a 8.59 2.577891249231517 0 1 0 17.19 0 a 8.59 2.577891249231517 0 1 0 -17.19 0" />
      <path d="M 16.56 4.11 A 2 2 0 0 0 16.56 19.89" />
      <path d="M 16.56 4.11 A 2 2 0 0 1 16.56 19.89" />
      <path d="M 7.44 4.11 A 2 2 0 0 0 7.44 19.89" />
      <path d="M 7.44 4.11 A 2 2 0 0 1 7.44 19.89" />
      {children}
    </svg>
  );
});

export default FiberSkull;
