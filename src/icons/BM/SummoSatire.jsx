import React from 'react';

export const iconData = {
  "id": "SummoSatire",
  "name": "SummoSatire",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.72 9.41 C 18.49 5.34, 19.90 10.70, 19.58 17.08"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 3.21 C 8.81 12.08, 11.73 14.32, 16.18 19.81"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.25 C 13.28 6.38, 16.96 7.23, 18.99 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 2.39 C 10.60 8.90, 16.88 4.30, 16.39 15.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 7.50 C 7.16 17.72, 13.54 18.75, 14.39 15.50"
      }
    ]
  ]
};

export const SummoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.72 9.41 C 18.49 5.34, 19.90 10.70, 19.58 17.08" />
      <path d="M 7.28 3.21 C 8.81 12.08, 11.73 14.32, 16.18 19.81" />
      <path d="M 6.33 6.25 C 13.28 6.38, 16.96 7.23, 18.99 21.05" />
      <path d="M 4.69 2.39 C 10.60 8.90, 16.88 4.30, 16.39 15.58" />
      <path d="M 5.95 7.50 C 7.16 17.72, 13.54 18.75, 14.39 15.50" />
      {children}
    </svg>
  );
});

export default SummoSatire;
