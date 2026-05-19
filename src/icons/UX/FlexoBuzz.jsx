import React from 'react';

export const iconData = {
  "id": "FlexoBuzz",
  "name": "FlexoBuzz",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 8.84 0 1 0 17.67 0 a 8.84 8.84 0 1 0 -17.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 12.00 a 7.14 7.14 0 1 1 14.27 0 a 7.14 7.14 0 1 1 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 12.00 L 22.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 16.51 L 20.70 17.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.46 19.58 L 16.29 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 20.25 L 10.53 22.23"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 18.30 L 5.23 19.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 14.35 L 2.08 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 9.65 L 2.08 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 5.70 L 5.23 4.19"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 3.75 L 10.53 1.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.46 4.42 L 16.29 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 7.49 L 20.70 6.41"
      }
    ]
  ]
};

export const FlexoBuzz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 12.00 a 8.84 8.84 0 1 0 17.67 0 a 8.84 8.84 0 1 0 -17.67 0" />
      <path d="M 4.86 12.00 a 7.14 7.14 0 1 1 14.27 0 a 7.14 7.14 0 1 1 -14.27 0" />
      <path d="M 20.34 12.00 L 22.34 12.00" />
      <path d="M 19.01 16.51 L 20.70 17.59" />
      <path d="M 15.46 19.58 L 16.29 21.40" />
      <path d="M 10.81 20.25 L 10.53 22.23" />
      <path d="M 6.54 18.30 L 5.23 19.81" />
      <path d="M 4.00 14.35 L 2.08 14.91" />
      <path d="M 4.00 9.65 L 2.08 9.09" />
      <path d="M 6.54 5.70 L 5.23 4.19" />
      <path d="M 10.81 3.75 L 10.53 1.77" />
      <path d="M 15.46 4.42 L 16.29 2.60" />
      <path d="M 19.01 7.49 L 20.70 6.41" />
      {children}
    </svg>
  );
});

export default FlexoBuzz;
