import React from 'react';

export const iconData = {
  "id": "TriploGenre",
  "name": "TriploGenre",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.84 6.41 C 2.52 10.45, 9.92 9.24, 20.96 6.39"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 2.81 A 2.83 6.89 136 0 1 21.15 13.45"
      }
    ]
  ]
};

export const TriploGenre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.84 6.41 C 2.52 10.45, 9.92 9.24, 20.96 6.39" />
      <path d="M 4.39 2.81 A 2.83 6.89 136 0 1 21.15 13.45" />
      {children}
    </svg>
  );
});

export default TriploGenre;
