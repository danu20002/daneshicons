import React from 'react';

export const iconData = {
  "id": "MoleculoPrevent",
  "name": "MoleculoPrevent",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.13 0 a 8.07 8.07 0 1 0 -16.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 7.16 a 6.45 1.9358955719321964 0 1 0 12.91 0 a 6.45 1.9358955719321964 0 1 0 -12.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 10.39 a 7.90 2.370978173273645 0 1 0 15.81 0 a 7.90 2.370978173273645 0 1 0 -15.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 13.61 a 7.90 2.370978173273645 0 1 0 15.81 0 a 7.90 2.370978173273645 0 1 0 -15.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 16.84 a 6.45 1.9358955719321964 0 1 0 12.91 0 a 6.45 1.9358955719321964 0 1 0 -12.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.01 A 2 2 0 0 0 16.03 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.01 A 2 2 0 0 1 16.03 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.01 A 2 2 0 0 0 7.97 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.01 A 2 2 0 0 1 7.97 18.99"
      }
    ]
  ]
};

export const MoleculoPrevent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.13 0 a 8.07 8.07 0 1 0 -16.13 0" />
      <path d="M 5.55 7.16 a 6.45 1.9358955719321964 0 1 0 12.91 0 a 6.45 1.9358955719321964 0 1 0 -12.91 0" />
      <path d="M 4.10 10.39 a 7.90 2.370978173273645 0 1 0 15.81 0 a 7.90 2.370978173273645 0 1 0 -15.81 0" />
      <path d="M 4.10 13.61 a 7.90 2.370978173273645 0 1 0 15.81 0 a 7.90 2.370978173273645 0 1 0 -15.81 0" />
      <path d="M 5.55 16.84 a 6.45 1.9358955719321964 0 1 0 12.91 0 a 6.45 1.9358955719321964 0 1 0 -12.91 0" />
      <path d="M 16.03 5.01 A 2 2 0 0 0 16.03 18.99" />
      <path d="M 16.03 5.01 A 2 2 0 0 1 16.03 18.99" />
      <path d="M 7.97 5.01 A 2 2 0 0 0 7.97 18.99" />
      <path d="M 7.97 5.01 A 2 2 0 0 1 7.97 18.99" />
      {children}
    </svg>
  );
});

export default MoleculoPrevent;
