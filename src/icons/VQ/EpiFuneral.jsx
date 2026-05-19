import React from 'react';

export const iconData = {
  "id": "EpiFuneral",
  "name": "EpiFuneral",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 1 11.23 0 a 5.61 5.61 0 1 1 -11.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 12.00 L 22.10 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.05 18.33 L 18.30 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 19.90 L 9.75 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 15.51 L 2.90 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 8.49 L 2.90 7.62"
      }
    ],
    [
      "path",
      {
        "d": "M 10.20 4.10 L 9.75 2.15"
      }
    ],
    [
      "path",
      {
        "d": "M 17.05 5.67 L 18.30 4.10"
      }
    ]
  ]
};

export const EpiFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 a 8.60 8.60 0 1 0 17.20 0 a 8.60 8.60 0 1 0 -17.20 0" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 1 11.23 0 a 5.61 5.61 0 1 1 -11.23 0" />
      <path d="M 20.10 12.00 L 22.10 12.00" />
      <path d="M 17.05 18.33 L 18.30 19.90" />
      <path d="M 10.20 19.90 L 9.75 21.85" />
      <path d="M 4.70 15.51 L 2.90 16.38" />
      <path d="M 4.70 8.49 L 2.90 7.62" />
      <path d="M 10.20 4.10 L 9.75 2.15" />
      <path d="M 17.05 5.67 L 18.30 4.10" />
      {children}
    </svg>
  );
});

export default EpiFuneral;
