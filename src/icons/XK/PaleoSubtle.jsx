import React from 'react';

export const iconData = {
  "id": "PaleoSubtle",
  "name": "PaleoSubtle",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.24 2.67 C 5.70 7.16, 10.63 10.64, 21.92 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 5.90 C 10.99 19.44, 9.93 5.49, 18.88 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 5.77 C 5.56 18.38, 7.37 5.95, 21.14 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.75 C 17.48 5.85, 18.07 14.95, 14.09 20.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.64 3.46 C 10.73 14.66, 15.73 17.67, 21.98 19.36"
      }
    ]
  ]
};

export const PaleoSubtle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.24 2.67 C 5.70 7.16, 10.63 10.64, 21.92 17.00" />
      <path d="M 3.22 5.90 C 10.99 19.44, 9.93 5.49, 18.88 20.95" />
      <path d="M 9.46 5.77 C 5.56 18.38, 7.37 5.95, 21.14 18.67" />
      <path d="M 8.04 5.75 C 17.48 5.85, 18.07 14.95, 14.09 20.74" />
      <path d="M 2.64 3.46 C 10.73 14.66, 15.73 17.67, 21.98 19.36" />
      {children}
    </svg>
  );
});

export default PaleoSubtle;
