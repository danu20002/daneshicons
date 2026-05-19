import React from 'react';

export const iconData = {
  "id": "FastoGut",
  "name": "FastoGut",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 9.25 a 7.77 2.3324940033614956 0 1 0 15.55 0 a 7.77 2.3324940033614956 0 1 0 -15.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 14.75 a 7.77 2.3324940033614956 0 1 0 15.55 0 a 7.77 2.3324940033614956 0 1 0 -15.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.86 A 2 2 0 0 0 16.12 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.86 A 2 2 0 0 1 16.12 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.86 A 2 2 0 0 0 7.88 19.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.86 A 2 2 0 0 1 7.88 19.14"
      }
    ]
  ]
};

export const FastoGut = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 12.00 a 8.25 8.25 0 1 0 16.49 0 a 8.25 8.25 0 1 0 -16.49 0" />
      <path d="M 4.23 9.25 a 7.77 2.3324940033614956 0 1 0 15.55 0 a 7.77 2.3324940033614956 0 1 0 -15.55 0" />
      <path d="M 4.23 14.75 a 7.77 2.3324940033614956 0 1 0 15.55 0 a 7.77 2.3324940033614956 0 1 0 -15.55 0" />
      <path d="M 16.12 4.86 A 2 2 0 0 0 16.12 19.14" />
      <path d="M 16.12 4.86 A 2 2 0 0 1 16.12 19.14" />
      <path d="M 7.88 4.86 A 2 2 0 0 0 7.88 19.14" />
      <path d="M 7.88 4.86 A 2 2 0 0 1 7.88 19.14" />
      {children}
    </svg>
  );
});

export default FastoGut;
