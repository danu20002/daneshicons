import React from 'react';

export const iconData = {
  "id": "SolidoWagon",
  "name": "SolidoWagon",
  "category": "TS",
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
        "d": "M 7.97 12.00 a 4.03 4.03 0 1 0 8.06 0 a 4.03 4.03 0 1 0 -8.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 0 10.95 0 a 5.47 5.47 0 1 0 -10.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.08 12.00 a 6.92 6.92 0 1 0 13.84 0 a 6.92 6.92 0 1 0 -13.84 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.23 0 a 8.61 8.61 0 1 0 -17.23 0"
      }
    ]
  ]
};

export const SolidoWagon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.97 12.00 a 4.03 4.03 0 1 0 8.06 0 a 4.03 4.03 0 1 0 -8.06 0" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 0 10.95 0 a 5.47 5.47 0 1 0 -10.95 0" />
      <path d="M 5.08 12.00 a 6.92 6.92 0 1 0 13.84 0 a 6.92 6.92 0 1 0 -13.84 0" stroke-dasharray="3 3" />
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.23 0 a 8.61 8.61 0 1 0 -17.23 0" />
      {children}
    </svg>
  );
});

export default SolidoWagon;
