import React from 'react';

export const iconData = {
  "id": "QuestoLiberty",
  "name": "QuestoLiberty",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 12.00 a 9.53 9.53 0 1 0 19.07 0 a 9.53 9.53 0 1 0 -19.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 8.82 a 8.99 2.6962284452915224 0 1 0 17.97 0 a 8.99 2.6962284452915224 0 1 0 -17.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 15.18 a 8.99 2.6962284452915224 0 1 0 17.97 0 a 8.99 2.6962284452915224 0 1 0 -17.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 3.74 A 2 2 0 0 0 16.77 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 16.77 3.74 A 2 2 0 0 1 16.77 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 3.74 A 2 2 0 0 0 7.23 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 3.74 A 2 2 0 0 1 7.23 20.26"
      }
    ]
  ]
};

export const QuestoLiberty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 12.00 a 9.53 9.53 0 1 0 19.07 0 a 9.53 9.53 0 1 0 -19.07 0" />
      <path d="M 3.01 8.82 a 8.99 2.6962284452915224 0 1 0 17.97 0 a 8.99 2.6962284452915224 0 1 0 -17.97 0" />
      <path d="M 3.01 15.18 a 8.99 2.6962284452915224 0 1 0 17.97 0 a 8.99 2.6962284452915224 0 1 0 -17.97 0" />
      <path d="M 16.77 3.74 A 2 2 0 0 0 16.77 20.26" />
      <path d="M 16.77 3.74 A 2 2 0 0 1 16.77 20.26" />
      <path d="M 7.23 3.74 A 2 2 0 0 0 7.23 20.26" />
      <path d="M 7.23 3.74 A 2 2 0 0 1 7.23 20.26" />
      {children}
    </svg>
  );
});

export default QuestoLiberty;
