import React from 'react';

export const iconData = {
  "id": "ColoBaton",
  "name": "ColoBaton",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.85 0 a 7.43 7.43 0 1 0 -14.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 12.00 a 5.15 5.15 0 1 1 10.30 0 a 5.15 5.15 0 1 1 -10.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 12.00 L 20.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 16.07 L 19.22 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.14 18.59 L 14.76 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.86 18.59 L 9.24 20.49"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 16.07 L 4.78 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 L 3.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 7.93 L 4.78 6.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.86 5.41 L 9.24 3.51"
      }
    ],
    [
      "path",
      {
        "d": "M 14.14 5.41 L 14.76 3.51"
      }
    ],
    [
      "path",
      {
        "d": "M 17.60 7.93 L 19.22 6.75"
      }
    ]
  ]
};

export const ColoBaton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.85 0 a 7.43 7.43 0 1 0 -14.85 0" />
      <path d="M 6.85 12.00 a 5.15 5.15 0 1 1 10.30 0 a 5.15 5.15 0 1 1 -10.30 0" />
      <path d="M 18.93 12.00 L 20.93 12.00" />
      <path d="M 17.60 16.07 L 19.22 17.25" />
      <path d="M 14.14 18.59 L 14.76 20.49" />
      <path d="M 9.86 18.59 L 9.24 20.49" />
      <path d="M 6.40 16.07 L 4.78 17.25" />
      <path d="M 5.07 12.00 L 3.07 12.00" />
      <path d="M 6.40 7.93 L 4.78 6.75" />
      <path d="M 9.86 5.41 L 9.24 3.51" />
      <path d="M 14.14 5.41 L 14.76 3.51" />
      <path d="M 17.60 7.93 L 19.22 6.75" />
      {children}
    </svg>
  );
});

export default ColoBaton;
