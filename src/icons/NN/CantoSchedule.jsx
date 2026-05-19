import React from 'react';

export const iconData = {
  "id": "CantoSchedule",
  "name": "CantoSchedule",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 6.92 a 6.77 2.0312148794531826 0 1 0 13.54 0 a 6.77 2.0312148794531826 0 1 0 -13.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 10.31 a 8.29 2.4877200063045697 0 1 0 16.58 0 a 8.29 2.4877200063045697 0 1 0 -16.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 13.69 a 8.29 2.4877200063045697 0 1 0 16.58 0 a 8.29 2.4877200063045697 0 1 0 -16.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 17.08 a 6.77 2.0312148794531826 0 1 0 13.54 0 a 6.77 2.0312148794531826 0 1 0 -13.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.67 A 2 2 0 0 0 16.23 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.67 A 2 2 0 0 1 16.23 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.67 A 2 2 0 0 0 7.77 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.67 A 2 2 0 0 1 7.77 19.33"
      }
    ]
  ]
};

export const CantoSchedule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.93 0 a 8.46 8.46 0 1 0 -16.93 0" />
      <path d="M 5.23 6.92 a 6.77 2.0312148794531826 0 1 0 13.54 0 a 6.77 2.0312148794531826 0 1 0 -13.54 0" />
      <path d="M 3.71 10.31 a 8.29 2.4877200063045697 0 1 0 16.58 0 a 8.29 2.4877200063045697 0 1 0 -16.58 0" />
      <path d="M 3.71 13.69 a 8.29 2.4877200063045697 0 1 0 16.58 0 a 8.29 2.4877200063045697 0 1 0 -16.58 0" />
      <path d="M 5.23 17.08 a 6.77 2.0312148794531826 0 1 0 13.54 0 a 6.77 2.0312148794531826 0 1 0 -13.54 0" />
      <path d="M 16.23 4.67 A 2 2 0 0 0 16.23 19.33" />
      <path d="M 16.23 4.67 A 2 2 0 0 1 16.23 19.33" />
      <path d="M 7.77 4.67 A 2 2 0 0 0 7.77 19.33" />
      <path d="M 7.77 4.67 A 2 2 0 0 1 7.77 19.33" />
      {children}
    </svg>
  );
});

export default CantoSchedule;
