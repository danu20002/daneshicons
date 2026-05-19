import React from 'react';

export const iconData = {
  "id": "SestoReverse",
  "name": "SestoReverse",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 7.09 a 8.50 2.5491827546226324 0 1 0 16.99 0 a 8.50 2.5491827546226324 0 1 0 -16.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 12.00 a 9.81 2.9435426991898566 0 1 0 19.62 0 a 9.81 2.9435426991898566 0 1 0 -19.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 16.91 a 8.50 2.5491827546226324 0 1 0 16.99 0 a 8.50 2.5491827546226324 0 1 0 -16.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 5.06 A 2 2 0 0 0 18.94 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.94 5.06 A 2 2 0 0 1 18.94 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.19 A 2 2 0 0 0 12.00 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.19 A 2 2 0 0 1 12.00 21.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 5.06 A 2 2 0 0 0 5.06 18.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 5.06 A 2 2 0 0 1 5.06 18.94"
      }
    ]
  ]
};

export const SestoReverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.19 12.00 a 9.81 9.81 0 1 0 19.62 0 a 9.81 9.81 0 1 0 -19.62 0" />
      <path d="M 3.50 7.09 a 8.50 2.5491827546226324 0 1 0 16.99 0 a 8.50 2.5491827546226324 0 1 0 -16.99 0" />
      <path d="M 2.19 12.00 a 9.81 2.9435426991898566 0 1 0 19.62 0 a 9.81 2.9435426991898566 0 1 0 -19.62 0" />
      <path d="M 3.50 16.91 a 8.50 2.5491827546226324 0 1 0 16.99 0 a 8.50 2.5491827546226324 0 1 0 -16.99 0" />
      <path d="M 18.94 5.06 A 2 2 0 0 0 18.94 18.94" />
      <path d="M 18.94 5.06 A 2 2 0 0 1 18.94 18.94" />
      <path d="M 12.00 2.19 A 2 2 0 0 0 12.00 21.81" />
      <path d="M 12.00 2.19 A 2 2 0 0 1 12.00 21.81" />
      <path d="M 5.06 5.06 A 2 2 0 0 0 5.06 18.94" />
      <path d="M 5.06 5.06 A 2 2 0 0 1 5.06 18.94" />
      {children}
    </svg>
  );
});

export default SestoReverse;
