import React from 'react';

export const iconData = {
  "id": "TaloPlow",
  "name": "TaloPlow",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.92 8.04 C 17.62 7.11, 4.82 13.42, 18.64 17.72"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 6.51 C 7.40 11.54, 6.36 4.27, 19.33 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 8.20 C 5.90 14.45, 16.10 16.72, 15.56 21.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 4.36 C 13.38 14.78, 12.34 9.01, 18.09 19.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 2.16 C 11.27 6.23, 7.40 14.37, 16.59 21.85"
      }
    ]
  ]
};

export const TaloPlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.92 8.04 C 17.62 7.11, 4.82 13.42, 18.64 17.72" />
      <path d="M 9.69 6.51 C 7.40 11.54, 6.36 4.27, 19.33 19.54" />
      <path d="M 7.43 8.20 C 5.90 14.45, 16.10 16.72, 15.56 21.95" />
      <path d="M 3.83 4.36 C 13.38 14.78, 12.34 9.01, 18.09 19.64" />
      <path d="M 7.19 2.16 C 11.27 6.23, 7.40 14.37, 16.59 21.85" />
      {children}
    </svg>
  );
});

export default TaloPlow;
