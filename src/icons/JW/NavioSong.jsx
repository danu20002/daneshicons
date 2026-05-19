import React from 'react';

export const iconData = {
  "id": "NavioSong",
  "name": "NavioSong",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.45 12.00 a 8.55 8.55 0 1 0 17.09 0 a 8.55 8.55 0 1 0 -17.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 6.87 a 6.84 2.0508704634010795 0 1 0 13.67 0 a 6.84 2.0508704634010795 0 1 0 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 10.29 a 8.37 2.5117930819389636 0 1 0 16.75 0 a 8.37 2.5117930819389636 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 13.71 a 8.37 2.5117930819389636 0 1 0 16.75 0 a 8.37 2.5117930819389636 0 1 0 -16.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 17.13 a 6.84 2.0508704634010786 0 1 0 13.67 0 a 6.84 2.0508704634010786 0 1 0 -13.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.60 A 2 2 0 0 0 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 4.60 A 2 2 0 0 1 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.60 A 2 2 0 0 0 7.73 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 4.60 A 2 2 0 0 1 7.73 19.40"
      }
    ]
  ]
};

export const NavioSong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.45 12.00 a 8.55 8.55 0 1 0 17.09 0 a 8.55 8.55 0 1 0 -17.09 0" />
      <path d="M 5.16 6.87 a 6.84 2.0508704634010795 0 1 0 13.67 0 a 6.84 2.0508704634010795 0 1 0 -13.67 0" />
      <path d="M 3.63 10.29 a 8.37 2.5117930819389636 0 1 0 16.75 0 a 8.37 2.5117930819389636 0 1 0 -16.75 0" />
      <path d="M 3.63 13.71 a 8.37 2.5117930819389636 0 1 0 16.75 0 a 8.37 2.5117930819389636 0 1 0 -16.75 0" />
      <path d="M 5.16 17.13 a 6.84 2.0508704634010786 0 1 0 13.67 0 a 6.84 2.0508704634010786 0 1 0 -13.67 0" />
      <path d="M 16.27 4.60 A 2 2 0 0 0 16.27 19.40" />
      <path d="M 16.27 4.60 A 2 2 0 0 1 16.27 19.40" />
      <path d="M 7.73 4.60 A 2 2 0 0 0 7.73 19.40" />
      <path d="M 7.73 4.60 A 2 2 0 0 1 7.73 19.40" />
      {children}
    </svg>
  );
});

export default NavioSong;
