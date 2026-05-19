import React from 'react';

export const iconData = {
  "id": "RapidoSable",
  "name": "RapidoSable",
  "category": "SQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 12.00 a 9.14 9.14 0 1 0 18.27 0 a 9.14 9.14 0 1 0 -18.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 6.52 a 7.31 2.1929281056672334 0 1 0 14.62 0 a 7.31 2.1929281056672334 0 1 0 -14.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 10.17 a 8.95 2.685777450746417 0 1 0 17.91 0 a 8.95 2.685777450746417 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 13.83 a 8.95 2.685777450746417 0 1 0 17.91 0 a 8.95 2.685777450746417 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 17.48 a 7.31 2.1929281056672334 0 1 0 14.62 0 a 7.31 2.1929281056672334 0 1 0 -14.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 4.09 A 2 2 0 0 0 16.57 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 4.09 A 2 2 0 0 1 16.57 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 4.09 A 2 2 0 0 0 7.43 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 4.09 A 2 2 0 0 1 7.43 19.91"
      }
    ]
  ]
};

export const RapidoSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 12.00 a 9.14 9.14 0 1 0 18.27 0 a 9.14 9.14 0 1 0 -18.27 0" />
      <path d="M 4.69 6.52 a 7.31 2.1929281056672334 0 1 0 14.62 0 a 7.31 2.1929281056672334 0 1 0 -14.62 0" />
      <path d="M 3.05 10.17 a 8.95 2.685777450746417 0 1 0 17.91 0 a 8.95 2.685777450746417 0 1 0 -17.91 0" />
      <path d="M 3.05 13.83 a 8.95 2.685777450746417 0 1 0 17.91 0 a 8.95 2.685777450746417 0 1 0 -17.91 0" />
      <path d="M 4.69 17.48 a 7.31 2.1929281056672334 0 1 0 14.62 0 a 7.31 2.1929281056672334 0 1 0 -14.62 0" />
      <path d="M 16.57 4.09 A 2 2 0 0 0 16.57 19.91" />
      <path d="M 16.57 4.09 A 2 2 0 0 1 16.57 19.91" />
      <path d="M 7.43 4.09 A 2 2 0 0 0 7.43 19.91" />
      <path d="M 7.43 4.09 A 2 2 0 0 1 7.43 19.91" />
      {children}
    </svg>
  );
});

export default RapidoSable;
