import React from 'react';

export const iconData = {
  "id": "LuteoDirector",
  "name": "LuteoDirector",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.59 12.00 a 2.41 2.41 0 1 0 4.83 0 a 2.41 2.41 0 1 0 -4.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 12.00 a 4.07 4.07 0 1 0 8.14 0 a 4.07 4.07 0 1 0 -8.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 12.00 a 6.17 6.17 0 1 0 12.35 0 a 6.17 6.17 0 1 0 -12.35 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 12.00 a 8.34 8.34 0 1 0 16.67 0 a 8.34 8.34 0 1 0 -16.67 0"
      }
    ]
  ]
};

export const LuteoDirector = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.59 12.00 a 2.41 2.41 0 1 0 4.83 0 a 2.41 2.41 0 1 0 -4.83 0" />
      <path d="M 7.93 12.00 a 4.07 4.07 0 1 0 8.14 0 a 4.07 4.07 0 1 0 -8.14 0" />
      <path d="M 5.83 12.00 a 6.17 6.17 0 1 0 12.35 0 a 6.17 6.17 0 1 0 -12.35 0" stroke-dasharray="2 2" />
      <path d="M 3.66 12.00 a 8.34 8.34 0 1 0 16.67 0 a 8.34 8.34 0 1 0 -16.67 0" />
      {children}
    </svg>
  );
});

export default LuteoDirector;
