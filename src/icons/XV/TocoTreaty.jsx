import React from 'react';

export const iconData = {
  "id": "TocoTreaty",
  "name": "TocoTreaty",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.71 12.00 a 8.29 8.29 0 1 0 16.59 0 a 8.29 8.29 0 1 0 -16.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 12.00 a 6.14 6.14 0 1 1 12.27 0 a 6.14 6.14 0 1 1 -12.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.79 12.00 L 21.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 16.21 L 20.24 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 15.24 19.09 L 16.07 20.91"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 19.71 L 10.61 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 17.89 L 5.59 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 14.20 L 2.60 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 9.80 L 2.60 9.24"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 6.11 L 5.59 4.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.89 4.29 L 10.61 2.31"
      }
    ],
    [
      "path",
      {
        "d": "M 15.24 4.91 L 16.07 3.09"
      }
    ],
    [
      "path",
      {
        "d": "M 18.56 7.79 L 20.24 6.71"
      }
    ]
  ]
};

export const TocoTreaty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.71 12.00 a 8.29 8.29 0 1 0 16.59 0 a 8.29 8.29 0 1 0 -16.59 0" />
      <path d="M 5.86 12.00 a 6.14 6.14 0 1 1 12.27 0 a 6.14 6.14 0 1 1 -12.27 0" />
      <path d="M 19.79 12.00 L 21.79 12.00" />
      <path d="M 18.56 16.21 L 20.24 17.29" />
      <path d="M 15.24 19.09 L 16.07 20.91" />
      <path d="M 10.89 19.71 L 10.61 21.69" />
      <path d="M 6.90 17.89 L 5.59 19.40" />
      <path d="M 4.52 14.20 L 2.60 14.76" />
      <path d="M 4.52 9.80 L 2.60 9.24" />
      <path d="M 6.90 6.11 L 5.59 4.60" />
      <path d="M 10.89 4.29 L 10.61 2.31" />
      <path d="M 15.24 4.91 L 16.07 3.09" />
      <path d="M 18.56 7.79 L 20.24 6.71" />
      {children}
    </svg>
  );
});

export default TocoTreaty;
