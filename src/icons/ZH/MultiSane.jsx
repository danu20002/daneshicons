import React from 'react';

export const iconData = {
  "id": "MultiSane",
  "name": "MultiSane",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 1 12.14 0 a 6.07 6.07 0 1 1 -12.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 12.00 L 21.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 17.53 L 17.66 19.09"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 18.90 L 9.98 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 15.07 L 3.82 15.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 8.93 L 3.82 8.06"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 5.10 L 9.98 3.15"
      }
    ],
    [
      "path",
      {
        "d": "M 16.41 6.47 L 17.66 4.91"
      }
    ]
  ]
};

export const MultiSane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.15 0 a 7.57 7.57 0 1 0 -15.15 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 1 12.14 0 a 6.07 6.07 0 1 1 -12.14 0" />
      <path d="M 19.07 12.00 L 21.07 12.00" />
      <path d="M 16.41 17.53 L 17.66 19.09" />
      <path d="M 10.43 18.90 L 9.98 20.85" />
      <path d="M 5.63 15.07 L 3.82 15.94" />
      <path d="M 5.63 8.93 L 3.82 8.06" />
      <path d="M 10.43 5.10 L 9.98 3.15" />
      <path d="M 16.41 6.47 L 17.66 4.91" />
      {children}
    </svg>
  );
});

export default MultiSane;
