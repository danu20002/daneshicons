import React from 'react';

export const iconData = {
  "id": "OraclePreview",
  "name": "OraclePreview",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.07 3.21 C 7.07 4.59, 17.64 4.13, 19.64 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.03 9.12 C 5.81 10.34, 17.94 15.18, 20.11 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 7.17 C 7.21 18.22, 19.04 12.73, 18.93 14.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 3.53 C 14.45 18.34, 11.95 13.70, 21.86 20.54"
      }
    ]
  ]
};

export const OraclePreview = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.07 3.21 C 7.07 4.59, 17.64 4.13, 19.64 19.56" />
      <path d="M 9.03 9.12 C 5.81 10.34, 17.94 15.18, 20.11 14.09" />
      <path d="M 7.62 7.17 C 7.21 18.22, 19.04 12.73, 18.93 14.35" />
      <path d="M 7.71 3.53 C 14.45 18.34, 11.95 13.70, 21.86 20.54" />
      {children}
    </svg>
  );
});

export default OraclePreview;
