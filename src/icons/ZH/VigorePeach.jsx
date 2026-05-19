import React from 'react';

export const iconData = {
  "id": "VigorePeach",
  "name": "VigorePeach",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.65 0 a 7.82 7.82 0 1 0 -15.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 1 10.80 0 a 5.40 5.40 0 1 1 -10.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 12.00 L 21.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.18 17.18 L 18.59 18.59"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.32 L 12.00 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 17.18 L 5.41 18.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 12.00 L 2.68 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.82 6.82 L 5.41 5.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.68 L 12.00 2.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.18 6.82 L 18.59 5.41"
      }
    ]
  ]
};

export const VigorePeach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.65 0 a 7.82 7.82 0 1 0 -15.65 0" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 1 10.80 0 a 5.40 5.40 0 1 1 -10.80 0" />
      <path d="M 19.32 12.00 L 21.32 12.00" />
      <path d="M 17.18 17.18 L 18.59 18.59" />
      <path d="M 12.00 19.32 L 12.00 21.32" />
      <path d="M 6.82 17.18 L 5.41 18.59" />
      <path d="M 4.68 12.00 L 2.68 12.00" />
      <path d="M 6.82 6.82 L 5.41 5.41" />
      <path d="M 12.00 4.68 L 12.00 2.68" />
      <path d="M 17.18 6.82 L 18.59 5.41" />
      {children}
    </svg>
  );
});

export default VigorePeach;
