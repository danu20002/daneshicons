import React from 'react';

export const iconData = {
  "id": "TracheoIndex",
  "name": "TracheoIndex",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 12.00 a 9.86 9.86 0 1 0 19.72 0 a 9.86 9.86 0 1 0 -19.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 8.71 a 9.30 2.7885284929214817 0 1 0 18.59 0 a 9.30 2.7885284929214817 0 1 0 -18.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 15.29 a 9.30 2.7885284929214813 0 1 0 18.59 0 a 9.30 2.7885284929214813 0 1 0 -18.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 3.46 A 2 2 0 0 0 16.93 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 3.46 A 2 2 0 0 1 16.93 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.46 A 2 2 0 0 0 7.07 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.46 A 2 2 0 0 1 7.07 20.54"
      }
    ]
  ]
};

export const TracheoIndex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 12.00 a 9.86 9.86 0 1 0 19.72 0 a 9.86 9.86 0 1 0 -19.72 0" />
      <path d="M 2.70 8.71 a 9.30 2.7885284929214817 0 1 0 18.59 0 a 9.30 2.7885284929214817 0 1 0 -18.59 0" />
      <path d="M 2.70 15.29 a 9.30 2.7885284929214813 0 1 0 18.59 0 a 9.30 2.7885284929214813 0 1 0 -18.59 0" />
      <path d="M 16.93 3.46 A 2 2 0 0 0 16.93 20.54" />
      <path d="M 16.93 3.46 A 2 2 0 0 1 16.93 20.54" />
      <path d="M 7.07 3.46 A 2 2 0 0 0 7.07 20.54" />
      <path d="M 7.07 3.46 A 2 2 0 0 1 7.07 20.54" />
      {children}
    </svg>
  );
});

export default TracheoIndex;
