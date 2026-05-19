import React from 'react';

export const iconData = {
  "id": "KappaEnhance",
  "name": "KappaEnhance",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 4.12 C 14.16 19.84, 12.13 4.51, 20.10 18.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 2.18 C 8.59 11.86, 13.05 15.63, 17.44 20.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 2.15 C 18.66 8.61, 6.61 14.37, 16.09 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 9.14 C 7.24 11.58, 11.22 8.26, 20.01 14.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 8.01 C 16.89 16.80, 9.19 5.05, 17.68 21.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 5.11 C 8.17 10.10, 9.01 17.58, 18.00 20.53"
      }
    ]
  ]
};

export const KappaEnhance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 4.12 C 14.16 19.84, 12.13 4.51, 20.10 18.82" />
      <path d="M 5.93 2.18 C 8.59 11.86, 13.05 15.63, 17.44 20.66" />
      <path d="M 7.50 2.15 C 18.66 8.61, 6.61 14.37, 16.09 19.97" />
      <path d="M 8.63 9.14 C 7.24 11.58, 11.22 8.26, 20.01 14.60" />
      <path d="M 6.08 8.01 C 16.89 16.80, 9.19 5.05, 17.68 21.93" />
      <path d="M 3.24 5.11 C 8.17 10.10, 9.01 17.58, 18.00 20.53" />
      {children}
    </svg>
  );
});

export default KappaEnhance;
