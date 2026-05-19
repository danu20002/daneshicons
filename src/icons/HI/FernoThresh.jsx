import React from 'react';

export const iconData = {
  "id": "FernoThresh",
  "name": "FernoThresh",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 5.84 C 16.22 7.76, 13.19 12.73, 16.63 21.93"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 5.04 C 19.90 7.04, 17.08 16.33, 19.18 16.32"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 6.45 C 15.33 12.68, 5.56 9.21, 17.48 19.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 2.51 C 5.89 5.23, 6.11 14.35, 15.92 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 2.41 C 15.85 7.69, 7.07 17.83, 14.75 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 9.60 C 15.69 11.86, 8.53 16.73, 16.94 19.58"
      }
    ]
  ]
};

export const FernoThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 5.84 C 16.22 7.76, 13.19 12.73, 16.63 21.93" />
      <path d="M 7.05 5.04 C 19.90 7.04, 17.08 16.33, 19.18 16.32" />
      <path d="M 3.45 6.45 C 15.33 12.68, 5.56 9.21, 17.48 19.00" />
      <path d="M 4.33 2.51 C 5.89 5.23, 6.11 14.35, 15.92 19.54" />
      <path d="M 3.40 2.41 C 15.85 7.69, 7.07 17.83, 14.75 14.42" />
      <path d="M 7.80 9.60 C 15.69 11.86, 8.53 16.73, 16.94 19.58" />
      {children}
    </svg>
  );
});

export default FernoThresh;
