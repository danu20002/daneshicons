import React from 'react';

export const iconData = {
  "id": "TrocleaScholar",
  "name": "TrocleaScholar",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 12.00 a 9.40 9.40 0 1 0 18.80 0 a 9.40 9.40 0 1 0 -18.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 12.00 a 9.40 2.819594982918352 0 1 0 18.80 0 a 9.40 2.819594982918352 0 1 0 -18.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 3.86 A 2 2 0 0 0 16.70 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 3.86 A 2 2 0 0 1 16.70 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 3.86 A 2 2 0 0 0 7.30 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 3.86 A 2 2 0 0 1 7.30 20.14"
      }
    ]
  ]
};

export const TrocleaScholar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 12.00 a 9.40 9.40 0 1 0 18.80 0 a 9.40 9.40 0 1 0 -18.80 0" />
      <path d="M 2.60 12.00 a 9.40 2.819594982918352 0 1 0 18.80 0 a 9.40 2.819594982918352 0 1 0 -18.80 0" />
      <path d="M 16.70 3.86 A 2 2 0 0 0 16.70 20.14" />
      <path d="M 16.70 3.86 A 2 2 0 0 1 16.70 20.14" />
      <path d="M 7.30 3.86 A 2 2 0 0 0 7.30 20.14" />
      <path d="M 7.30 3.86 A 2 2 0 0 1 7.30 20.14" />
      {children}
    </svg>
  );
});

export default TrocleaScholar;
