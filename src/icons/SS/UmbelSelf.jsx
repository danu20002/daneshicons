import React from 'react';

export const iconData = {
  "id": "UmbelSelf",
  "name": "UmbelSelf",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 12.00 a 5.00 5.00 0 1 1 10.00 0 a 5.00 5.00 0 1 1 -10.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 12.00 L 20.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 15.52 L 19.16 16.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.70 17.92 L 15.53 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 11.07 18.44 L 10.79 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 16.92 L 6.43 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 13.83 L 3.84 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.75 10.17 L 3.84 9.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 7.08 L 6.43 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 11.07 5.56 L 10.79 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 14.70 6.08 L 15.53 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 8.48 L 19.16 7.40"
      }
    ]
  ]
};

export const UmbelSelf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0" />
      <path d="M 7.00 12.00 a 5.00 5.00 0 1 1 10.00 0 a 5.00 5.00 0 1 1 -10.00 0" />
      <path d="M 18.51 12.00 L 20.51 12.00" />
      <path d="M 17.48 15.52 L 19.16 16.60" />
      <path d="M 14.70 17.92 L 15.53 19.74" />
      <path d="M 11.07 18.44 L 10.79 20.42" />
      <path d="M 7.74 16.92 L 6.43 18.43" />
      <path d="M 5.75 13.83 L 3.84 14.40" />
      <path d="M 5.75 10.17 L 3.84 9.60" />
      <path d="M 7.74 7.08 L 6.43 5.57" />
      <path d="M 11.07 5.56 L 10.79 3.58" />
      <path d="M 14.70 6.08 L 15.53 4.26" />
      <path d="M 17.48 8.48 L 19.16 7.40" />
      {children}
    </svg>
  );
});

export default UmbelSelf;
