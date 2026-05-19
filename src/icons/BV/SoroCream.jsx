import React from 'react';

export const iconData = {
  "id": "SoroCream",
  "name": "SoroCream",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 7.41 a 7.95 2.3842499275904494 0 1 0 15.89 0 a 7.95 2.3842499275904494 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 12.00 a 9.18 2.7530946750193834 0 1 0 18.35 0 a 9.18 2.7530946750193834 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 16.59 a 7.95 2.3842499275904494 0 1 0 15.89 0 a 7.95 2.3842499275904494 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.59 4.05 A 2 2 0 0 0 16.59 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 16.59 4.05 A 2 2 0 0 1 16.59 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 4.05 A 2 2 0 0 0 7.41 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.41 4.05 A 2 2 0 0 1 7.41 19.95"
      }
    ]
  ]
};

export const SoroCream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0" />
      <path d="M 4.05 7.41 a 7.95 2.3842499275904494 0 1 0 15.89 0 a 7.95 2.3842499275904494 0 1 0 -15.89 0" />
      <path d="M 2.82 12.00 a 9.18 2.7530946750193834 0 1 0 18.35 0 a 9.18 2.7530946750193834 0 1 0 -18.35 0" />
      <path d="M 4.05 16.59 a 7.95 2.3842499275904494 0 1 0 15.89 0 a 7.95 2.3842499275904494 0 1 0 -15.89 0" />
      <path d="M 16.59 4.05 A 2 2 0 0 0 16.59 19.95" />
      <path d="M 16.59 4.05 A 2 2 0 0 1 16.59 19.95" />
      <path d="M 7.41 4.05 A 2 2 0 0 0 7.41 19.95" />
      <path d="M 7.41 4.05 A 2 2 0 0 1 7.41 19.95" />
      {children}
    </svg>
  );
});

export default SoroCream;
