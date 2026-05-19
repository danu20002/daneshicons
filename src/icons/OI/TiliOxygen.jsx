import React from 'react';

export const iconData = {
  "id": "TiliOxygen",
  "name": "TiliOxygen",
  "category": "OI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.54 12.00 a 7.46 7.46 0 1 0 14.93 0 a 7.46 7.46 0 1 0 -14.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 12.00 a 5.16 5.16 0 1 1 10.32 0 a 5.16 5.16 0 1 1 -10.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 12.00 L 20.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 16.48 L 18.87 17.76"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 18.86 L 13.56 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 18.03 L 7.52 19.76"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 14.38 L 3.58 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 9.62 L 3.58 8.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 5.97 L 7.52 4.24"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 5.14 L 13.56 3.17"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 7.52 L 18.87 6.24"
      }
    ]
  ]
};

export const TiliOxygen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.54 12.00 a 7.46 7.46 0 1 0 14.93 0 a 7.46 7.46 0 1 0 -14.93 0" />
      <path d="M 6.84 12.00 a 5.16 5.16 0 1 1 10.32 0 a 5.16 5.16 0 1 1 -10.32 0" />
      <path d="M 18.96 12.00 L 20.96 12.00" />
      <path d="M 17.33 16.48 L 18.87 17.76" />
      <path d="M 13.21 18.86 L 13.56 20.83" />
      <path d="M 8.52 18.03 L 7.52 19.76" />
      <path d="M 5.46 14.38 L 3.58 15.07" />
      <path d="M 5.46 9.62 L 3.58 8.93" />
      <path d="M 8.52 5.97 L 7.52 4.24" />
      <path d="M 13.21 5.14 L 13.56 3.17" />
      <path d="M 17.33 7.52 L 18.87 6.24" />
      {children}
    </svg>
  );
});

export default TiliOxygen;
