import React from 'react';

export const iconData = {
  "id": "GraphoMirror",
  "name": "GraphoMirror",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.72 2.76 C 9.40 4.58, 14.50 6.02, 21.23 18.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 2.72 C 14.15 5.72, 15.94 11.01, 15.97 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 9.22 C 11.93 5.31, 13.51 10.57, 21.67 19.13"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 5.85 C 7.94 13.51, 4.45 17.43, 17.07 18.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.62 5.18 C 13.23 13.77, 17.20 10.87, 17.17 14.68"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 3.10 C 10.55 19.01, 8.89 18.44, 17.18 17.49"
      }
    ]
  ]
};

export const GraphoMirror = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.72 2.76 C 9.40 4.58, 14.50 6.02, 21.23 18.65" />
      <path d="M 8.63 2.72 C 14.15 5.72, 15.94 11.01, 15.97 14.03" />
      <path d="M 8.14 9.22 C 11.93 5.31, 13.51 10.57, 21.67 19.13" />
      <path d="M 2.59 5.85 C 7.94 13.51, 4.45 17.43, 17.07 18.42" />
      <path d="M 6.62 5.18 C 13.23 13.77, 17.20 10.87, 17.17 14.68" />
      <path d="M 2.25 3.10 C 10.55 19.01, 8.89 18.44, 17.18 17.49" />
      {children}
    </svg>
  );
});

export default GraphoMirror;
