import React from 'react';

export const iconData = {
  "id": "AstroPinch",
  "name": "AstroPinch",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.58 7.10 C 5.01 5.93, 12.10 15.84, 14.78 17.67"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 6.18 C 19.83 14.76, 11.98 18.36, 19.87 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.85 5.94 C 5.30 4.66, 12.88 10.93, 15.32 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 9.77 C 8.69 10.87, 19.81 19.62, 15.11 14.79"
      }
    ]
  ]
};

export const AstroPinch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.58 7.10 C 5.01 5.93, 12.10 15.84, 14.78 17.67" />
      <path d="M 9.04 6.18 C 19.83 14.76, 11.98 18.36, 19.87 16.21" />
      <path d="M 9.85 5.94 C 5.30 4.66, 12.88 10.93, 15.32 16.23" />
      <path d="M 9.84 9.77 C 8.69 10.87, 19.81 19.62, 15.11 14.79" />
      {children}
    </svg>
  );
});

export default AstroPinch;
