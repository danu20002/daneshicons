import React from 'react';

export const iconData = {
  "id": "ObsidiMend",
  "name": "ObsidiMend",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 7.13 a 6.50 1.948975514508784 0 1 0 12.99 0 a 6.50 1.948975514508784 0 1 0 -12.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 10.38 a 7.96 2.3869977658624166 0 1 0 15.91 0 a 7.96 2.3869977658624166 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 13.62 a 7.96 2.3869977658624166 0 1 0 15.91 0 a 7.96 2.3869977658624166 0 1 0 -15.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 16.87 a 6.50 1.9489755145087835 0 1 0 12.99 0 a 6.50 1.9489755145087835 0 1 0 -12.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 A 2 2 0 0 0 16.06 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.97 A 2 2 0 0 1 16.06 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 A 2 2 0 0 0 7.94 19.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.97 A 2 2 0 0 1 7.94 19.03"
      }
    ]
  ]
};

export const ObsidiMend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0" />
      <path d="M 5.50 7.13 a 6.50 1.948975514508784 0 1 0 12.99 0 a 6.50 1.948975514508784 0 1 0 -12.99 0" />
      <path d="M 4.04 10.38 a 7.96 2.3869977658624166 0 1 0 15.91 0 a 7.96 2.3869977658624166 0 1 0 -15.91 0" />
      <path d="M 4.04 13.62 a 7.96 2.3869977658624166 0 1 0 15.91 0 a 7.96 2.3869977658624166 0 1 0 -15.91 0" />
      <path d="M 5.50 16.87 a 6.50 1.9489755145087835 0 1 0 12.99 0 a 6.50 1.9489755145087835 0 1 0 -12.99 0" />
      <path d="M 16.06 4.97 A 2 2 0 0 0 16.06 19.03" />
      <path d="M 16.06 4.97 A 2 2 0 0 1 16.06 19.03" />
      <path d="M 7.94 4.97 A 2 2 0 0 0 7.94 19.03" />
      <path d="M 7.94 4.97 A 2 2 0 0 1 7.94 19.03" />
      {children}
    </svg>
  );
});

export default ObsidiMend;
