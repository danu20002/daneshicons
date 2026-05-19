import React from 'react';

export const iconData = {
  "id": "SoroFinite",
  "name": "SoroFinite",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 6.00 C 15.59 15.21, 6.90 17.15, 18.84 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 7.80 C 5.22 13.39, 5.18 13.14, 17.18 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 4.36 C 10.34 4.30, 9.29 11.91, 19.00 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 8.25 C 17.48 4.04, 13.33 18.67, 18.12 17.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 8.39 C 16.21 18.12, 19.52 19.20, 19.96 19.38"
      }
    ]
  ]
};

export const SoroFinite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 6.00 C 15.59 15.21, 6.90 17.15, 18.84 14.78" />
      <path d="M 6.08 7.80 C 5.22 13.39, 5.18 13.14, 17.18 18.33" />
      <path d="M 5.61 4.36 C 10.34 4.30, 9.29 11.91, 19.00 19.52" />
      <path d="M 7.55 8.25 C 17.48 4.04, 13.33 18.67, 18.12 17.95" />
      <path d="M 8.68 8.39 C 16.21 18.12, 19.52 19.20, 19.96 19.38" />
      {children}
    </svg>
  );
});

export default SoroFinite;
