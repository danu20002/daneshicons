import React from 'react';

export const iconData = {
  "id": "UbertoImpulse",
  "name": "UbertoImpulse",
  "category": "PB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 12.00 a 4.95 4.95 0 1 1 9.89 0 a 4.95 4.95 0 1 1 -9.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 12.00 L 20.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 15.40 L 19.61 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 17.88 L 16.40 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.79 L 12.00 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 17.88 L 7.60 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 15.40 L 4.39 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 12.00 L 3.21 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 8.60 L 4.39 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 6.12 L 7.60 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.21 L 12.00 3.21"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 6.12 L 16.40 4.39"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 8.60 L 19.61 7.60"
      }
    ]
  ]
};

export const UbertoImpulse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 12.00 a 7.29 7.29 0 1 0 14.58 0 a 7.29 7.29 0 1 0 -14.58 0" />
      <path d="M 7.05 12.00 a 4.95 4.95 0 1 1 9.89 0 a 4.95 4.95 0 1 1 -9.89 0" />
      <path d="M 18.79 12.00 L 20.79 12.00" />
      <path d="M 17.88 15.40 L 19.61 16.40" />
      <path d="M 15.40 17.88 L 16.40 19.61" />
      <path d="M 12.00 18.79 L 12.00 20.79" />
      <path d="M 8.60 17.88 L 7.60 19.61" />
      <path d="M 6.12 15.40 L 4.39 16.40" />
      <path d="M 5.21 12.00 L 3.21 12.00" />
      <path d="M 6.12 8.60 L 4.39 7.60" />
      <path d="M 8.60 6.12 L 7.60 4.39" />
      <path d="M 12.00 5.21 L 12.00 3.21" />
      <path d="M 15.40 6.12 L 16.40 4.39" />
      <path d="M 17.88 8.60 L 19.61 7.60" />
      {children}
    </svg>
  );
});

export default UbertoImpulse;
