import React from 'react';

export const iconData = {
  "id": "ZombiStrange",
  "name": "ZombiStrange",
  "category": "JW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.83 12.00 a 9.17 9.17 0 1 0 18.34 0 a 9.17 9.17 0 1 0 -18.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 7.42 a 7.94 2.3821707711160895 0 1 0 15.88 0 a 7.94 2.3821707711160895 0 1 0 -15.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 12.00 a 9.17 2.7506938719190654 0 1 0 18.34 0 a 9.17 2.7506938719190654 0 1 0 -18.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 16.58 a 7.94 2.3821707711160895 0 1 0 15.88 0 a 7.94 2.3821707711160895 0 1 0 -15.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 4.06 A 2 2 0 0 0 16.58 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 16.58 4.06 A 2 2 0 0 1 16.58 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 4.06 A 2 2 0 0 0 7.42 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.42 4.06 A 2 2 0 0 1 7.42 19.94"
      }
    ]
  ]
};

export const ZombiStrange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.83 12.00 a 9.17 9.17 0 1 0 18.34 0 a 9.17 9.17 0 1 0 -18.34 0" />
      <path d="M 4.06 7.42 a 7.94 2.3821707711160895 0 1 0 15.88 0 a 7.94 2.3821707711160895 0 1 0 -15.88 0" />
      <path d="M 2.83 12.00 a 9.17 2.7506938719190654 0 1 0 18.34 0 a 9.17 2.7506938719190654 0 1 0 -18.34 0" />
      <path d="M 4.06 16.58 a 7.94 2.3821707711160895 0 1 0 15.88 0 a 7.94 2.3821707711160895 0 1 0 -15.88 0" />
      <path d="M 16.58 4.06 A 2 2 0 0 0 16.58 19.94" />
      <path d="M 16.58 4.06 A 2 2 0 0 1 16.58 19.94" />
      <path d="M 7.42 4.06 A 2 2 0 0 0 7.42 19.94" />
      <path d="M 7.42 4.06 A 2 2 0 0 1 7.42 19.94" />
      {children}
    </svg>
  );
});

export default ZombiStrange;
