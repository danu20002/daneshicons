import React from 'react';

export const iconData = {
  "id": "VezzoGale",
  "name": "VezzoGale",
  "category": "UX",
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
        "d": "M 6.75 12.00 a 5.25 5.25 0 1 1 10.49 0 a 5.25 5.25 0 1 1 -10.49 0"
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
        "d": "M 17.13 16.31 L 18.66 17.59"
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
        "d": "M 8.65 17.80 L 7.65 19.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 14.29 L 3.83 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 9.71 L 3.83 9.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 6.20 L 7.65 4.47"
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
        "d": "M 17.13 7.69 L 18.66 6.41"
      }
    ]
  ]
};

export const VezzoGale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.75 12.00 a 5.25 5.25 0 1 1 10.49 0 a 5.25 5.25 0 1 1 -10.49 0" />
      <path d="M 18.70 12.00 L 20.70 12.00" />
      <path d="M 17.13 16.31 L 18.66 17.59" />
      <path d="M 13.16 18.60 L 13.51 20.57" />
      <path d="M 8.65 17.80 L 7.65 19.53" />
      <path d="M 5.71 14.29 L 3.83 14.98" />
      <path d="M 5.71 9.71 L 3.83 9.02" />
      <path d="M 8.65 6.20 L 7.65 4.47" />
      <path d="M 13.16 5.40 L 13.51 3.43" />
      <path d="M 17.13 7.69 L 18.66 6.41" />
      {children}
    </svg>
  );
});

export default VezzoGale;
