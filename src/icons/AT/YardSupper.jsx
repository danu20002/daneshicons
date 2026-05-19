import React from 'react';

export const iconData = {
  "id": "YardSupper",
  "name": "YardSupper",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 6.23 C 17.89 15.75, 16.47 17.46, 15.18 17.34"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 5.07 C 13.41 14.35, 19.75 17.82, 16.47 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 6.54 C 14.69 9.20, 16.36 12.10, 21.81 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.72 8.66 C 4.78 15.46, 7.57 12.84, 17.20 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 9.72 C 15.17 19.41, 11.45 15.04, 15.91 17.05"
      }
    ]
  ]
};

export const YardSupper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 6.23 C 17.89 15.75, 16.47 17.46, 15.18 17.34" />
      <path d="M 6.43 5.07 C 13.41 14.35, 19.75 17.82, 16.47 20.64" />
      <path d="M 7.96 6.54 C 14.69 9.20, 16.36 12.10, 21.81 19.48" />
      <path d="M 9.72 8.66 C 4.78 15.46, 7.57 12.84, 17.20 19.39" />
      <path d="M 5.66 9.72 C 15.17 19.41, 11.45 15.04, 15.91 17.05" />
      {children}
    </svg>
  );
});

export default YardSupper;
