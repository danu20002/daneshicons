import React from 'react';

export const iconData = {
  "id": "TrinitroChase",
  "name": "TrinitroChase",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 12.00 a 7.06 7.06 0 1 1 14.11 0 a 7.06 7.06 0 1 1 -14.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.06 12.00 L 22.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 17.18 L 19.71 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 13.40 19.94 L 13.75 21.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 18.98 L 6.97 20.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 14.76 L 2.55 15.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 9.24 L 2.55 8.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.97 5.02 L 6.97 3.29"
      }
    ],
    [
      "path",
      {
        "d": "M 13.40 4.06 L 13.75 2.09"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 6.82 L 19.71 5.53"
      }
    ]
  ]
};

export const TrinitroChase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0" />
      <path d="M 4.94 12.00 a 7.06 7.06 0 1 1 14.11 0 a 7.06 7.06 0 1 1 -14.11 0" />
      <path d="M 20.06 12.00 L 22.06 12.00" />
      <path d="M 18.18 17.18 L 19.71 18.47" />
      <path d="M 13.40 19.94 L 13.75 21.91" />
      <path d="M 7.97 18.98 L 6.97 20.71" />
      <path d="M 4.42 14.76 L 2.55 15.44" />
      <path d="M 4.42 9.24 L 2.55 8.56" />
      <path d="M 7.97 5.02 L 6.97 3.29" />
      <path d="M 13.40 4.06 L 13.75 2.09" />
      <path d="M 18.18 6.82 L 19.71 5.53" />
      {children}
    </svg>
  );
});

export default TrinitroChase;
