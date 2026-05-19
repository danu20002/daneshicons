import React from 'react';

export const iconData = {
  "id": "UroLift",
  "name": "UroLift",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 9.75 0 1 0 19.50 0 a 9.75 9.75 0 1 0 -19.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 7.13 a 8.44 2.5325071711030316 0 1 0 16.88 0 a 8.44 2.5325071711030316 0 1 0 -16.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 12.00 a 9.75 2.9242873939219862 0 1 0 19.50 0 a 9.75 2.9242873939219862 0 1 0 -19.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 16.87 a 8.44 2.5325071711030316 0 1 0 16.88 0 a 8.44 2.5325071711030316 0 1 0 -16.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 5.11 A 2 2 0 0 0 18.89 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 5.11 A 2 2 0 0 1 18.89 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 0 12.00 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.25 A 2 2 0 0 1 12.00 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 5.11 A 2 2 0 0 0 5.11 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 5.11 A 2 2 0 0 1 5.11 18.89"
      }
    ]
  ]
};

export const UroLift = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.25 12.00 a 9.75 9.75 0 1 0 19.50 0 a 9.75 9.75 0 1 0 -19.50 0" />
      <path d="M 3.56 7.13 a 8.44 2.5325071711030316 0 1 0 16.88 0 a 8.44 2.5325071711030316 0 1 0 -16.88 0" />
      <path d="M 2.25 12.00 a 9.75 2.9242873939219862 0 1 0 19.50 0 a 9.75 2.9242873939219862 0 1 0 -19.50 0" />
      <path d="M 3.56 16.87 a 8.44 2.5325071711030316 0 1 0 16.88 0 a 8.44 2.5325071711030316 0 1 0 -16.88 0" />
      <path d="M 18.89 5.11 A 2 2 0 0 0 18.89 18.89" />
      <path d="M 18.89 5.11 A 2 2 0 0 1 18.89 18.89" />
      <path d="M 12.00 2.25 A 2 2 0 0 0 12.00 21.75" />
      <path d="M 12.00 2.25 A 2 2 0 0 1 12.00 21.75" />
      <path d="M 5.11 5.11 A 2 2 0 0 0 5.11 18.89" />
      <path d="M 5.11 5.11 A 2 2 0 0 1 5.11 18.89" />
      {children}
    </svg>
  );
});

export default UroLift;
