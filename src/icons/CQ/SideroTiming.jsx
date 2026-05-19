import React from 'react';

export const iconData = {
  "id": "SideroTiming",
  "name": "SideroTiming",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 1 12.45 0 a 6.22 6.22 0 1 1 -12.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.97 12.00 L 21.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 16.31 L 20.39 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 19.25 L 16.14 21.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 19.89 L 10.58 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 18.02 L 5.47 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 14.24 L 2.44 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.35 9.76 L 2.44 9.19"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 5.98 L 5.47 4.47"
      }
    ],
    [
      "path",
      {
        "d": "M 10.87 4.11 L 10.58 2.13"
      }
    ],
    [
      "path",
      {
        "d": "M 15.31 4.75 L 16.14 2.93"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 7.69 L 20.39 6.61"
      }
    ]
  ]
};

export const SideroTiming = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.53 12.00 a 8.47 8.47 0 1 0 16.94 0 a 8.47 8.47 0 1 0 -16.94 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 1 12.45 0 a 6.22 6.22 0 1 1 -12.45 0" />
      <path d="M 19.97 12.00 L 21.97 12.00" />
      <path d="M 18.70 16.31 L 20.39 17.39" />
      <path d="M 15.31 19.25 L 16.14 21.07" />
      <path d="M 10.87 19.89 L 10.58 21.87" />
      <path d="M 6.78 18.02 L 5.47 19.53" />
      <path d="M 4.35 14.24 L 2.44 14.81" />
      <path d="M 4.35 9.76 L 2.44 9.19" />
      <path d="M 6.78 5.98 L 5.47 4.47" />
      <path d="M 10.87 4.11 L 10.58 2.13" />
      <path d="M 15.31 4.75 L 16.14 2.93" />
      <path d="M 18.70 7.69 L 20.39 6.61" />
      {children}
    </svg>
  );
});

export default SideroTiming;
