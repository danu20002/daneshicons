import React from 'react';

export const iconData = {
  "id": "DimenStop",
  "name": "DimenStop",
  "category": "JF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.39 12.00 L 22.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 16.54 L 20.74 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 19.63 L 16.32 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 20.31 L 10.52 22.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 18.34 L 5.19 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 14.36 L 2.03 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 9.64 L 2.03 9.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 5.66 L 5.19 4.15"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 3.69 L 10.52 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 4.37 L 16.32 2.55"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 7.46 L 20.74 6.38"
      }
    ]
  ]
};

export const DimenStop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0" />
      <path d="M 6.02 12.00 a 5.98 5.98 0 1 1 11.96 0 a 5.98 5.98 0 1 1 -11.96 0" />
      <path d="M 20.39 12.00 L 22.39 12.00" />
      <path d="M 19.06 16.54 L 20.74 17.62" />
      <path d="M 15.49 19.63 L 16.32 21.45" />
      <path d="M 10.81 20.31 L 10.52 22.29" />
      <path d="M 6.50 18.34 L 5.19 19.85" />
      <path d="M 3.95 14.36 L 2.03 14.93" />
      <path d="M 3.95 9.64 L 2.03 9.07" />
      <path d="M 6.50 5.66 L 5.19 4.15" />
      <path d="M 10.81 3.69 L 10.52 1.71" />
      <path d="M 15.49 4.37 L 16.32 2.55" />
      <path d="M 19.06 7.46 L 20.74 6.38" />
      {children}
    </svg>
  );
});

export default DimenStop;
