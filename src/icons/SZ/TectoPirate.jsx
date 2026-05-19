import React from 'react';

export const iconData = {
  "id": "TectoPirate",
  "name": "TectoPirate",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.11 12.00 a 3.89 3.89 0 1 0 7.79 0 a 3.89 3.89 0 1 0 -7.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 0 10.66 0 a 5.33 5.33 0 1 0 -10.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0"
      }
    ]
  ]
};

export const TectoPirate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0" />
      <path d="M 8.11 12.00 a 3.89 3.89 0 1 0 7.79 0 a 3.89 3.89 0 1 0 -7.79 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 0 10.66 0 a 5.33 5.33 0 1 0 -10.66 0" />
      <path d="M 5.12 12.00 a 6.88 6.88 0 1 0 13.76 0 a 6.88 6.88 0 1 0 -13.76 0" />
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0" />
      {children}
    </svg>
  );
});

export default TectoPirate;
