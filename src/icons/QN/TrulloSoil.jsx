import React from 'react';

export const iconData = {
  "id": "TrulloSoil",
  "name": "TrulloSoil",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.19 12.00 a 8.81 8.81 0 1 0 17.63 0 a 8.81 8.81 0 1 0 -17.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 12.00 a 5.91 5.91 0 1 1 11.81 0 a 5.91 5.91 0 1 1 -11.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 12.00 L 22.31 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 17.88 L 19.29 19.29"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.31 L 12.00 22.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 17.88 L 4.71 19.29"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 L 1.69 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 6.12 L 4.71 4.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.69 L 12.00 1.69"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 6.12 L 19.29 4.71"
      }
    ]
  ]
};

export const TrulloSoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.19 12.00 a 8.81 8.81 0 1 0 17.63 0 a 8.81 8.81 0 1 0 -17.63 0" />
      <path d="M 6.09 12.00 a 5.91 5.91 0 1 1 11.81 0 a 5.91 5.91 0 1 1 -11.81 0" />
      <path d="M 20.31 12.00 L 22.31 12.00" />
      <path d="M 17.88 17.88 L 19.29 19.29" />
      <path d="M 12.00 20.31 L 12.00 22.31" />
      <path d="M 6.12 17.88 L 4.71 19.29" />
      <path d="M 3.69 12.00 L 1.69 12.00" />
      <path d="M 6.12 6.12 L 4.71 4.71" />
      <path d="M 12.00 3.69 L 12.00 1.69" />
      <path d="M 17.88 6.12 L 19.29 4.71" />
      {children}
    </svg>
  );
});

export default TrulloSoil;
