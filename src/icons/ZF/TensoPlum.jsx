import React from 'react';

export const iconData = {
  "id": "TensoPlum",
  "name": "TensoPlum",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 8.17 0 1 0 16.33 0 a 8.17 8.17 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 7.92 a 7.07 2.121816864940846 0 1 0 14.15 0 a 7.07 2.121816864940846 0 1 0 -14.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 12.00 a 8.17 2.4500630762893705 0 1 0 16.33 0 a 8.17 2.4500630762893705 0 1 0 -16.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 16.08 a 7.07 2.121816864940846 0 1 0 14.15 0 a 7.07 2.121816864940846 0 1 0 -14.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 6.23 A 2 2 0 0 0 17.77 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.77 6.23 A 2 2 0 0 1 17.77 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 0 12.00 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.83 A 2 2 0 0 1 12.00 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 6.23 A 2 2 0 0 0 6.23 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 6.23 A 2 2 0 0 1 6.23 17.77"
      }
    ]
  ]
};

export const TensoPlum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 12.00 a 8.17 8.17 0 1 0 16.33 0 a 8.17 8.17 0 1 0 -16.33 0" />
      <path d="M 4.93 7.92 a 7.07 2.121816864940846 0 1 0 14.15 0 a 7.07 2.121816864940846 0 1 0 -14.15 0" />
      <path d="M 3.83 12.00 a 8.17 2.4500630762893705 0 1 0 16.33 0 a 8.17 2.4500630762893705 0 1 0 -16.33 0" />
      <path d="M 4.93 16.08 a 7.07 2.121816864940846 0 1 0 14.15 0 a 7.07 2.121816864940846 0 1 0 -14.15 0" />
      <path d="M 17.77 6.23 A 2 2 0 0 0 17.77 17.77" />
      <path d="M 17.77 6.23 A 2 2 0 0 1 17.77 17.77" />
      <path d="M 12.00 3.83 A 2 2 0 0 0 12.00 20.17" />
      <path d="M 12.00 3.83 A 2 2 0 0 1 12.00 20.17" />
      <path d="M 6.23 6.23 A 2 2 0 0 0 6.23 17.77" />
      <path d="M 6.23 6.23 A 2 2 0 0 1 6.23 17.77" />
      {children}
    </svg>
  );
});

export default TensoPlum;
