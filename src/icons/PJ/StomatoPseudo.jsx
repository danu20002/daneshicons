import React from 'react';

export const iconData = {
  "id": "StomatoPseudo",
  "name": "StomatoPseudo",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.30 4.31 C 6.36 5.47, 14.40 5.76, 14.21 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 9.07 C 5.53 6.51, 19.51 14.98, 21.80 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 5.90 C 7.30 15.76, 10.79 13.39, 18.01 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 6.51 C 10.49 14.60, 8.89 10.58, 14.75 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 3.62 C 15.19 7.03, 14.02 19.83, 16.98 15.74"
      }
    ]
  ]
};

export const StomatoPseudo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.30 4.31 C 6.36 5.47, 14.40 5.76, 14.21 17.21" />
      <path d="M 8.39 9.07 C 5.53 6.51, 19.51 14.98, 21.80 19.42" />
      <path d="M 4.03 5.90 C 7.30 15.76, 10.79 13.39, 18.01 16.28" />
      <path d="M 6.37 6.51 C 10.49 14.60, 8.89 10.58, 14.75 14.67" />
      <path d="M 8.08 3.62 C 15.19 7.03, 14.02 19.83, 16.98 15.74" />
      {children}
    </svg>
  );
});

export default StomatoPseudo;
