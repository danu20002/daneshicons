import React from 'react';

export const iconData = {
  "id": "StrettoSpoil",
  "name": "StrettoSpoil",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.77 C 19.12 8.11, 10.32 7.32, 14.67 15.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 3.47 C 14.68 4.06, 9.01 8.57, 19.38 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 6.86 C 19.43 11.15, 4.96 19.76, 17.35 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 9.26 C 5.85 10.03, 9.89 17.21, 14.49 16.23"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 9.86 C 7.66 11.01, 7.12 4.77, 15.78 14.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.32 C 5.52 12.60, 8.98 12.23, 19.84 17.28"
      }
    ]
  ]
};

export const StrettoSpoil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.77 C 19.12 8.11, 10.32 7.32, 14.67 15.37" />
      <path d="M 5.33 3.47 C 14.68 4.06, 9.01 8.57, 19.38 16.92" />
      <path d="M 4.33 6.86 C 19.43 11.15, 4.96 19.76, 17.35 16.21" />
      <path d="M 7.19 9.26 C 5.85 10.03, 9.89 17.21, 14.49 16.23" />
      <path d="M 3.75 9.86 C 7.66 11.01, 7.12 4.77, 15.78 14.31" />
      <path d="M 6.33 6.32 C 5.52 12.60, 8.98 12.23, 19.84 17.28" />
      {children}
    </svg>
  );
});

export default StrettoSpoil;
