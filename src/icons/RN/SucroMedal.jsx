import React from 'react';

export const iconData = {
  "id": "SucroMedal",
  "name": "SucroMedal",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 0 8.61 0 a 4.31 4.31 0 1 0 -8.61 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 12.00 a 6.44 6.44 0 1 0 12.88 0 a 6.44 6.44 0 1 0 -12.88 0",
        "stroke-dasharray": "4 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 12.00 a 8.28 8.28 0 1 0 16.57 0 a 8.28 8.28 0 1 0 -16.57 0"
      }
    ]
  ]
};

export const SucroMedal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.87 0 a 2.43 2.43 0 1 0 -4.87 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 0 8.61 0 a 4.31 4.31 0 1 0 -8.61 0" stroke-dasharray="6 3" />
      <path d="M 5.56 12.00 a 6.44 6.44 0 1 0 12.88 0 a 6.44 6.44 0 1 0 -12.88 0" stroke-dasharray="4 1" />
      <path d="M 3.72 12.00 a 8.28 8.28 0 1 0 16.57 0 a 8.28 8.28 0 1 0 -16.57 0" />
      {children}
    </svg>
  );
});

export default SucroMedal;
