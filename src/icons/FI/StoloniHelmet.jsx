import React from 'react';

export const iconData = {
  "id": "StoloniHelmet",
  "name": "StoloniHelmet",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 10.98 A 5.58 3.12 84 0 1 20.39 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 20.64 9.56 L 3.22 20.76 L 13.97 18.97 L 13.37 3.66 L 9.74 18.68 L 6.64 12.85 L 21.80 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.92 13.95 L 15.22 10.46"
      }
    ],
    [
      "path",
      {
        "d": "M 20.56 7.05 C 3.44 13.35, 19.23 17.55, 20.76 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 7.78 L 16.21 6.38 L 2.25 17.99 L 17.72 2.85 L 17.07 20.31 L 14.13 12.07"
      }
    ]
  ]
};

export const StoloniHelmet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 10.98 A 5.58 3.12 84 0 1 20.39 17.26" />
      <path d="M 20.64 9.56 L 3.22 20.76 L 13.97 18.97 L 13.37 3.66 L 9.74 18.68 L 6.64 12.85 L 21.80 9.23" />
      <path d="M 8.92 13.95 L 15.22 10.46" />
      <path d="M 20.56 7.05 C 3.44 13.35, 19.23 17.55, 20.76 5.30" />
      <path d="M 9.41 7.78 L 16.21 6.38 L 2.25 17.99 L 17.72 2.85 L 17.07 20.31 L 14.13 12.07" />
      {children}
    </svg>
  );
});

export default StoloniHelmet;
