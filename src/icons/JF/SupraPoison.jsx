import React from 'react';

export const iconData = {
  "id": "SupraPoison",
  "name": "SupraPoison",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.19 12.00 a 7.81 7.81 0 1 0 15.62 0 a 7.81 7.81 0 1 0 -15.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 12.00 a 5.10 5.10 0 1 1 10.20 0 a 5.10 5.10 0 1 1 -10.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 12.00 L 21.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.15 15.95 L 19.83 17.03"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 18.65 L 15.87 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 19.24 L 10.68 21.22"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 17.52 L 5.90 19.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 14.06 L 3.07 14.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.99 9.94 L 3.07 9.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 6.48 L 5.90 4.96"
      }
    ],
    [
      "path",
      {
        "d": "M 10.96 4.76 L 10.68 2.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 5.35 L 15.87 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 18.15 8.05 L 19.83 6.97"
      }
    ]
  ]
};

export const SupraPoison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.19 12.00 a 7.81 7.81 0 1 0 15.62 0 a 7.81 7.81 0 1 0 -15.62 0" />
      <path d="M 6.90 12.00 a 5.10 5.10 0 1 1 10.20 0 a 5.10 5.10 0 1 1 -10.20 0" />
      <path d="M 19.31 12.00 L 21.31 12.00" />
      <path d="M 18.15 15.95 L 19.83 17.03" />
      <path d="M 15.04 18.65 L 15.87 20.47" />
      <path d="M 10.96 19.24 L 10.68 21.22" />
      <path d="M 7.21 17.52 L 5.90 19.04" />
      <path d="M 4.99 14.06 L 3.07 14.62" />
      <path d="M 4.99 9.94 L 3.07 9.38" />
      <path d="M 7.21 6.48 L 5.90 4.96" />
      <path d="M 10.96 4.76 L 10.68 2.78" />
      <path d="M 15.04 5.35 L 15.87 3.53" />
      <path d="M 18.15 8.05 L 19.83 6.97" />
      {children}
    </svg>
  );
});

export default SupraPoison;
