import React from 'react';

export const iconData = {
  "id": "VinovoRust",
  "name": "VinovoRust",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.44 12.00 Q 16.66 13.25 19.31 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 16.22 Q 15.41 15.41 16.22 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 19.31 Q 13.25 16.66 12.00 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.44 Q 10.75 16.66 7.78 19.31"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 19.31 Q 8.59 15.41 4.69 16.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 16.22 Q 7.34 13.25 3.56 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.56 12.00 Q 7.34 10.75 4.69 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 7.78 Q 8.59 8.59 7.78 4.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.69 Q 10.75 7.34 12.00 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.56 Q 13.25 7.34 16.22 4.69"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.69 Q 15.41 8.59 19.31 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 7.78 Q 16.66 10.75 20.44 12.00"
      }
    ]
  ]
};

export const VinovoRust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.44 12.00 Q 16.66 13.25 19.31 16.22" />
      <path d="M 19.31 16.22 Q 15.41 15.41 16.22 19.31" />
      <path d="M 16.22 19.31 Q 13.25 16.66 12.00 20.44" />
      <path d="M 12.00 20.44 Q 10.75 16.66 7.78 19.31" />
      <path d="M 7.78 19.31 Q 8.59 15.41 4.69 16.22" />
      <path d="M 4.69 16.22 Q 7.34 13.25 3.56 12.00" />
      <path d="M 3.56 12.00 Q 7.34 10.75 4.69 7.78" />
      <path d="M 4.69 7.78 Q 8.59 8.59 7.78 4.69" />
      <path d="M 7.78 4.69 Q 10.75 7.34 12.00 3.56" />
      <path d="M 12.00 3.56 Q 13.25 7.34 16.22 4.69" />
      <path d="M 16.22 4.69 Q 15.41 8.59 19.31 7.78" />
      <path d="M 19.31 7.78 Q 16.66 10.75 20.44 12.00" />
      {children}
    </svg>
  );
});

export default VinovoRust;
