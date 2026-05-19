import React from 'react';

export const iconData = {
  "id": "GranoRhapsody",
  "name": "GranoRhapsody",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.19 12.00 L 22.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 18.40 L 18.35 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 19.98 L 9.73 21.93"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 15.55 L 2.82 16.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 8.45 L 2.82 7.58"
      }
    ],
    [
      "path",
      {
        "d": "M 10.18 4.02 L 9.73 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 17.11 5.60 L 18.35 4.03"
      }
    ]
  ]
};

export const GranoRhapsody = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0" />
      <path d="M 20.19 12.00 L 22.19 12.00" />
      <path d="M 17.11 18.40 L 18.35 19.97" />
      <path d="M 10.18 19.98 L 9.73 21.93" />
      <path d="M 4.62 15.55 L 2.82 16.42" />
      <path d="M 4.62 8.45 L 2.82 7.58" />
      <path d="M 10.18 4.02 L 9.73 2.07" />
      <path d="M 17.11 5.60 L 18.35 4.03" />
      {children}
    </svg>
  );
});

export default GranoRhapsody;
