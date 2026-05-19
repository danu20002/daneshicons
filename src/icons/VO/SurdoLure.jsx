import React from 'react';

export const iconData = {
  "id": "SurdoLure",
  "name": "SurdoLure",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 9.04 a 8.37 2.5098620937533966 0 1 0 16.73 0 a 8.37 2.5098620937533966 0 1 0 -16.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 14.96 a 8.37 2.5098620937533966 0 1 0 16.73 0 a 8.37 2.5098620937533966 0 1 0 -16.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 5.73 A 2 2 0 0 0 18.27 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 5.73 A 2 2 0 0 1 18.27 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 0 12.00 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.13 A 2 2 0 0 1 12.00 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 5.73 A 2 2 0 0 0 5.73 18.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 5.73 A 2 2 0 0 1 5.73 18.27"
      }
    ]
  ]
};

export const SurdoLure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0" />
      <path d="M 3.63 9.04 a 8.37 2.5098620937533966 0 1 0 16.73 0 a 8.37 2.5098620937533966 0 1 0 -16.73 0" />
      <path d="M 3.63 14.96 a 8.37 2.5098620937533966 0 1 0 16.73 0 a 8.37 2.5098620937533966 0 1 0 -16.73 0" />
      <path d="M 18.27 5.73 A 2 2 0 0 0 18.27 18.27" />
      <path d="M 18.27 5.73 A 2 2 0 0 1 18.27 18.27" />
      <path d="M 12.00 3.13 A 2 2 0 0 0 12.00 20.87" />
      <path d="M 12.00 3.13 A 2 2 0 0 1 12.00 20.87" />
      <path d="M 5.73 5.73 A 2 2 0 0 0 5.73 18.27" />
      <path d="M 5.73 5.73 A 2 2 0 0 1 5.73 18.27" />
      {children}
    </svg>
  );
});

export default SurdoLure;
