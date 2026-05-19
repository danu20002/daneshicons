import React from 'react';

export const iconData = {
  "id": "TachioLemon",
  "name": "TachioLemon",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 1 9.82 0 a 4.91 4.91 0 1 1 -9.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.67 12.00 L 20.67 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 17.21 L 17.40 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 18.50 L 10.07 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 14.89 L 4.19 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 9.11 L 4.19 8.24"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 5.50 L 10.07 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 6.79 L 17.40 5.22"
      }
    ]
  ]
};

export const TachioLemon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.34 0 a 7.17 7.17 0 1 0 -14.34 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 1 9.82 0 a 4.91 4.91 0 1 1 -9.82 0" />
      <path d="M 18.67 12.00 L 20.67 12.00" />
      <path d="M 16.16 17.21 L 17.40 18.78" />
      <path d="M 10.52 18.50 L 10.07 20.45" />
      <path d="M 5.99 14.89 L 4.19 15.76" />
      <path d="M 5.99 9.11 L 4.19 8.24" />
      <path d="M 10.52 5.50 L 10.07 3.55" />
      <path d="M 16.16 6.79 L 17.40 5.22" />
      {children}
    </svg>
  );
});

export default TachioLemon;
