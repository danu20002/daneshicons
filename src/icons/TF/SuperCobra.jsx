import React from 'react';

export const iconData = {
  "id": "SuperCobra",
  "name": "SuperCobra",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 7.17 C 4.77 4.68, 9.00 10.26, 8.38 5.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 19.30 A 3.11 3.80 37 0 1 15.00 3.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.67 4.38 Q 8.93 18.12 17.14 16.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 7.17 L 11.24 12.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 18.82 C 11.39 18.14, 7.49 12.82, 3.54 11.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 15.36 L 8.57 17.49"
      }
    ]
  ]
};

export const SuperCobra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 7.17 C 4.77 4.68, 9.00 10.26, 8.38 5.80" />
      <path d="M 7.76 19.30 A 3.11 3.80 37 0 1 15.00 3.71" />
      <path d="M 12.67 4.38 Q 8.93 18.12 17.14 16.65" />
      <path d="M 16.93 7.17 L 11.24 12.93" />
      <path d="M 7.01 18.82 C 11.39 18.14, 7.49 12.82, 3.54 11.42" />
      <path d="M 16.67 15.36 L 8.57 17.49" />
      {children}
    </svg>
  );
});

export default SuperCobra;
