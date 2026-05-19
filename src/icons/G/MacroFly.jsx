import React from 'react';

export const iconData = {
  "id": "MacroFly",
  "name": "MacroFly",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.87 12.00 a 4.13 4.13 0 1 0 8.25 0 a 4.13 4.13 0 1 0 -8.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const MacroFly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 7.87 12.00 a 4.13 4.13 0 1 0 8.25 0 a 4.13 4.13 0 1 0 -8.25 0" />
      <path d="M 5.87 12.00 a 6.13 6.13 0 1 0 12.26 0 a 6.13 6.13 0 1 0 -12.26 0" />
      <path d="M 3.89 12.00 a 8.11 8.11 0 1 0 16.22 0 a 8.11 8.11 0 1 0 -16.22 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default MacroFly;
