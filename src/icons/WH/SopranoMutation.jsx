import React from 'react';

export const iconData = {
  "id": "SopranoMutation",
  "name": "SopranoMutation",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 7.85 a 7.19 2.1584694530666226 0 1 0 14.39 0 a 7.19 2.1584694530666226 0 1 0 -14.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 2.492385839531198 0 1 0 16.62 0 a 8.31 2.492385839531198 0 1 0 -16.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 16.15 a 7.19 2.1584694530666226 0 1 0 14.39 0 a 7.19 2.1584694530666226 0 1 0 -14.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.69 A 2 2 0 0 0 12.00 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.69 A 2 2 0 0 1 12.00 20.31"
      }
    ]
  ]
};

export const SopranoMutation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.62 0 a 8.31 8.31 0 1 0 -16.62 0" />
      <path d="M 4.81 7.85 a 7.19 2.1584694530666226 0 1 0 14.39 0 a 7.19 2.1584694530666226 0 1 0 -14.39 0" />
      <path d="M 3.69 12.00 a 8.31 2.492385839531198 0 1 0 16.62 0 a 8.31 2.492385839531198 0 1 0 -16.62 0" />
      <path d="M 4.81 16.15 a 7.19 2.1584694530666226 0 1 0 14.39 0 a 7.19 2.1584694530666226 0 1 0 -14.39 0" />
      <path d="M 12.00 3.69 A 2 2 0 0 0 12.00 20.31" />
      <path d="M 12.00 3.69 A 2 2 0 0 1 12.00 20.31" />
      {children}
    </svg>
  );
});

export default SopranoMutation;
