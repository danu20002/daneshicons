import React from 'react';

export const iconData = {
  "id": "MusculoStrong",
  "name": "MusculoStrong",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.42 12.00 a 9.58 9.58 0 1 0 19.15 0 a 9.58 9.58 0 1 0 -19.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 7.21 a 8.29 2.487679361614975 0 1 0 16.58 0 a 8.29 2.487679361614975 0 1 0 -16.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.42 12.00 a 9.58 2.8725246981717647 0 1 0 19.15 0 a 9.58 2.8725246981717647 0 1 0 -19.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 16.79 a 8.29 2.487679361614975 0 1 0 16.58 0 a 8.29 2.487679361614975 0 1 0 -16.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 5.23 A 2 2 0 0 0 18.77 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 5.23 A 2 2 0 0 1 18.77 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.42 A 2 2 0 0 0 12.00 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.42 A 2 2 0 0 1 12.00 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 5.23 A 2 2 0 0 0 5.23 18.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 5.23 A 2 2 0 0 1 5.23 18.77"
      }
    ]
  ]
};

export const MusculoStrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.42 12.00 a 9.58 9.58 0 1 0 19.15 0 a 9.58 9.58 0 1 0 -19.15 0" />
      <path d="M 3.71 7.21 a 8.29 2.487679361614975 0 1 0 16.58 0 a 8.29 2.487679361614975 0 1 0 -16.58 0" />
      <path d="M 2.42 12.00 a 9.58 2.8725246981717647 0 1 0 19.15 0 a 9.58 2.8725246981717647 0 1 0 -19.15 0" />
      <path d="M 3.71 16.79 a 8.29 2.487679361614975 0 1 0 16.58 0 a 8.29 2.487679361614975 0 1 0 -16.58 0" />
      <path d="M 18.77 5.23 A 2 2 0 0 0 18.77 18.77" />
      <path d="M 18.77 5.23 A 2 2 0 0 1 18.77 18.77" />
      <path d="M 12.00 2.42 A 2 2 0 0 0 12.00 21.58" />
      <path d="M 12.00 2.42 A 2 2 0 0 1 12.00 21.58" />
      <path d="M 5.23 5.23 A 2 2 0 0 0 5.23 18.77" />
      <path d="M 5.23 5.23 A 2 2 0 0 1 5.23 18.77" />
      {children}
    </svg>
  );
});

export default MusculoStrong;
