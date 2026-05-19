import React from 'react';

export const iconData = {
  "id": "JuvioEnigma",
  "name": "JuvioEnigma",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 8.19 12.00 a 3.81 3.81 0 1 0 7.61 0 a 3.81 3.81 0 1 0 -7.61 0",
        "stroke-dasharray": "2 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 12.00 a 5.45 5.45 0 1 0 10.89 0 a 5.45 5.45 0 1 0 -10.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 12.00 a 8.75 8.75 0 1 0 17.49 0 a 8.75 8.75 0 1 0 -17.49 0"
      }
    ]
  ]
};

export const JuvioEnigma = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0" stroke-dasharray="2 3" />
      <path d="M 8.19 12.00 a 3.81 3.81 0 1 0 7.61 0 a 3.81 3.81 0 1 0 -7.61 0" stroke-dasharray="2 3" />
      <path d="M 6.55 12.00 a 5.45 5.45 0 1 0 10.89 0 a 5.45 5.45 0 1 0 -10.89 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.93 0 a 6.97 6.97 0 1 0 -13.93 0" />
      <path d="M 3.25 12.00 a 8.75 8.75 0 1 0 17.49 0 a 8.75 8.75 0 1 0 -17.49 0" />
      {children}
    </svg>
  );
});

export default JuvioEnigma;
