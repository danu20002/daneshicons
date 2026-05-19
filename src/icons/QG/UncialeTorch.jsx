import React from 'react';

export const iconData = {
  "id": "UncialeTorch",
  "name": "UncialeTorch",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 7.24 L 11.47 7.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.86 5.70 L 15.86 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.38 10.46 L 16.38 13.92"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 16.76 L 12.53 16.76"
      }
    ],
    [
      "path",
      {
        "d": "M 10.14 18.30 L 8.14 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 13.54 L 7.62 10.08"
      }
    ]
  ]
};

export const UncialeTorch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 7.24 L 11.47 7.24" />
      <path d="M 13.86 5.70 L 15.86 9.17" />
      <path d="M 18.38 10.46 L 16.38 13.92" />
      <path d="M 16.53 16.76 L 12.53 16.76" />
      <path d="M 10.14 18.30 L 8.14 14.83" />
      <path d="M 5.62 13.54 L 7.62 10.08" />
      {children}
    </svg>
  );
});

export default UncialeTorch;
