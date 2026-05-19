import React from 'react';

export const iconData = {
  "id": "TitilloRate",
  "name": "TitilloRate",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 3.99 C 6.33 9.99, 17.56 8.97, 19.39 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 3.48 C 14.64 5.30, 12.40 17.49, 14.86 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 4.81 C 11.82 15.44, 14.79 19.18, 14.60 21.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.13 6.40 C 11.56 4.24, 19.45 6.01, 17.99 17.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 6.61 C 19.03 15.84, 17.35 9.98, 19.03 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 3.06 C 7.97 15.94, 19.63 6.36, 15.27 21.06"
      }
    ]
  ]
};

export const TitilloRate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 3.99 C 6.33 9.99, 17.56 8.97, 19.39 20.62" />
      <path d="M 4.85 3.48 C 14.64 5.30, 12.40 17.49, 14.86 15.51" />
      <path d="M 6.22 4.81 C 11.82 15.44, 14.79 19.18, 14.60 21.44" />
      <path d="M 4.13 6.40 C 11.56 4.24, 19.45 6.01, 17.99 17.09" />
      <path d="M 2.57 6.61 C 19.03 15.84, 17.35 9.98, 19.03 17.21" />
      <path d="M 4.23 3.06 C 7.97 15.94, 19.63 6.36, 15.27 21.06" />
      {children}
    </svg>
  );
});

export default TitilloRate;
