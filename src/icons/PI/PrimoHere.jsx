import React from 'react';

export const iconData = {
  "id": "PrimoHere",
  "name": "PrimoHere",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 12.00 a 6.85 6.85 0 1 0 13.71 0 a 6.85 6.85 0 1 0 -13.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0"
      }
    ]
  ]
};

export const PrimoHere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" stroke-dasharray="4 2" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0" />
      <path d="M 6.62 12.00 a 5.38 5.38 0 1 0 10.76 0 a 5.38 5.38 0 1 0 -10.76 0" stroke-dasharray="3 2" />
      <path d="M 5.15 12.00 a 6.85 6.85 0 1 0 13.71 0 a 6.85 6.85 0 1 0 -13.71 0" />
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.93 0 a 8.47 8.47 0 1 0 -16.93 0" />
      {children}
    </svg>
  );
});

export default PrimoHere;
