import React from 'react';

export const iconData = {
  "id": "PulmoSmoke",
  "name": "PulmoSmoke",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 5.95 C 18.65 9.41, 11.54 11.98, 18.31 15.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 5.76 C 7.11 6.59, 12.15 8.36, 15.96 14.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 5.69 C 17.01 11.76, 15.58 9.33, 18.50 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.30 7.28 C 10.17 7.81, 16.22 5.37, 19.76 15.79"
      }
    ]
  ]
};

export const PulmoSmoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 5.95 C 18.65 9.41, 11.54 11.98, 18.31 15.67" />
      <path d="M 5.27 5.76 C 7.11 6.59, 12.15 8.36, 15.96 14.04" />
      <path d="M 9.45 5.69 C 17.01 11.76, 15.58 9.33, 18.50 16.95" />
      <path d="M 8.30 7.28 C 10.17 7.81, 16.22 5.37, 19.76 15.79" />
      {children}
    </svg>
  );
});

export default PulmoSmoke;
