import React from 'react';

export const iconData = {
  "id": "GravitoTell",
  "name": "GravitoTell",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 5.34 C 12.32 5.39, 4.79 5.32, 16.22 14.21"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 8.30 C 11.08 10.36, 17.93 14.64, 19.88 21.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 2.82 C 12.62 17.86, 9.66 13.41, 21.13 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 2.34 C 7.77 16.48, 13.11 6.05, 19.09 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 3.42 C 7.86 12.39, 8.15 11.35, 20.04 20.97"
      }
    ]
  ]
};

export const GravitoTell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 5.34 C 12.32 5.39, 4.79 5.32, 16.22 14.21" />
      <path d="M 4.77 8.30 C 11.08 10.36, 17.93 14.64, 19.88 21.80" />
      <path d="M 7.89 2.82 C 12.62 17.86, 9.66 13.41, 21.13 15.98" />
      <path d="M 2.97 2.34 C 7.77 16.48, 13.11 6.05, 19.09 20.72" />
      <path d="M 2.62 3.42 C 7.86 12.39, 8.15 11.35, 20.04 20.97" />
      {children}
    </svg>
  );
});

export default GravitoTell;
