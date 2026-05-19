import React from 'react';

export const iconData = {
  "id": "ResoMerit",
  "name": "ResoMerit",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 12.00 a 6.02 6.02 0 1 1 12.05 0 a 6.02 6.02 0 1 1 -12.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 12.00 L 21.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.39 16.64 L 20.00 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 19.51 L 15.06 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 19.51 L 8.94 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 16.64 L 4.00 17.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 12.00 L 2.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 7.36 L 4.00 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 4.49 L 8.94 2.59"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 4.49 L 15.06 2.59"
      }
    ],
    [
      "path",
      {
        "d": "M 18.39 7.36 L 20.00 6.18"
      }
    ]
  ]
};

export const ResoMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0" />
      <path d="M 5.98 12.00 a 6.02 6.02 0 1 1 12.05 0 a 6.02 6.02 0 1 1 -12.05 0" />
      <path d="M 19.89 12.00 L 21.89 12.00" />
      <path d="M 18.39 16.64 L 20.00 17.82" />
      <path d="M 14.44 19.51 L 15.06 21.41" />
      <path d="M 9.56 19.51 L 8.94 21.41" />
      <path d="M 5.61 16.64 L 4.00 17.82" />
      <path d="M 4.11 12.00 L 2.11 12.00" />
      <path d="M 5.61 7.36 L 4.00 6.18" />
      <path d="M 9.56 4.49 L 8.94 2.59" />
      <path d="M 14.44 4.49 L 15.06 2.59" />
      <path d="M 18.39 7.36 L 20.00 6.18" />
      {children}
    </svg>
  );
});

export default ResoMerit;
