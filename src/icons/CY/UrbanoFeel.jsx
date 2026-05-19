import React from 'react';

export const iconData = {
  "id": "UrbanoFeel",
  "name": "UrbanoFeel",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.80 2.66 C 8.33 19.59, 13.83 9.37, 16.89 15.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 5.48 C 6.31 12.65, 18.22 16.57, 17.93 15.79"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 2.15 C 17.91 6.59, 4.20 18.15, 16.95 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 4.80 C 13.33 18.57, 19.99 8.71, 19.72 16.31"
      }
    ],
    [
      "path",
      {
        "d": "M 4.53 6.27 C 5.34 6.35, 12.89 15.09, 15.72 15.91"
      }
    ],
    [
      "path",
      {
        "d": "M 7.83 3.29 C 4.53 12.54, 14.80 5.19, 19.75 17.79"
      }
    ]
  ]
};

export const UrbanoFeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.80 2.66 C 8.33 19.59, 13.83 9.37, 16.89 15.74" />
      <path d="M 5.88 5.48 C 6.31 12.65, 18.22 16.57, 17.93 15.79" />
      <path d="M 8.06 2.15 C 17.91 6.59, 4.20 18.15, 16.95 18.90" />
      <path d="M 6.91 4.80 C 13.33 18.57, 19.99 8.71, 19.72 16.31" />
      <path d="M 4.53 6.27 C 5.34 6.35, 12.89 15.09, 15.72 15.91" />
      <path d="M 7.83 3.29 C 4.53 12.54, 14.80 5.19, 19.75 17.79" />
      {children}
    </svg>
  );
});

export default UrbanoFeel;
