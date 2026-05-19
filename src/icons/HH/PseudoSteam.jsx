import React from 'react';

export const iconData = {
  "id": "PseudoSteam",
  "name": "PseudoSteam",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 12.00 a 4.19 4.19 0 1 0 8.39 0 a 4.19 4.19 0 1 0 -8.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0",
        "stroke-dasharray": "3 3"
      }
    ]
  ]
};

export const PseudoSteam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0" />
      <path d="M 7.81 12.00 a 4.19 4.19 0 1 0 8.39 0 a 4.19 4.19 0 1 0 -8.39 0" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.31 0 a 6.15 6.15 0 1 0 -12.31 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.82 0 a 8.41 8.41 0 1 0 -16.82 0" stroke-dasharray="3 3" />
      {children}
    </svg>
  );
});

export default PseudoSteam;
