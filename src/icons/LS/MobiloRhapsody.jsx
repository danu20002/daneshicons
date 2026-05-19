import React from 'react';

export const iconData = {
  "id": "MobiloRhapsody",
  "name": "MobiloRhapsody",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.24 2.05 C 18.18 19.05, 14.99 16.76, 17.19 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 7.29 C 16.42 9.42, 14.19 16.66, 17.72 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 8.50 C 5.25 18.13, 18.93 11.48, 18.89 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 7.70 C 13.04 8.83, 10.59 16.52, 18.86 20.95"
      }
    ]
  ]
};

export const MobiloRhapsody = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.24 2.05 C 18.18 19.05, 14.99 16.76, 17.19 16.88" />
      <path d="M 6.18 7.29 C 16.42 9.42, 14.19 16.66, 17.72 20.65" />
      <path d="M 2.65 8.50 C 5.25 18.13, 18.93 11.48, 18.89 20.02" />
      <path d="M 4.98 7.70 C 13.04 8.83, 10.59 16.52, 18.86 20.95" />
      {children}
    </svg>
  );
});

export default MobiloRhapsody;
