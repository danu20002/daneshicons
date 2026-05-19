import React from 'react';

export const iconData = {
  "id": "InkaSpoon",
  "name": "InkaSpoon",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.09 19.02 Q 17.29 19.21 8.95 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 16.33 L 2.71 16.70 L 7.56 9.13 L 18.08 20.79 L 9.74 19.97 L 6.53 20.92 L 5.23 8.17 L 15.31 8.80"
      }
    ],
    [
      "path",
      {
        "d": "M 13.84 14.04 L 14.66 12.51 L 10.25 18.72 L 3.66 17.71 L 16.69 10.79"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 9.62 A 2.58 2.89 12 0 1 7.33 19.20"
      }
    ]
  ]
};

export const InkaSpoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.09 19.02 Q 17.29 19.21 8.95 14.70" />
      <path d="M 13.18 16.33 L 2.71 16.70 L 7.56 9.13 L 18.08 20.79 L 9.74 19.97 L 6.53 20.92 L 5.23 8.17 L 15.31 8.80" />
      <path d="M 13.84 14.04 L 14.66 12.51 L 10.25 18.72 L 3.66 17.71 L 16.69 10.79" />
      <path d="M 4.11 9.62 A 2.58 2.89 12 0 1 7.33 19.20" />
      {children}
    </svg>
  );
});

export default InkaSpoon;
