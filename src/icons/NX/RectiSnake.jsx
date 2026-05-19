import React from 'react';

export const iconData = {
  "id": "RectiSnake",
  "name": "RectiSnake",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 3.87 C 5.26 18.75, 11.52 18.98, 17.17 14.46"
      }
    ],
    [
      "path",
      {
        "d": "M 9.69 4.31 C 6.91 19.46, 16.64 6.69, 19.56 16.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 3.47 C 15.26 11.05, 16.08 15.57, 18.27 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 3.25 C 9.03 12.99, 19.36 6.16, 15.83 15.48"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 6.34 C 9.40 8.34, 8.39 15.16, 14.17 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 5.40 C 8.70 17.26, 14.65 9.21, 17.82 16.96"
      }
    ]
  ]
};

export const RectiSnake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 3.87 C 5.26 18.75, 11.52 18.98, 17.17 14.46" />
      <path d="M 9.69 4.31 C 6.91 19.46, 16.64 6.69, 19.56 16.88" />
      <path d="M 8.60 3.47 C 15.26 11.05, 16.08 15.57, 18.27 20.33" />
      <path d="M 7.40 3.25 C 9.03 12.99, 19.36 6.16, 15.83 15.48" />
      <path d="M 3.51 6.34 C 9.40 8.34, 8.39 15.16, 14.17 15.97" />
      <path d="M 3.99 5.40 C 8.70 17.26, 14.65 9.21, 17.82 16.96" />
      {children}
    </svg>
  );
});

export default RectiSnake;
