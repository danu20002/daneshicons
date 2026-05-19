import React from 'react';

export const iconData = {
  "id": "TermoLurk",
  "name": "TermoLurk",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.20 4.07 C 16.96 10.55, 10.13 7.98, 19.46 15.47"
      }
    ],
    [
      "path",
      {
        "d": "M 3.06 8.17 C 16.70 7.30, 10.07 5.08, 18.92 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.42 5.62 C 14.11 8.39, 4.92 7.98, 20.73 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 3.22 C 4.90 6.09, 16.29 11.70, 20.71 17.27"
      }
    ],
    [
      "path",
      {
        "d": "M 9.42 4.47 C 15.49 5.29, 17.69 4.65, 16.86 19.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 4.39 C 19.50 13.90, 7.10 12.61, 16.19 18.68"
      }
    ]
  ]
};

export const TermoLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.20 4.07 C 16.96 10.55, 10.13 7.98, 19.46 15.47" />
      <path d="M 3.06 8.17 C 16.70 7.30, 10.07 5.08, 18.92 17.79" />
      <path d="M 6.42 5.62 C 14.11 8.39, 4.92 7.98, 20.73 20.59" />
      <path d="M 6.79 3.22 C 4.90 6.09, 16.29 11.70, 20.71 17.27" />
      <path d="M 9.42 4.47 C 15.49 5.29, 17.69 4.65, 16.86 19.17" />
      <path d="M 7.92 4.39 C 19.50 13.90, 7.10 12.61, 16.19 18.68" />
      {children}
    </svg>
  );
});

export default TermoLurk;
