import React from 'react';

export const iconData = {
  "id": "IgniVoid",
  "name": "IgniVoid",
  "category": "WJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 12.00 a 5.25 5.25 0 1 1 10.49 0 a 5.25 5.25 0 1 1 -10.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 12.00 L 21.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.07 15.90 L 19.76 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.00 18.57 L 15.83 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 19.15 L 10.69 21.13"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 17.46 L 5.96 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 14.03 L 3.15 14.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 9.97 L 3.15 9.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 6.54 L 5.96 5.03"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 4.85 L 10.69 2.87"
      }
    ],
    [
      "path",
      {
        "d": "M 15.00 5.43 L 15.83 3.61"
      }
    ],
    [
      "path",
      {
        "d": "M 18.07 8.10 L 19.76 7.02"
      }
    ]
  ]
};

export const IgniVoid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 12.00 a 7.72 7.72 0 1 0 15.44 0 a 7.72 7.72 0 1 0 -15.44 0" />
      <path d="M 6.75 12.00 a 5.25 5.25 0 1 1 10.49 0 a 5.25 5.25 0 1 1 -10.49 0" />
      <path d="M 19.22 12.00 L 21.22 12.00" />
      <path d="M 18.07 15.90 L 19.76 16.98" />
      <path d="M 15.00 18.57 L 15.83 20.39" />
      <path d="M 10.97 19.15 L 10.69 21.13" />
      <path d="M 7.27 17.46 L 5.96 18.97" />
      <path d="M 5.07 14.03 L 3.15 14.60" />
      <path d="M 5.07 9.97 L 3.15 9.40" />
      <path d="M 7.27 6.54 L 5.96 5.03" />
      <path d="M 10.97 4.85 L 10.69 2.87" />
      <path d="M 15.00 5.43 L 15.83 3.61" />
      <path d="M 18.07 8.10 L 19.76 7.02" />
      {children}
    </svg>
  );
});

export default IgniVoid;
