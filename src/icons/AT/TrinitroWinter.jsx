import React from 'react';

export const iconData = {
  "id": "TrinitroWinter",
  "name": "TrinitroWinter",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.71 4.85 C 8.50 8.36, 10.78 8.85, 20.51 15.79"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 8.22 C 12.51 9.16, 5.15 10.33, 16.79 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 7.51 C 12.83 11.04, 5.11 4.33, 18.16 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 6.33 C 14.43 9.68, 7.28 12.00, 20.75 21.97"
      }
    ]
  ]
};

export const TrinitroWinter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.71 4.85 C 8.50 8.36, 10.78 8.85, 20.51 15.79" />
      <path d="M 7.50 8.22 C 12.51 9.16, 5.15 10.33, 16.79 20.00" />
      <path d="M 4.10 7.51 C 12.83 11.04, 5.11 4.33, 18.16 21.12" />
      <path d="M 3.86 6.33 C 14.43 9.68, 7.28 12.00, 20.75 21.97" />
      {children}
    </svg>
  );
});

export default TrinitroWinter;
