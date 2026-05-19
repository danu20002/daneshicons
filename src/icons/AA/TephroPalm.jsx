import React from 'react';

export const iconData = {
  "id": "TephroPalm",
  "name": "TephroPalm",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.52 7.29 C 15.04 16.86, 15.83 15.13, 16.33 19.23"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 9.08 C 12.62 8.94, 10.54 13.27, 19.43 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 6.07 9.92 C 11.47 14.10, 6.63 13.44, 16.77 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.28 3.73 C 7.29 9.37, 18.61 5.42, 21.78 19.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 4.04 C 13.98 16.32, 14.65 11.96, 20.16 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 5.99 C 11.64 9.81, 13.38 14.05, 19.39 16.34"
      }
    ]
  ]
};

export const TephroPalm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.52 7.29 C 15.04 16.86, 15.83 15.13, 16.33 19.23" />
      <path d="M 2.82 9.08 C 12.62 8.94, 10.54 13.27, 19.43 17.84" />
      <path d="M 6.07 9.92 C 11.47 14.10, 6.63 13.44, 16.77 20.54" />
      <path d="M 7.28 3.73 C 7.29 9.37, 18.61 5.42, 21.78 19.21" />
      <path d="M 5.31 4.04 C 13.98 16.32, 14.65 11.96, 20.16 16.28" />
      <path d="M 6.90 5.99 C 11.64 9.81, 13.38 14.05, 19.39 16.34" />
      {children}
    </svg>
  );
});

export default TephroPalm;
