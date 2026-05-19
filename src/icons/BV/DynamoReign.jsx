import React from 'react';

export const iconData = {
  "id": "DynamoReign",
  "name": "DynamoReign",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.85 12.00 a 9.15 9.15 0 1 0 18.30 0 a 9.15 9.15 0 1 0 -18.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 6.51 a 7.32 2.1959863505512476 0 1 0 14.64 0 a 7.32 2.1959863505512476 0 1 0 -14.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 10.17 a 8.97 2.6895230204835725 0 1 0 17.93 0 a 8.97 2.6895230204835725 0 1 0 -17.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 13.83 a 8.97 2.6895230204835725 0 1 0 17.93 0 a 8.97 2.6895230204835725 0 1 0 -17.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 17.49 a 7.32 2.1959863505512476 0 1 0 14.64 0 a 7.32 2.1959863505512476 0 1 0 -14.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.85 A 2 2 0 0 0 12.00 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.85 A 2 2 0 0 1 12.00 21.15"
      }
    ]
  ]
};

export const DynamoReign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.85 12.00 a 9.15 9.15 0 1 0 18.30 0 a 9.15 9.15 0 1 0 -18.30 0" />
      <path d="M 4.68 6.51 a 7.32 2.1959863505512476 0 1 0 14.64 0 a 7.32 2.1959863505512476 0 1 0 -14.64 0" />
      <path d="M 3.03 10.17 a 8.97 2.6895230204835725 0 1 0 17.93 0 a 8.97 2.6895230204835725 0 1 0 -17.93 0" />
      <path d="M 3.03 13.83 a 8.97 2.6895230204835725 0 1 0 17.93 0 a 8.97 2.6895230204835725 0 1 0 -17.93 0" />
      <path d="M 4.68 17.49 a 7.32 2.1959863505512476 0 1 0 14.64 0 a 7.32 2.1959863505512476 0 1 0 -14.64 0" />
      <path d="M 12.00 2.85 A 2 2 0 0 0 12.00 21.15" />
      <path d="M 12.00 2.85 A 2 2 0 0 1 12.00 21.15" />
      {children}
    </svg>
  );
});

export default DynamoReign;
