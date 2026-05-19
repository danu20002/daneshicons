import React from 'react';

export const iconData = {
  "id": "TaureSphere",
  "name": "TaureSphere",
  "category": "H",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 2.37 C 8.81 15.79, 4.18 12.33, 19.46 14.44"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 3.50 C 13.15 9.58, 19.14 7.50, 20.22 19.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 8.77 C 8.60 17.28, 11.60 10.94, 17.17 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 3.37 C 18.48 14.45, 14.23 16.93, 18.21 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 9.48 C 13.53 13.60, 5.59 5.09, 16.20 14.64"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 7.08 C 12.95 19.32, 5.88 18.18, 18.31 16.29"
      }
    ]
  ]
};

export const TaureSphere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 2.37 C 8.81 15.79, 4.18 12.33, 19.46 14.44" />
      <path d="M 5.36 3.50 C 13.15 9.58, 19.14 7.50, 20.22 19.89" />
      <path d="M 3.18 8.77 C 8.60 17.28, 11.60 10.94, 17.17 19.78" />
      <path d="M 2.37 3.37 C 18.48 14.45, 14.23 16.93, 18.21 14.42" />
      <path d="M 3.74 9.48 C 13.53 13.60, 5.59 5.09, 16.20 14.64" />
      <path d="M 2.69 7.08 C 12.95 19.32, 5.88 18.18, 18.31 16.29" />
      {children}
    </svg>
  );
});

export default TaureSphere;
