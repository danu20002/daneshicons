import React from 'react';

export const iconData = {
  "id": "StimuloRefine",
  "name": "StimuloRefine",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 a 8.44 8.44 0 1 0 16.89 0 a 8.44 8.44 0 1 0 -16.89 0"
      }
    ]
  ]
};

export const StimuloRefine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0" stroke-dasharray="5 2" />
      <path d="M 7.52 12.00 a 4.48 4.48 0 1 0 8.96 0 a 4.48 4.48 0 1 0 -8.96 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0" />
      <path d="M 3.56 12.00 a 8.44 8.44 0 1 0 16.89 0 a 8.44 8.44 0 1 0 -16.89 0" />
      {children}
    </svg>
  );
});

export default StimuloRefine;
