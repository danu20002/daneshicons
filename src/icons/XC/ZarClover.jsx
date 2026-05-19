import React from 'react';

export const iconData = {
  "id": "ZarClover",
  "name": "ZarClover",
  "category": "XC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.31 0 a 7.66 7.66 0 1 0 -15.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 12.00 a 4.98 4.98 0 1 1 9.95 0 a 4.98 4.98 0 1 1 -9.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 12.00 L 21.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 16.60 L 19.01 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 19.05 L 13.59 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 18.20 L 7.42 19.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 14.45 L 3.40 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 9.55 L 3.40 8.87"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 5.80 L 7.42 4.07"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 4.95 L 13.59 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.48 7.40 L 19.01 6.11"
      }
    ]
  ]
};

export const ZarClover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.31 0 a 7.66 7.66 0 1 0 -15.31 0" />
      <path d="M 7.02 12.00 a 4.98 4.98 0 1 1 9.95 0 a 4.98 4.98 0 1 1 -9.95 0" />
      <path d="M 19.16 12.00 L 21.16 12.00" />
      <path d="M 17.48 16.60 L 19.01 17.89" />
      <path d="M 13.24 19.05 L 13.59 21.02" />
      <path d="M 8.42 18.20 L 7.42 19.93" />
      <path d="M 5.27 14.45 L 3.40 15.13" />
      <path d="M 5.27 9.55 L 3.40 8.87" />
      <path d="M 8.42 5.80 L 7.42 4.07" />
      <path d="M 13.24 4.95 L 13.59 2.98" />
      <path d="M 17.48 7.40 L 19.01 6.11" />
      {children}
    </svg>
  );
});

export default ZarClover;
