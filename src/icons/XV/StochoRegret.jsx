import React from 'react';

export const iconData = {
  "id": "StochoRegret",
  "name": "StochoRegret",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 12.00 a 7.67 7.67 0 1 0 15.34 0 a 7.67 7.67 0 1 0 -15.34 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 12.00 a 5.90 5.90 0 1 1 11.80 0 a 5.90 5.90 0 1 1 -11.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.17 12.00 L 21.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 16.61 L 19.02 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 19.06 L 13.59 21.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 18.21 L 7.42 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 14.45 L 3.38 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 9.55 L 3.38 8.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 5.79 L 7.42 4.06"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 4.94 L 13.59 2.97"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 7.39 L 19.02 6.11"
      }
    ]
  ]
};

export const StochoRegret = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 12.00 a 7.67 7.67 0 1 0 15.34 0 a 7.67 7.67 0 1 0 -15.34 0" />
      <path d="M 6.10 12.00 a 5.90 5.90 0 1 1 11.80 0 a 5.90 5.90 0 1 1 -11.80 0" />
      <path d="M 19.17 12.00 L 21.17 12.00" />
      <path d="M 17.49 16.61 L 19.02 17.89" />
      <path d="M 13.25 19.06 L 13.59 21.03" />
      <path d="M 8.42 18.21 L 7.42 19.94" />
      <path d="M 5.26 14.45 L 3.38 15.14" />
      <path d="M 5.26 9.55 L 3.38 8.86" />
      <path d="M 8.42 5.79 L 7.42 4.06" />
      <path d="M 13.25 4.94 L 13.59 2.97" />
      <path d="M 17.49 7.39 L 19.02 6.11" />
      {children}
    </svg>
  );
});

export default StochoRegret;
