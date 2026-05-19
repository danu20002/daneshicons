import React from 'react';

export const iconData = {
  "id": "OmbraOptimize",
  "name": "OmbraOptimize",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.35 6.59 C 6.99 6.49, 4.39 19.08, 20.69 15.45"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 7.14 C 7.08 13.77, 13.64 10.84, 21.77 15.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 8.58 C 14.22 5.76, 6.05 10.69, 17.08 19.88"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 6.17 C 10.01 12.18, 11.87 9.23, 17.18 17.15"
      }
    ]
  ]
};

export const OmbraOptimize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.35 6.59 C 6.99 6.49, 4.39 19.08, 20.69 15.45" />
      <path d="M 3.75 7.14 C 7.08 13.77, 13.64 10.84, 21.77 15.90" />
      <path d="M 5.81 8.58 C 14.22 5.76, 6.05 10.69, 17.08 19.88" />
      <path d="M 5.93 6.17 C 10.01 12.18, 11.87 9.23, 17.18 17.15" />
      {children}
    </svg>
  );
});

export default OmbraOptimize;
