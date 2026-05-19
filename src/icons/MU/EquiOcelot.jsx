import React from 'react';

export const iconData = {
  "id": "EquiOcelot",
  "name": "EquiOcelot",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 9.82 0 1 0 19.65 0 a 9.82 9.82 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.18 12.00 a 9.82 2.9472068404778837 0 1 0 19.65 0 a 9.82 2.9472068404778837 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 3.49 A 2 2 0 0 0 16.91 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 3.49 A 2 2 0 0 1 16.91 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 3.49 A 2 2 0 0 0 7.09 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 3.49 A 2 2 0 0 1 7.09 20.51"
      }
    ]
  ]
};

export const EquiOcelot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 12.00 a 9.82 9.82 0 1 0 19.65 0 a 9.82 9.82 0 1 0 -19.65 0" />
      <path d="M 2.18 12.00 a 9.82 2.9472068404778837 0 1 0 19.65 0 a 9.82 2.9472068404778837 0 1 0 -19.65 0" />
      <path d="M 16.91 3.49 A 2 2 0 0 0 16.91 20.51" />
      <path d="M 16.91 3.49 A 2 2 0 0 1 16.91 20.51" />
      <path d="M 7.09 3.49 A 2 2 0 0 0 7.09 20.51" />
      <path d="M 7.09 3.49 A 2 2 0 0 1 7.09 20.51" />
      {children}
    </svg>
  );
});

export default EquiOcelot;
