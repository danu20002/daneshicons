import React from 'react';

export const iconData = {
  "id": "PolyConnect",
  "name": "PolyConnect",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.11 0 a 7.05 7.05 0 1 0 -14.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.62 12.00 a 4.38 4.38 0 1 1 8.76 0 a 4.38 4.38 0 1 1 -8.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.55 12.00 L 20.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 16.21 L 18.55 17.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 18.45 L 13.49 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 17.67 L 7.72 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 14.24 L 3.96 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.84 9.76 L 3.96 9.07"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 6.33 L 7.72 4.59"
      }
    ],
    [
      "path",
      {
        "d": "M 13.14 5.55 L 13.49 3.58"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 7.79 L 18.55 6.50"
      }
    ]
  ]
};

export const PolyConnect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.11 0 a 7.05 7.05 0 1 0 -14.11 0" />
      <path d="M 7.62 12.00 a 4.38 4.38 0 1 1 8.76 0 a 4.38 4.38 0 1 1 -8.76 0" />
      <path d="M 18.55 12.00 L 20.55 12.00" />
      <path d="M 17.02 16.21 L 18.55 17.50" />
      <path d="M 13.14 18.45 L 13.49 20.42" />
      <path d="M 8.72 17.67 L 7.72 19.41" />
      <path d="M 5.84 14.24 L 3.96 14.93" />
      <path d="M 5.84 9.76 L 3.96 9.07" />
      <path d="M 8.72 6.33 L 7.72 4.59" />
      <path d="M 13.14 5.55 L 13.49 3.58" />
      <path d="M 17.02 7.79 L 18.55 6.50" />
      {children}
    </svg>
  );
});

export default PolyConnect;
