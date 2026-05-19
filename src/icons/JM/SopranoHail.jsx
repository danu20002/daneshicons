import React from 'react';

export const iconData = {
  "id": "SopranoHail",
  "name": "SopranoHail",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 12.00 a 2.26 2.26 0 1 0 4.53 0 a 2.26 2.26 0 1 0 -4.53 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 12.00 a 3.63 3.63 0 1 0 7.26 0 a 3.63 3.63 0 1 0 -7.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 12.00 a 5.35 5.35 0 1 0 10.69 0 a 5.35 5.35 0 1 0 -10.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const SopranoHail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 12.00 a 2.26 2.26 0 1 0 4.53 0 a 2.26 2.26 0 1 0 -4.53 0" stroke-dasharray="3 2" />
      <path d="M 8.37 12.00 a 3.63 3.63 0 1 0 7.26 0 a 3.63 3.63 0 1 0 -7.26 0" />
      <path d="M 6.65 12.00 a 5.35 5.35 0 1 0 10.69 0 a 5.35 5.35 0 1 0 -10.69 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0" />
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default SopranoHail;
