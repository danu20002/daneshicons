import React from 'react';

export const iconData = {
  "id": "DynamoImprint",
  "name": "DynamoImprint",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 9.93 0 1 0 19.86 0 a 9.93 9.93 0 1 0 -19.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 7.03 a 8.60 2.579890092039985 0 1 0 17.20 0 a 8.60 2.579890092039985 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 2.979000478237867 0 1 0 19.86 0 a 9.93 2.979000478237867 0 1 0 -19.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 16.97 a 8.60 2.579890092039985 0 1 0 17.20 0 a 8.60 2.579890092039985 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.07 A 2 2 0 0 0 12.00 21.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.07 A 2 2 0 0 1 12.00 21.93"
      }
    ]
  ]
};

export const DynamoImprint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.07 12.00 a 9.93 9.93 0 1 0 19.86 0 a 9.93 9.93 0 1 0 -19.86 0" />
      <path d="M 3.40 7.03 a 8.60 2.579890092039985 0 1 0 17.20 0 a 8.60 2.579890092039985 0 1 0 -17.20 0" />
      <path d="M 2.07 12.00 a 9.93 2.979000478237867 0 1 0 19.86 0 a 9.93 2.979000478237867 0 1 0 -19.86 0" />
      <path d="M 3.40 16.97 a 8.60 2.579890092039985 0 1 0 17.20 0 a 8.60 2.579890092039985 0 1 0 -17.20 0" />
      <path d="M 12.00 2.07 A 2 2 0 0 0 12.00 21.93" />
      <path d="M 12.00 2.07 A 2 2 0 0 1 12.00 21.93" />
      {children}
    </svg>
  );
});

export default DynamoImprint;
