import React from 'react';

export const iconData = {
  "id": "VincoloEmploy",
  "name": "VincoloEmploy",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.13 12.00 a 5.87 5.87 0 1 1 11.74 0 a 5.87 5.87 0 1 1 -11.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.07 12.00 L 21.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 18.12 L 16.54 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 18.12 L 7.46 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 L 2.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 5.88 L 7.46 4.14"
      }
    ],
    [
      "path",
      {
        "d": "M 15.54 5.88 L 16.54 4.14"
      }
    ]
  ]
};

export const VincoloEmploy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0" />
      <path d="M 6.13 12.00 a 5.87 5.87 0 1 1 11.74 0 a 5.87 5.87 0 1 1 -11.74 0" />
      <path d="M 19.07 12.00 L 21.07 12.00" />
      <path d="M 15.54 18.12 L 16.54 19.86" />
      <path d="M 8.46 18.12 L 7.46 19.86" />
      <path d="M 4.93 12.00 L 2.93 12.00" />
      <path d="M 8.46 5.88 L 7.46 4.14" />
      <path d="M 15.54 5.88 L 16.54 4.14" />
      {children}
    </svg>
  );
});

export default VincoloEmploy;
