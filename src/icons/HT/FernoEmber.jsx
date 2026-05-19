import React from 'react';

export const iconData = {
  "id": "FernoEmber",
  "name": "FernoEmber",
  "category": "HT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 12.00 a 7.87 7.87 0 1 0 15.75 0 a 7.87 7.87 0 1 0 -15.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 12.00 a 5.69 5.69 0 1 1 11.38 0 a 5.69 5.69 0 1 1 -11.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.37 12.00 L 21.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.65 16.74 L 19.18 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 13.28 19.26 L 13.63 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 18.39 L 7.31 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 14.52 L 3.19 15.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 9.48 L 3.19 8.79"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 5.61 L 7.31 3.88"
      }
    ],
    [
      "path",
      {
        "d": "M 13.28 4.74 L 13.63 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.65 7.26 L 19.18 5.97"
      }
    ]
  ]
};

export const FernoEmber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 12.00 a 7.87 7.87 0 1 0 15.75 0 a 7.87 7.87 0 1 0 -15.75 0" />
      <path d="M 6.31 12.00 a 5.69 5.69 0 1 1 11.38 0 a 5.69 5.69 0 1 1 -11.38 0" />
      <path d="M 19.37 12.00 L 21.37 12.00" />
      <path d="M 17.65 16.74 L 19.18 18.03" />
      <path d="M 13.28 19.26 L 13.63 21.23" />
      <path d="M 8.31 18.39 L 7.31 20.12" />
      <path d="M 5.07 14.52 L 3.19 15.21" />
      <path d="M 5.07 9.48 L 3.19 8.79" />
      <path d="M 8.31 5.61 L 7.31 3.88" />
      <path d="M 13.28 4.74 L 13.63 2.77" />
      <path d="M 17.65 7.26 L 19.18 5.97" />
      {children}
    </svg>
  );
});

export default FernoEmber;
