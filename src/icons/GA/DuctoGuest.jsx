import React from 'react';

export const iconData = {
  "id": "DuctoGuest",
  "name": "DuctoGuest",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.46 12.00 Q 16.57 13.49 19.65 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 17.56 Q 14.83 15.89 14.92 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 20.99 Q 12.00 16.81 9.08 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.08 20.99 Q 9.17 15.89 4.35 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 17.56 Q 7.43 13.49 2.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.54 12.00 Q 7.43 10.51 4.35 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 6.44 Q 9.17 8.11 9.08 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 9.08 3.01 Q 12.00 7.19 14.92 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 3.01 Q 14.83 8.11 19.65 6.44"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 6.44 Q 16.57 10.51 21.46 12.00"
      }
    ]
  ]
};

export const DuctoGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.46 12.00 Q 16.57 13.49 19.65 17.56" />
      <path d="M 19.65 17.56 Q 14.83 15.89 14.92 20.99" />
      <path d="M 14.92 20.99 Q 12.00 16.81 9.08 20.99" />
      <path d="M 9.08 20.99 Q 9.17 15.89 4.35 17.56" />
      <path d="M 4.35 17.56 Q 7.43 13.49 2.54 12.00" />
      <path d="M 2.54 12.00 Q 7.43 10.51 4.35 6.44" />
      <path d="M 4.35 6.44 Q 9.17 8.11 9.08 3.01" />
      <path d="M 9.08 3.01 Q 12.00 7.19 14.92 3.01" />
      <path d="M 14.92 3.01 Q 14.83 8.11 19.65 6.44" />
      <path d="M 19.65 6.44 Q 16.57 10.51 21.46 12.00" />
      {children}
    </svg>
  );
});

export default DuctoGuest;
