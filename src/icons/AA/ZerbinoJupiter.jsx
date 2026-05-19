import React from 'react';

export const iconData = {
  "id": "ZerbinoJupiter",
  "name": "ZerbinoJupiter",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.50 4.09 C 4.72 11.04, 15.56 4.89, 15.97 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 2.32 4.29 C 13.97 18.82, 19.58 14.90, 17.69 19.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 9.03 C 14.83 16.93, 7.11 11.25, 18.76 18.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 3.09 C 4.60 18.19, 6.03 15.62, 19.32 20.87"
      }
    ],
    [
      "path",
      {
        "d": "M 3.29 4.58 C 6.37 11.93, 12.68 16.29, 14.02 16.09"
      }
    ]
  ]
};

export const ZerbinoJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.50 4.09 C 4.72 11.04, 15.56 4.89, 15.97 16.98" />
      <path d="M 2.32 4.29 C 13.97 18.82, 19.58 14.90, 17.69 19.73" />
      <path d="M 8.41 9.03 C 14.83 16.93, 7.11 11.25, 18.76 18.12" />
      <path d="M 7.71 3.09 C 4.60 18.19, 6.03 15.62, 19.32 20.87" />
      <path d="M 3.29 4.58 C 6.37 11.93, 12.68 16.29, 14.02 16.09" />
      {children}
    </svg>
  );
});

export default ZerbinoJupiter;
