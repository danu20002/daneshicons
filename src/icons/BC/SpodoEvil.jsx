import React from 'react';

export const iconData = {
  "id": "SpodoEvil",
  "name": "SpodoEvil",
  "category": "BC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 7.97 a 6.99 2.096200151401356 0 1 0 13.97 0 a 6.99 2.096200151401356 0 1 0 -13.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 12.00 a 8.07 2.420483443373814 0 1 0 16.14 0 a 8.07 2.420483443373814 0 1 0 -16.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 16.03 a 6.99 2.096200151401356 0 1 0 13.97 0 a 6.99 2.096200151401356 0 1 0 -13.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 A 2 2 0 0 0 12.00 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 A 2 2 0 0 1 12.00 20.07"
      }
    ]
  ]
};

export const SpodoEvil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 12.00 a 8.07 8.07 0 1 0 16.14 0 a 8.07 8.07 0 1 0 -16.14 0" />
      <path d="M 5.01 7.97 a 6.99 2.096200151401356 0 1 0 13.97 0 a 6.99 2.096200151401356 0 1 0 -13.97 0" />
      <path d="M 3.93 12.00 a 8.07 2.420483443373814 0 1 0 16.14 0 a 8.07 2.420483443373814 0 1 0 -16.14 0" />
      <path d="M 5.01 16.03 a 6.99 2.096200151401356 0 1 0 13.97 0 a 6.99 2.096200151401356 0 1 0 -13.97 0" />
      <path d="M 12.00 3.93 A 2 2 0 0 0 12.00 20.07" />
      <path d="M 12.00 3.93 A 2 2 0 0 1 12.00 20.07" />
      {children}
    </svg>
  );
});

export default SpodoEvil;
