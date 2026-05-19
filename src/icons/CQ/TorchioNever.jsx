import React from 'react';

export const iconData = {
  "id": "TorchioNever",
  "name": "TorchioNever",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 12.00 a 5.42 5.42 0 1 1 10.83 0 a 5.42 5.42 0 1 1 -10.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.88 12.00 L 20.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.78 15.72 L 19.47 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 18.26 L 15.69 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 18.81 L 10.74 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 17.20 L 6.19 18.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 13.94 L 3.48 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 10.06 L 3.48 9.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 6.80 L 6.19 5.29"
      }
    ],
    [
      "path",
      {
        "d": "M 11.02 5.19 L 10.74 3.21"
      }
    ],
    [
      "path",
      {
        "d": "M 14.86 5.74 L 15.69 3.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.78 8.28 L 19.47 7.20"
      }
    ]
  ]
};

export const TorchioNever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0" />
      <path d="M 6.58 12.00 a 5.42 5.42 0 1 1 10.83 0 a 5.42 5.42 0 1 1 -10.83 0" />
      <path d="M 18.88 12.00 L 20.88 12.00" />
      <path d="M 17.78 15.72 L 19.47 16.80" />
      <path d="M 14.86 18.26 L 15.69 20.07" />
      <path d="M 11.02 18.81 L 10.74 20.79" />
      <path d="M 7.50 17.20 L 6.19 18.71" />
      <path d="M 5.40 13.94 L 3.48 14.50" />
      <path d="M 5.40 10.06 L 3.48 9.50" />
      <path d="M 7.50 6.80 L 6.19 5.29" />
      <path d="M 11.02 5.19 L 10.74 3.21" />
      <path d="M 14.86 5.74 L 15.69 3.93" />
      <path d="M 17.78 8.28 L 19.47 7.20" />
      {children}
    </svg>
  );
});

export default TorchioNever;
