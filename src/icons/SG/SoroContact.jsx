import React from 'react';

export const iconData = {
  "id": "SoroContact",
  "name": "SoroContact",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.34 12.00 a 3.66 3.66 0 1 0 7.32 0 a 3.66 3.66 0 1 0 -7.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 0 10.94 0 a 5.47 5.47 0 1 0 -10.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.21 0 a 7.11 7.11 0 1 0 -14.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0"
      }
    ]
  ]
};

export const SoroContact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 12.00 a 2.13 2.13 0 1 0 4.26 0 a 2.13 2.13 0 1 0 -4.26 0" stroke-dasharray="4 2" />
      <path d="M 8.34 12.00 a 3.66 3.66 0 1 0 7.32 0 a 3.66 3.66 0 1 0 -7.32 0" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 0 10.94 0 a 5.47 5.47 0 1 0 -10.94 0" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.21 0 a 7.11 7.11 0 1 0 -14.21 0" />
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.06 0 a 8.53 8.53 0 1 0 -17.06 0" />
      {children}
    </svg>
  );
});

export default SoroContact;
