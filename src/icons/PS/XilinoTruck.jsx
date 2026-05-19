import React from 'react';

export const iconData = {
  "id": "XilinoTruck",
  "name": "XilinoTruck",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 9.47 0 1 0 18.94 0 a 9.47 9.47 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 7.27 a 8.20 2.460368792322143 0 1 0 16.40 0 a 8.20 2.460368792322143 0 1 0 -16.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 2.8409891691058875 0 1 0 18.94 0 a 9.47 2.8409891691058875 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 16.73 a 8.20 2.460368792322143 0 1 0 16.40 0 a 8.20 2.460368792322143 0 1 0 -16.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 5.30 A 2 2 0 0 0 18.70 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 5.30 A 2 2 0 0 1 18.70 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.53 A 2 2 0 0 0 12.00 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.53 A 2 2 0 0 1 12.00 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 5.30 A 2 2 0 0 0 5.30 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.30 5.30 A 2 2 0 0 1 5.30 18.70"
      }
    ]
  ]
};

export const XilinoTruck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.53 12.00 a 9.47 9.47 0 1 0 18.94 0 a 9.47 9.47 0 1 0 -18.94 0" />
      <path d="M 3.80 7.27 a 8.20 2.460368792322143 0 1 0 16.40 0 a 8.20 2.460368792322143 0 1 0 -16.40 0" />
      <path d="M 2.53 12.00 a 9.47 2.8409891691058875 0 1 0 18.94 0 a 9.47 2.8409891691058875 0 1 0 -18.94 0" />
      <path d="M 3.80 16.73 a 8.20 2.460368792322143 0 1 0 16.40 0 a 8.20 2.460368792322143 0 1 0 -16.40 0" />
      <path d="M 18.70 5.30 A 2 2 0 0 0 18.70 18.70" />
      <path d="M 18.70 5.30 A 2 2 0 0 1 18.70 18.70" />
      <path d="M 12.00 2.53 A 2 2 0 0 0 12.00 21.47" />
      <path d="M 12.00 2.53 A 2 2 0 0 1 12.00 21.47" />
      <path d="M 5.30 5.30 A 2 2 0 0 0 5.30 18.70" />
      <path d="M 5.30 5.30 A 2 2 0 0 1 5.30 18.70" />
      {children}
    </svg>
  );
});

export default XilinoTruck;
