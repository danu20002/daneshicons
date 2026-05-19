import React from 'react';

export const iconData = {
  "id": "ThalamoCast",
  "name": "ThalamoCast",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 3.54 C 12.53 19.32, 17.01 12.00, 14.43 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.78 5.03 C 12.49 5.02, 4.17 16.03, 15.14 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 6.09 C 5.06 9.22, 18.13 7.20, 17.16 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 3.08 6.86 C 7.51 17.25, 9.27 7.20, 19.77 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 2.04 C 14.16 15.26, 19.92 12.16, 18.76 14.41"
      }
    ]
  ]
};

export const ThalamoCast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 3.54 C 12.53 19.32, 17.01 12.00, 14.43 20.64" />
      <path d="M 8.78 5.03 C 12.49 5.02, 4.17 16.03, 15.14 20.81" />
      <path d="M 8.25 6.09 C 5.06 9.22, 18.13 7.20, 17.16 18.45" />
      <path d="M 3.08 6.86 C 7.51 17.25, 9.27 7.20, 19.77 17.47" />
      <path d="M 3.93 2.04 C 14.16 15.26, 19.92 12.16, 18.76 14.41" />
      {children}
    </svg>
  );
});

export default ThalamoCast;
