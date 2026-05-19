import React from 'react';

export const iconData = {
  "id": "CryoMuster",
  "name": "CryoMuster",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 1 12.15 0 a 6.07 6.07 0 1 1 -12.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 12.00 L 21.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.47 16.59 L 19.00 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 19.03 L 13.59 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 18.18 L 7.43 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 14.44 L 3.41 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 9.56 L 3.41 8.87"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 5.82 L 7.43 4.09"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 4.97 L 13.59 3.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.47 7.41 L 19.00 6.13"
      }
    ]
  ]
};

export const CryoMuster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.28 0 a 7.64 7.64 0 1 0 -15.28 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 1 12.15 0 a 6.07 6.07 0 1 1 -12.15 0" />
      <path d="M 19.14 12.00 L 21.14 12.00" />
      <path d="M 17.47 16.59 L 19.00 17.87" />
      <path d="M 13.24 19.03 L 13.59 21.00" />
      <path d="M 8.43 18.18 L 7.43 19.91" />
      <path d="M 5.29 14.44 L 3.41 15.13" />
      <path d="M 5.29 9.56 L 3.41 8.87" />
      <path d="M 8.43 5.82 L 7.43 4.09" />
      <path d="M 13.24 4.97 L 13.59 3.00" />
      <path d="M 17.47 7.41 L 19.00 6.13" />
      {children}
    </svg>
  );
});

export default CryoMuster;
