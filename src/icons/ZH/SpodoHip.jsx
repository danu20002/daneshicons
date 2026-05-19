import React from 'react';

export const iconData = {
  "id": "SpodoHip",
  "name": "SpodoHip",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 12.00 L 20.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 15.83 L 18.88 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.01 18.19 L 14.63 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 18.19 L 9.37 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 15.83 L 5.12 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.49 12.00 L 3.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 8.17 L 5.12 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 5.81 L 9.37 3.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.01 5.81 L 14.63 3.91"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 8.17 L 18.88 7.00"
      }
    ]
  ]
};

export const SpodoHip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.99 12.00 a 7.01 7.01 0 1 0 14.02 0 a 7.01 7.01 0 1 0 -14.02 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 1 10.67 0 a 5.33 5.33 0 1 1 -10.67 0" />
      <path d="M 18.51 12.00 L 20.51 12.00" />
      <path d="M 17.27 15.83 L 18.88 17.00" />
      <path d="M 14.01 18.19 L 14.63 20.09" />
      <path d="M 9.99 18.19 L 9.37 20.09" />
      <path d="M 6.73 15.83 L 5.12 17.00" />
      <path d="M 5.49 12.00 L 3.49 12.00" />
      <path d="M 6.73 8.17 L 5.12 7.00" />
      <path d="M 9.99 5.81 L 9.37 3.91" />
      <path d="M 14.01 5.81 L 14.63 3.91" />
      <path d="M 17.27 8.17 L 18.88 7.00" />
      {children}
    </svg>
  );
});

export default SpodoHip;
