import React from 'react';

export const iconData = {
  "id": "SkopoDecay",
  "name": "SkopoDecay",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.08 2.31 C 6.65 17.63, 14.58 13.78, 15.45 17.30"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 8.21 C 9.89 7.98, 8.27 16.50, 21.11 21.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.66 7.02 C 15.65 4.60, 14.97 15.42, 19.05 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 4.66 C 11.34 4.24, 12.61 18.93, 18.50 16.37"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 7.75 C 7.89 10.67, 15.74 12.40, 16.18 19.58"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 6.01 C 5.53 10.67, 4.44 19.11, 21.70 14.44"
      }
    ]
  ]
};

export const SkopoDecay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.08 2.31 C 6.65 17.63, 14.58 13.78, 15.45 17.30" />
      <path d="M 8.95 8.21 C 9.89 7.98, 8.27 16.50, 21.11 21.06" />
      <path d="M 9.66 7.02 C 15.65 4.60, 14.97 15.42, 19.05 20.95" />
      <path d="M 3.43 4.66 C 11.34 4.24, 12.61 18.93, 18.50 16.37" />
      <path d="M 6.77 7.75 C 7.89 10.67, 15.74 12.40, 16.18 19.58" />
      <path d="M 4.87 6.01 C 5.53 10.67, 4.44 19.11, 21.70 14.44" />
      {children}
    </svg>
  );
});

export default SkopoDecay;
