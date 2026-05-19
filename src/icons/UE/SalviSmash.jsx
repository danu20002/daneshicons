import React from 'react';

export const iconData = {
  "id": "SalviSmash",
  "name": "SalviSmash",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 12.00 a 6.32 6.32 0 1 1 12.63 0 a 6.32 6.32 0 1 1 -12.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.04 12.00 L 22.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 16.35 L 20.44 17.43"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 19.31 L 16.17 21.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 19.95 L 10.57 21.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 18.07 L 5.43 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 14.26 L 2.37 14.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 9.74 L 2.37 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.74 5.93 L 5.43 4.41"
      }
    ],
    [
      "path",
      {
        "d": "M 10.86 4.05 L 10.57 2.07"
      }
    ],
    [
      "path",
      {
        "d": "M 15.34 4.69 L 16.17 2.87"
      }
    ],
    [
      "path",
      {
        "d": "M 18.76 7.65 L 20.44 6.57"
      }
    ]
  ]
};

export const SalviSmash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 12.00 a 8.54 8.54 0 1 0 17.07 0 a 8.54 8.54 0 1 0 -17.07 0" />
      <path d="M 5.68 12.00 a 6.32 6.32 0 1 1 12.63 0 a 6.32 6.32 0 1 1 -12.63 0" />
      <path d="M 20.04 12.00 L 22.04 12.00" />
      <path d="M 18.76 16.35 L 20.44 17.43" />
      <path d="M 15.34 19.31 L 16.17 21.13" />
      <path d="M 10.86 19.95 L 10.57 21.93" />
      <path d="M 6.74 18.07 L 5.43 19.59" />
      <path d="M 4.29 14.26 L 2.37 14.83" />
      <path d="M 4.29 9.74 L 2.37 9.17" />
      <path d="M 6.74 5.93 L 5.43 4.41" />
      <path d="M 10.86 4.05 L 10.57 2.07" />
      <path d="M 15.34 4.69 L 16.17 2.87" />
      <path d="M 18.76 7.65 L 20.44 6.57" />
      {children}
    </svg>
  );
});

export default SalviSmash;
