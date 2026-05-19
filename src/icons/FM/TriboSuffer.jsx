import React from 'react';

export const iconData = {
  "id": "TriboSuffer",
  "name": "TriboSuffer",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 9.24 0 1 0 18.47 0 a 9.24 9.24 0 1 0 -18.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 8.92 a 8.71 2.6125483554127076 0 1 0 17.42 0 a 8.71 2.6125483554127076 0 1 0 -17.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 15.08 a 8.71 2.6125483554127076 0 1 0 17.42 0 a 8.71 2.6125483554127076 0 1 0 -17.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 4.00 A 2 2 0 0 0 16.62 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 4.00 A 2 2 0 0 1 16.62 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 4.00 A 2 2 0 0 0 7.38 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 4.00 A 2 2 0 0 1 7.38 20.00"
      }
    ]
  ]
};

export const TriboSuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 12.00 a 9.24 9.24 0 1 0 18.47 0 a 9.24 9.24 0 1 0 -18.47 0" />
      <path d="M 3.29 8.92 a 8.71 2.6125483554127076 0 1 0 17.42 0 a 8.71 2.6125483554127076 0 1 0 -17.42 0" />
      <path d="M 3.29 15.08 a 8.71 2.6125483554127076 0 1 0 17.42 0 a 8.71 2.6125483554127076 0 1 0 -17.42 0" />
      <path d="M 16.62 4.00 A 2 2 0 0 0 16.62 20.00" />
      <path d="M 16.62 4.00 A 2 2 0 0 1 16.62 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 0 7.38 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 1 7.38 20.00" />
      {children}
    </svg>
  );
});

export default TriboSuffer;
