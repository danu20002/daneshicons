import React from 'react';

export const iconData = {
  "id": "ValchiriaCrusade",
  "name": "ValchiriaCrusade",
  "category": "ET",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 7.97 a 6.98 2.0939504935314357 0 1 0 13.96 0 a 6.98 2.0939504935314357 0 1 0 -13.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 2.4178857622202483 0 1 0 16.12 0 a 8.06 2.4178857622202483 0 1 0 -16.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 16.03 a 6.98 2.0939504935314357 0 1 0 13.96 0 a 6.98 2.0939504935314357 0 1 0 -13.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.02 A 2 2 0 0 0 16.03 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 16.03 5.02 A 2 2 0 0 1 16.03 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.02 A 2 2 0 0 0 7.97 18.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.02 A 2 2 0 0 1 7.97 18.98"
      }
    ]
  ]
};

export const ValchiriaCrusade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0" />
      <path d="M 5.02 7.97 a 6.98 2.0939504935314357 0 1 0 13.96 0 a 6.98 2.0939504935314357 0 1 0 -13.96 0" />
      <path d="M 3.94 12.00 a 8.06 2.4178857622202483 0 1 0 16.12 0 a 8.06 2.4178857622202483 0 1 0 -16.12 0" />
      <path d="M 5.02 16.03 a 6.98 2.0939504935314357 0 1 0 13.96 0 a 6.98 2.0939504935314357 0 1 0 -13.96 0" />
      <path d="M 16.03 5.02 A 2 2 0 0 0 16.03 18.98" />
      <path d="M 16.03 5.02 A 2 2 0 0 1 16.03 18.98" />
      <path d="M 7.97 5.02 A 2 2 0 0 0 7.97 18.98" />
      <path d="M 7.97 5.02 A 2 2 0 0 1 7.97 18.98" />
      {children}
    </svg>
  );
});

export default ValchiriaCrusade;
