import React from 'react';

export const iconData = {
  "id": "RenoRustic",
  "name": "RenoRustic",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 12.00 a 7.34 7.34 0 1 0 14.67 0 a 7.34 7.34 0 1 0 -14.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 1 10.05 0 a 5.02 5.02 0 1 1 -10.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.84 12.00 L 20.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 15.70 L 19.43 16.78"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 18.22 L 15.67 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 11.03 18.77 L 10.74 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 17.17 L 6.21 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 13.93 L 3.52 14.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.44 10.07 L 3.52 9.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.52 6.83 L 6.21 5.32"
      }
    ],
    [
      "path",
      {
        "d": "M 11.03 5.23 L 10.74 3.25"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 5.78 L 15.67 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 8.30 L 19.43 7.22"
      }
    ]
  ]
};

export const RenoRustic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 12.00 a 7.34 7.34 0 1 0 14.67 0 a 7.34 7.34 0 1 0 -14.67 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 1 10.05 0 a 5.02 5.02 0 1 1 -10.05 0" />
      <path d="M 18.84 12.00 L 20.84 12.00" />
      <path d="M 17.75 15.70 L 19.43 16.78" />
      <path d="M 14.84 18.22 L 15.67 20.04" />
      <path d="M 11.03 18.77 L 10.74 20.75" />
      <path d="M 7.52 17.17 L 6.21 18.68" />
      <path d="M 5.44 13.93 L 3.52 14.49" />
      <path d="M 5.44 10.07 L 3.52 9.51" />
      <path d="M 7.52 6.83 L 6.21 5.32" />
      <path d="M 11.03 5.23 L 10.74 3.25" />
      <path d="M 14.84 5.78 L 15.67 3.96" />
      <path d="M 17.75 8.30 L 19.43 7.22" />
      {children}
    </svg>
  );
});

export default RenoRustic;
