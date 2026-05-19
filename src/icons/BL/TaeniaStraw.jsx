import React from 'react';

export const iconData = {
  "id": "TaeniaStraw",
  "name": "TaeniaStraw",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0"
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
        "d": "M 6.35 12.00 a 5.65 5.65 0 1 0 11.29 0 a 5.65 5.65 0 1 0 -11.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.77 0 a 6.88 6.88 0 1 0 -13.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const TaeniaStraw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0" />
      <path d="M 8.37 12.00 a 3.63 3.63 0 1 0 7.26 0 a 3.63 3.63 0 1 0 -7.26 0" />
      <path d="M 6.35 12.00 a 5.65 5.65 0 1 0 11.29 0 a 5.65 5.65 0 1 0 -11.29 0" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.77 0 a 6.88 6.88 0 1 0 -13.77 0" />
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.66 0 a 8.83 8.83 0 1 0 -17.66 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default TaeniaStraw;
