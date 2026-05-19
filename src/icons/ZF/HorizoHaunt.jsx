import React from 'react';

export const iconData = {
  "id": "HorizoHaunt",
  "name": "HorizoHaunt",
  "category": "ZF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 7.09 a 8.51 2.5528048769358853 0 1 0 17.02 0 a 8.51 2.5528048769358853 0 1 0 -17.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 2.947725165775046 0 1 0 19.65 0 a 9.83 2.947725165775046 0 1 0 -19.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 16.91 a 8.51 2.5528048769358853 0 1 0 17.02 0 a 8.51 2.5528048769358853 0 1 0 -17.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 5.05 A 2 2 0 0 0 18.95 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 18.95 5.05 A 2 2 0 0 1 18.95 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 0 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.17 A 2 2 0 0 1 12.00 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 5.05 A 2 2 0 0 0 5.05 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 5.05 A 2 2 0 0 1 5.05 18.95"
      }
    ]
  ]
};

export const HorizoHaunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.65 0 a 9.83 9.83 0 1 0 -19.65 0" />
      <path d="M 3.49 7.09 a 8.51 2.5528048769358853 0 1 0 17.02 0 a 8.51 2.5528048769358853 0 1 0 -17.02 0" />
      <path d="M 2.17 12.00 a 9.83 2.947725165775046 0 1 0 19.65 0 a 9.83 2.947725165775046 0 1 0 -19.65 0" />
      <path d="M 3.49 16.91 a 8.51 2.5528048769358853 0 1 0 17.02 0 a 8.51 2.5528048769358853 0 1 0 -17.02 0" />
      <path d="M 18.95 5.05 A 2 2 0 0 0 18.95 18.95" />
      <path d="M 18.95 5.05 A 2 2 0 0 1 18.95 18.95" />
      <path d="M 12.00 2.17 A 2 2 0 0 0 12.00 21.83" />
      <path d="M 12.00 2.17 A 2 2 0 0 1 12.00 21.83" />
      <path d="M 5.05 5.05 A 2 2 0 0 0 5.05 18.95" />
      <path d="M 5.05 5.05 A 2 2 0 0 1 5.05 18.95" />
      {children}
    </svg>
  );
});

export default HorizoHaunt;
