import React from 'react';

export const iconData = {
  "id": "AeroBreach",
  "name": "AeroBreach",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.03 0 a 8.02 8.02 0 1 0 -16.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 9.33 a 7.56 2.2675030025363205 0 1 0 15.12 0 a 7.56 2.2675030025363205 0 1 0 -15.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 14.67 a 7.56 2.2675030025363205 0 1 0 15.12 0 a 7.56 2.2675030025363205 0 1 0 -15.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 6.33 A 2 2 0 0 0 17.67 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 6.33 A 2 2 0 0 1 17.67 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.98 A 2 2 0 0 0 12.00 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.98 A 2 2 0 0 1 12.00 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.33 A 2 2 0 0 0 6.33 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.33 A 2 2 0 0 1 6.33 17.67"
      }
    ]
  ]
};

export const AeroBreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.03 0 a 8.02 8.02 0 1 0 -16.03 0" />
      <path d="M 4.44 9.33 a 7.56 2.2675030025363205 0 1 0 15.12 0 a 7.56 2.2675030025363205 0 1 0 -15.12 0" />
      <path d="M 4.44 14.67 a 7.56 2.2675030025363205 0 1 0 15.12 0 a 7.56 2.2675030025363205 0 1 0 -15.12 0" />
      <path d="M 17.67 6.33 A 2 2 0 0 0 17.67 17.67" />
      <path d="M 17.67 6.33 A 2 2 0 0 1 17.67 17.67" />
      <path d="M 12.00 3.98 A 2 2 0 0 0 12.00 20.02" />
      <path d="M 12.00 3.98 A 2 2 0 0 1 12.00 20.02" />
      <path d="M 6.33 6.33 A 2 2 0 0 0 6.33 17.67" />
      <path d="M 6.33 6.33 A 2 2 0 0 1 6.33 17.67" />
      {children}
    </svg>
  );
});

export default AeroBreach;
