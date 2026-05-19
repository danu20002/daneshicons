import React from 'react';

export const iconData = {
  "id": "LaminaBumper",
  "name": "LaminaBumper",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.07 11.72 L 21.79 19.44 L 15.46 12.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.23 9.09 L 2.24 13.46 L 18.21 19.72 L 15.03 21.17 L 3.60 4.29 L 13.99 11.72 L 9.19 19.09 L 16.20 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 9.28 L 7.77 5.37 L 17.02 6.04 L 19.91 5.90 L 21.21 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 18.04 15.08 A 2.39 5.03 46 0 1 7.90 2.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 8.40 L 10.90 11.04 L 12.45 10.68"
      }
    ]
  ]
};

export const LaminaBumper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.07 11.72 L 21.79 19.44 L 15.46 12.95" />
      <path d="M 9.23 9.09 L 2.24 13.46 L 18.21 19.72 L 15.03 21.17 L 3.60 4.29 L 13.99 11.72 L 9.19 19.09 L 16.20 15.76" />
      <path d="M 17.01 9.28 L 7.77 5.37 L 17.02 6.04 L 19.91 5.90 L 21.21 15.96" />
      <path d="M 18.04 15.08 A 2.39 5.03 46 0 1 7.90 2.13" />
      <path d="M 14.48 8.40 L 10.90 11.04 L 12.45 10.68" />
      {children}
    </svg>
  );
});

export default LaminaBumper;
