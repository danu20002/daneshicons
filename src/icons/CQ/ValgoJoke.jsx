import React from 'react';

export const iconData = {
  "id": "ValgoJoke",
  "name": "ValgoJoke",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 12.00 a 8.20 8.20 0 1 0 16.40 0 a 8.20 8.20 0 1 0 -16.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 12.00 a 5.55 5.55 0 1 1 11.10 0 a 5.55 5.55 0 1 1 -11.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 12.00 L 21.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.48 16.16 L 20.16 17.25"
      }
    ],
    [
      "path",
      {
        "d": "M 15.20 19.01 L 16.03 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 19.62 L 10.62 21.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 17.82 L 5.65 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 14.17 L 2.69 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 9.83 L 2.69 9.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 6.18 L 5.65 4.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 4.38 L 10.62 2.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.20 4.99 L 16.03 3.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.48 7.84 L 20.16 6.75"
      }
    ]
  ]
};

export const ValgoJoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 12.00 a 8.20 8.20 0 1 0 16.40 0 a 8.20 8.20 0 1 0 -16.40 0" />
      <path d="M 6.45 12.00 a 5.55 5.55 0 1 1 11.10 0 a 5.55 5.55 0 1 1 -11.10 0" />
      <path d="M 19.70 12.00 L 21.70 12.00" />
      <path d="M 18.48 16.16 L 20.16 17.25" />
      <path d="M 15.20 19.01 L 16.03 20.83" />
      <path d="M 10.90 19.62 L 10.62 21.60" />
      <path d="M 6.96 17.82 L 5.65 19.33" />
      <path d="M 4.61 14.17 L 2.69 14.73" />
      <path d="M 4.61 9.83 L 2.69 9.27" />
      <path d="M 6.96 6.18 L 5.65 4.67" />
      <path d="M 10.90 4.38 L 10.62 2.40" />
      <path d="M 15.20 4.99 L 16.03 3.17" />
      <path d="M 18.48 7.84 L 20.16 6.75" />
      {children}
    </svg>
  );
});

export default ValgoJoke;
