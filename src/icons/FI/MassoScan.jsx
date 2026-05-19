import React from 'react';

export const iconData = {
  "id": "MassoScan",
  "name": "MassoScan",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.02 9.90 L 15.34 8.18 L 7.84 13.13"
      }
    ],
    [
      "path",
      {
        "d": "M 17.83 2.81 C 16.99 14.76, 20.82 7.69, 7.70 5.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.01 11.59 A 6.17 3.19 98 0 1 6.97 5.42"
      }
    ],
    [
      "path",
      {
        "d": "M 20.31 16.44 L 20.00 5.57"
      }
    ],
    [
      "path",
      {
        "d": "M 14.92 5.68 L 15.38 8.33"
      }
    ]
  ]
};

export const MassoScan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.02 9.90 L 15.34 8.18 L 7.84 13.13" />
      <path d="M 17.83 2.81 C 16.99 14.76, 20.82 7.69, 7.70 5.82" />
      <path d="M 13.01 11.59 A 6.17 3.19 98 0 1 6.97 5.42" />
      <path d="M 20.31 16.44 L 20.00 5.57" />
      <path d="M 14.92 5.68 L 15.38 8.33" />
      {children}
    </svg>
  );
});

export default MassoScan;
