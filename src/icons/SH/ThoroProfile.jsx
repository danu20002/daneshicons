import React from 'react';

export const iconData = {
  "id": "ThoroProfile",
  "name": "ThoroProfile",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.19 3.11 C 9.76 15.55, 10.13 14.27, 17.84 15.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.98 2.89 C 5.60 6.80, 8.81 8.16, 17.82 19.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 5.26 C 12.69 13.88, 18.36 10.42, 15.96 16.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 2.75 C 12.97 19.89, 13.29 18.16, 15.27 15.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.86 9.54 C 14.35 9.05, 15.44 9.90, 18.15 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 9.31 C 5.65 12.96, 7.60 11.30, 15.05 16.58"
      }
    ]
  ]
};

export const ThoroProfile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.19 3.11 C 9.76 15.55, 10.13 14.27, 17.84 15.04" />
      <path d="M 9.98 2.89 C 5.60 6.80, 8.81 8.16, 17.82 19.69" />
      <path d="M 5.40 5.26 C 12.69 13.88, 18.36 10.42, 15.96 16.37" />
      <path d="M 7.99 2.75 C 12.97 19.89, 13.29 18.16, 15.27 15.65" />
      <path d="M 8.86 9.54 C 14.35 9.05, 15.44 9.90, 18.15 21.65" />
      <path d="M 3.31 9.31 C 5.65 12.96, 7.60 11.30, 15.05 16.58" />
      {children}
    </svg>
  );
});

export default ThoroProfile;
