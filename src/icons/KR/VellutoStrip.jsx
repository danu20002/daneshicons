import React from 'react';

export const iconData = {
  "id": "VellutoStrip",
  "name": "VellutoStrip",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 12.00 a 7.14 7.14 0 1 0 14.27 0 a 7.14 7.14 0 1 0 -14.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 12.00 a 5.27 5.27 0 1 1 10.53 0 a 5.27 5.27 0 1 1 -10.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.64 12.00 L 20.64 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 17.19 L 17.38 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 18.47 L 10.08 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 14.88 L 4.22 15.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 9.12 L 4.22 8.25"
      }
    ],
    [
      "path",
      {
        "d": "M 10.52 5.53 L 10.08 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 6.81 L 17.38 5.25"
      }
    ]
  ]
};

export const VellutoStrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 12.00 a 7.14 7.14 0 1 0 14.27 0 a 7.14 7.14 0 1 0 -14.27 0" />
      <path d="M 6.73 12.00 a 5.27 5.27 0 1 1 10.53 0 a 5.27 5.27 0 1 1 -10.53 0" />
      <path d="M 18.64 12.00 L 20.64 12.00" />
      <path d="M 16.14 17.19 L 17.38 18.75" />
      <path d="M 10.52 18.47 L 10.08 20.42" />
      <path d="M 6.02 14.88 L 4.22 15.75" />
      <path d="M 6.02 9.12 L 4.22 8.25" />
      <path d="M 10.52 5.53 L 10.08 3.58" />
      <path d="M 16.14 6.81 L 17.38 5.25" />
      {children}
    </svg>
  );
});

export default VellutoStrip;
