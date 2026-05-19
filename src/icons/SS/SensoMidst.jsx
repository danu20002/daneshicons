import React from 'react';

export const iconData = {
  "id": "SensoMidst",
  "name": "SensoMidst",
  "category": "SS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 12.00 a 7.75 7.75 0 1 0 15.50 0 a 7.75 7.75 0 1 0 -15.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 1 9.81 0 a 4.91 4.91 0 1 1 -9.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.25 12.00 L 21.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 15.92 L 19.78 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 18.60 L 15.84 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 19.18 L 10.68 21.16"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 17.48 L 5.94 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 14.04 L 3.12 14.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 9.96 L 3.12 9.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.25 6.52 L 5.94 5.01"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 4.82 L 10.68 2.84"
      }
    ],
    [
      "path",
      {
        "d": "M 15.01 5.40 L 15.84 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 8.08 L 19.78 7.00"
      }
    ]
  ]
};

export const SensoMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 12.00 a 7.75 7.75 0 1 0 15.50 0 a 7.75 7.75 0 1 0 -15.50 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 1 9.81 0 a 4.91 4.91 0 1 1 -9.81 0" />
      <path d="M 19.25 12.00 L 21.25 12.00" />
      <path d="M 18.10 15.92 L 19.78 17.00" />
      <path d="M 15.01 18.60 L 15.84 20.41" />
      <path d="M 10.97 19.18 L 10.68 21.16" />
      <path d="M 7.25 17.48 L 5.94 18.99" />
      <path d="M 5.04 14.04 L 3.12 14.61" />
      <path d="M 5.04 9.96 L 3.12 9.39" />
      <path d="M 7.25 6.52 L 5.94 5.01" />
      <path d="M 10.97 4.82 L 10.68 2.84" />
      <path d="M 15.01 5.40 L 15.84 3.59" />
      <path d="M 18.10 8.08 L 19.78 7.00" />
      {children}
    </svg>
  );
});

export default SensoMidst;
