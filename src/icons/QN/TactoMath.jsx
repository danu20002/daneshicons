import React from 'react';

export const iconData = {
  "id": "TactoMath",
  "name": "TactoMath",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 12.00 a 8.08 8.08 0 1 0 16.15 0 a 8.08 8.08 0 1 0 -16.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 12.00 L 21.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 15.79 L 20.29 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 18.56 L 16.79 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.58 L 12.00 21.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 18.56 L 7.21 20.29"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 15.79 L 3.71 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 12.00 L 2.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 8.21 L 3.71 7.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 5.44 L 7.21 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.42 L 12.00 2.42"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 5.44 L 16.79 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 8.21 L 20.29 7.21"
      }
    ]
  ]
};

export const TactoMath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 12.00 a 8.08 8.08 0 1 0 16.15 0 a 8.08 8.08 0 1 0 -16.15 0" />
      <path d="M 5.88 12.00 a 6.12 6.12 0 1 1 12.25 0 a 6.12 6.12 0 1 1 -12.25 0" />
      <path d="M 19.58 12.00 L 21.58 12.00" />
      <path d="M 18.56 15.79 L 20.29 16.79" />
      <path d="M 15.79 18.56 L 16.79 20.29" />
      <path d="M 12.00 19.58 L 12.00 21.58" />
      <path d="M 8.21 18.56 L 7.21 20.29" />
      <path d="M 5.44 15.79 L 3.71 16.79" />
      <path d="M 4.42 12.00 L 2.42 12.00" />
      <path d="M 5.44 8.21 L 3.71 7.21" />
      <path d="M 8.21 5.44 L 7.21 3.71" />
      <path d="M 12.00 4.42 L 12.00 2.42" />
      <path d="M 15.79 5.44 L 16.79 3.71" />
      <path d="M 18.56 8.21 L 20.29 7.21" />
      {children}
    </svg>
  );
});

export default TactoMath;
