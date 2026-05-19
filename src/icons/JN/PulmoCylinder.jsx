import React from 'react';

export const iconData = {
  "id": "PulmoCylinder",
  "name": "PulmoCylinder",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 2.12 C 11.75 15.40, 9.97 13.53, 16.53 19.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.95 6.40 C 14.95 16.54, 12.41 19.31, 21.83 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 2.44 7.96 C 14.14 5.59, 10.56 15.58, 16.02 19.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 7.34 C 4.71 18.11, 8.23 9.51, 15.03 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 3.35 C 18.85 10.90, 4.68 4.92, 18.32 18.75"
      }
    ]
  ]
};

export const PulmoCylinder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 2.12 C 11.75 15.40, 9.97 13.53, 16.53 19.09" />
      <path d="M 5.95 6.40 C 14.95 16.54, 12.41 19.31, 21.83 18.26" />
      <path d="M 2.44 7.96 C 14.14 5.59, 10.56 15.58, 16.02 19.29" />
      <path d="M 8.45 7.34 C 4.71 18.11, 8.23 9.51, 15.03 20.81" />
      <path d="M 4.98 3.35 C 18.85 10.90, 4.68 4.92, 18.32 18.75" />
      {children}
    </svg>
  );
});

export default PulmoCylinder;
