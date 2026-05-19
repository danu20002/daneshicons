import React from 'react';

export const iconData = {
  "id": "TimbroRanch",
  "name": "TimbroRanch",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 6.12 C 18.17 4.97, 18.73 8.18, 18.38 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.81 2.63 C 19.49 4.44, 19.51 19.65, 19.60 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 7.77 C 15.30 10.30, 16.14 11.76, 14.08 16.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.90 9.85 C 15.78 11.70, 13.73 16.19, 16.24 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 8.67 C 16.61 8.71, 14.25 4.40, 20.37 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 5.18 C 16.99 10.69, 16.57 14.96, 20.69 16.46"
      }
    ]
  ]
};

export const TimbroRanch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 6.12 C 18.17 4.97, 18.73 8.18, 18.38 21.23" />
      <path d="M 8.81 2.63 C 19.49 4.44, 19.51 19.65, 19.60 16.62" />
      <path d="M 5.20 7.77 C 15.30 10.30, 16.14 11.76, 14.08 16.63" />
      <path d="M 4.90 9.85 C 15.78 11.70, 13.73 16.19, 16.24 21.12" />
      <path d="M 7.45 8.67 C 16.61 8.71, 14.25 4.40, 20.37 19.70" />
      <path d="M 6.39 5.18 C 16.99 10.69, 16.57 14.96, 20.69 16.46" />
      {children}
    </svg>
  );
});

export default TimbroRanch;
