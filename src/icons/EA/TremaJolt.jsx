import React from 'react';

export const iconData = {
  "id": "TremaJolt",
  "name": "TremaJolt",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 7.72 a 7.41 2.2229302196069 0 1 0 14.82 0 a 7.41 2.2229302196069 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 2.5668187213595957 0 1 0 17.11 0 a 8.56 2.5668187213595957 0 1 0 -17.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 16.28 a 7.41 2.2229302196069 0 1 0 14.82 0 a 7.41 2.2229302196069 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.44 A 2 2 0 0 0 12.00 20.56"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.44 A 2 2 0 0 1 12.00 20.56"
      }
    ]
  ]
};

export const TremaJolt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.11 0 a 8.56 8.56 0 1 0 -17.11 0" />
      <path d="M 4.59 7.72 a 7.41 2.2229302196069 0 1 0 14.82 0 a 7.41 2.2229302196069 0 1 0 -14.82 0" />
      <path d="M 3.44 12.00 a 8.56 2.5668187213595957 0 1 0 17.11 0 a 8.56 2.5668187213595957 0 1 0 -17.11 0" />
      <path d="M 4.59 16.28 a 7.41 2.2229302196069 0 1 0 14.82 0 a 7.41 2.2229302196069 0 1 0 -14.82 0" />
      <path d="M 12.00 3.44 A 2 2 0 0 0 12.00 20.56" />
      <path d="M 12.00 3.44 A 2 2 0 0 1 12.00 20.56" />
      {children}
    </svg>
  );
});

export default TremaJolt;
