import React from 'react';

export const iconData = {
  "id": "TetraSample",
  "name": "TetraSample",
  "category": "DJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 12.00 a 7.20 7.20 0 1 0 14.40 0 a 7.20 7.20 0 1 0 -14.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 a 4.40 4.40 0 1 1 8.79 0 a 4.40 4.40 0 1 1 -8.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 12.00 L 20.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.13 16.31 L 18.67 17.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 18.60 L 13.51 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 17.80 L 7.65 19.54"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 14.29 L 3.82 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 9.71 L 3.82 9.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 6.20 L 7.65 4.46"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 5.40 L 13.51 3.43"
      }
    ],
    [
      "path",
      {
        "d": "M 17.13 7.69 L 18.67 6.41"
      }
    ]
  ]
};

export const TetraSample = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 12.00 a 7.20 7.20 0 1 0 14.40 0 a 7.20 7.20 0 1 0 -14.40 0" />
      <path d="M 7.60 12.00 a 4.40 4.40 0 1 1 8.79 0 a 4.40 4.40 0 1 1 -8.79 0" />
      <path d="M 18.70 12.00 L 20.70 12.00" />
      <path d="M 17.13 16.31 L 18.67 17.59" />
      <path d="M 13.16 18.60 L 13.51 20.57" />
      <path d="M 8.65 17.80 L 7.65 19.54" />
      <path d="M 5.70 14.29 L 3.82 14.98" />
      <path d="M 5.70 9.71 L 3.82 9.02" />
      <path d="M 8.65 6.20 L 7.65 4.46" />
      <path d="M 13.16 5.40 L 13.51 3.43" />
      <path d="M 17.13 7.69 L 18.67 6.41" />
      {children}
    </svg>
  );
});

export default TetraSample;
