import React from 'react';

export const iconData = {
  "id": "ScapoPreview",
  "name": "ScapoPreview",
  "category": "RG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.38 12.00 a 7.62 7.62 0 1 0 15.25 0 a 7.62 7.62 0 1 0 -15.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 12.00 a 5.40 5.40 0 1 1 10.81 0 a 5.40 5.40 0 1 1 -10.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.12 12.00 L 21.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 16.58 L 18.99 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 19.02 L 13.58 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 18.17 L 7.44 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 14.44 L 3.43 15.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 9.56 L 3.43 8.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 5.83 L 7.44 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 4.98 L 13.58 3.01"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 7.42 L 18.99 6.14"
      }
    ]
  ]
};

export const ScapoPreview = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.38 12.00 a 7.62 7.62 0 1 0 15.25 0 a 7.62 7.62 0 1 0 -15.25 0" />
      <path d="M 6.60 12.00 a 5.40 5.40 0 1 1 10.81 0 a 5.40 5.40 0 1 1 -10.81 0" />
      <path d="M 19.12 12.00 L 21.12 12.00" />
      <path d="M 17.46 16.58 L 18.99 17.86" />
      <path d="M 13.24 19.02 L 13.58 20.99" />
      <path d="M 8.44 18.17 L 7.44 19.90" />
      <path d="M 5.31 14.44 L 3.43 15.12" />
      <path d="M 5.31 9.56 L 3.43 8.88" />
      <path d="M 8.44 5.83 L 7.44 4.10" />
      <path d="M 13.24 4.98 L 13.58 3.01" />
      <path d="M 17.46 7.42 L 18.99 6.14" />
      {children}
    </svg>
  );
});

export default ScapoPreview;
