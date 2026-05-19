import React from 'react';

export const iconData = {
  "id": "OmniRegret",
  "name": "OmniRegret",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 12.00 a 5.97 5.97 0 1 1 11.94 0 a 5.97 5.97 0 1 1 -11.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 12.00 L 21.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.02 15.87 L 19.71 16.95"
      }
    ],
    [
      "path",
      {
        "d": "M 14.97 18.51 L 15.81 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 19.09 L 10.70 21.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 17.41 L 6.00 18.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 14.02 L 3.21 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 5.13 9.98 L 3.21 9.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 6.59 L 6.00 5.08"
      }
    ],
    [
      "path",
      {
        "d": "M 10.98 4.91 L 10.70 2.93"
      }
    ],
    [
      "path",
      {
        "d": "M 14.97 5.49 L 15.81 3.67"
      }
    ],
    [
      "path",
      {
        "d": "M 18.02 8.13 L 19.71 7.05"
      }
    ]
  ]
};

export const OmniRegret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0" />
      <path d="M 6.03 12.00 a 5.97 5.97 0 1 1 11.94 0 a 5.97 5.97 0 1 1 -11.94 0" />
      <path d="M 19.16 12.00 L 21.16 12.00" />
      <path d="M 18.02 15.87 L 19.71 16.95" />
      <path d="M 14.97 18.51 L 15.81 20.33" />
      <path d="M 10.98 19.09 L 10.70 21.07" />
      <path d="M 7.31 17.41 L 6.00 18.92" />
      <path d="M 5.13 14.02 L 3.21 14.58" />
      <path d="M 5.13 9.98 L 3.21 9.42" />
      <path d="M 7.31 6.59 L 6.00 5.08" />
      <path d="M 10.98 4.91 L 10.70 2.93" />
      <path d="M 14.97 5.49 L 15.81 3.67" />
      <path d="M 18.02 8.13 L 19.71 7.05" />
      {children}
    </svg>
  );
});

export default OmniRegret;
