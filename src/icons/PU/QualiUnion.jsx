import React from 'react';

export const iconData = {
  "id": "QualiUnion",
  "name": "QualiUnion",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.36 12.00 a 7.64 7.64 0 1 0 15.29 0 a 7.64 7.64 0 1 0 -15.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0"
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
        "d": "M 16.45 17.59 L 17.70 19.15"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 18.97 L 9.97 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 15.10 L 3.76 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 8.90 L 3.76 8.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.41 5.03 L 9.97 3.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.45 6.41 L 17.70 4.85"
      }
    ]
  ]
};

export const QualiUnion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.36 12.00 a 7.64 7.64 0 1 0 15.29 0 a 7.64 7.64 0 1 0 -15.29 0" />
      <path d="M 6.43 12.00 a 5.57 5.57 0 1 1 11.15 0 a 5.57 5.57 0 1 1 -11.15 0" />
      <path d="M 19.14 12.00 L 21.14 12.00" />
      <path d="M 16.45 17.59 L 17.70 19.15" />
      <path d="M 10.41 18.97 L 9.97 20.92" />
      <path d="M 5.56 15.10 L 3.76 15.97" />
      <path d="M 5.56 8.90 L 3.76 8.03" />
      <path d="M 10.41 5.03 L 9.97 3.08" />
      <path d="M 16.45 6.41 L 17.70 4.85" />
      {children}
    </svg>
  );
});

export default QualiUnion;
