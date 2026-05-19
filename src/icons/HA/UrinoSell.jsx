import React from 'react';

export const iconData = {
  "id": "UrinoSell",
  "name": "UrinoSell",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 12.00 a 4.50 4.50 0 1 1 9.01 0 a 4.50 4.50 0 1 1 -9.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 12.00 L 20.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 16.06 L 19.21 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 14.13 18.57 L 14.75 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 18.57 L 9.25 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 16.06 L 4.79 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 12.00 L 3.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 7.94 L 4.79 6.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 5.43 L 9.25 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.13 5.43 L 14.75 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 7.94 L 19.21 6.76"
      }
    ]
  ]
};

export const UrinoSell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0" />
      <path d="M 7.50 12.00 a 4.50 4.50 0 1 1 9.01 0 a 4.50 4.50 0 1 1 -9.01 0" />
      <path d="M 18.91 12.00 L 20.91 12.00" />
      <path d="M 17.59 16.06 L 19.21 17.24" />
      <path d="M 14.13 18.57 L 14.75 20.47" />
      <path d="M 9.87 18.57 L 9.25 20.47" />
      <path d="M 6.41 16.06 L 4.79 17.24" />
      <path d="M 5.09 12.00 L 3.09 12.00" />
      <path d="M 6.41 7.94 L 4.79 6.76" />
      <path d="M 9.87 5.43 L 9.25 3.53" />
      <path d="M 14.13 5.43 L 14.75 3.53" />
      <path d="M 17.59 7.94 L 19.21 6.76" />
      {children}
    </svg>
  );
});

export default UrinoSell;
