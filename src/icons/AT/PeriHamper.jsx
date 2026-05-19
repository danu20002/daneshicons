import React from 'react';

export const iconData = {
  "id": "PeriHamper",
  "name": "PeriHamper",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.46 2.64 C 6.98 7.65, 14.90 18.67, 20.59 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.98 3.94 C 15.88 18.76, 14.96 13.24, 15.19 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 5.20 C 15.01 19.06, 13.90 17.02, 15.97 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 3.16 C 4.30 4.40, 12.93 7.89, 20.09 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 8.75 C 6.90 9.23, 16.80 16.16, 21.73 17.82"
      }
    ]
  ]
};

export const PeriHamper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.46 2.64 C 6.98 7.65, 14.90 18.67, 20.59 16.06" />
      <path d="M 9.98 3.94 C 15.88 18.76, 14.96 13.24, 15.19 21.12" />
      <path d="M 5.36 5.20 C 15.01 19.06, 13.90 17.02, 15.97 21.86" />
      <path d="M 3.64 3.16 C 4.30 4.40, 12.93 7.89, 20.09 17.97" />
      <path d="M 4.74 8.75 C 6.90 9.23, 16.80 16.16, 21.73 17.82" />
      {children}
    </svg>
  );
});

export default PeriHamper;
