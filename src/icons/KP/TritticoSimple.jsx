import React from 'react';

export const iconData = {
  "id": "TritticoSimple",
  "name": "TritticoSimple",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 12.00 a 9.08 9.08 0 1 0 18.17 0 a 9.08 9.08 0 1 0 -18.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 6.55 a 7.27 2.1803679228946566 0 1 0 14.54 0 a 7.27 2.1803679228946566 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 10.18 a 8.90 2.6703944313119625 0 1 0 17.80 0 a 8.90 2.6703944313119625 0 1 0 -17.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 13.82 a 8.90 2.6703944313119625 0 1 0 17.80 0 a 8.90 2.6703944313119625 0 1 0 -17.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 17.45 a 7.27 2.1803679228946566 0 1 0 14.54 0 a 7.27 2.1803679228946566 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 4.13 A 2 2 0 0 0 16.54 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 4.13 A 2 2 0 0 1 16.54 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 4.13 A 2 2 0 0 0 7.46 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 4.13 A 2 2 0 0 1 7.46 19.87"
      }
    ]
  ]
};

export const TritticoSimple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 12.00 a 9.08 9.08 0 1 0 18.17 0 a 9.08 9.08 0 1 0 -18.17 0" />
      <path d="M 4.73 6.55 a 7.27 2.1803679228946566 0 1 0 14.54 0 a 7.27 2.1803679228946566 0 1 0 -14.54 0" />
      <path d="M 3.10 10.18 a 8.90 2.6703944313119625 0 1 0 17.80 0 a 8.90 2.6703944313119625 0 1 0 -17.80 0" />
      <path d="M 3.10 13.82 a 8.90 2.6703944313119625 0 1 0 17.80 0 a 8.90 2.6703944313119625 0 1 0 -17.80 0" />
      <path d="M 4.73 17.45 a 7.27 2.1803679228946566 0 1 0 14.54 0 a 7.27 2.1803679228946566 0 1 0 -14.54 0" />
      <path d="M 16.54 4.13 A 2 2 0 0 0 16.54 19.87" />
      <path d="M 16.54 4.13 A 2 2 0 0 1 16.54 19.87" />
      <path d="M 7.46 4.13 A 2 2 0 0 0 7.46 19.87" />
      <path d="M 7.46 4.13 A 2 2 0 0 1 7.46 19.87" />
      {children}
    </svg>
  );
});

export default TritticoSimple;
