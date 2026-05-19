import React from 'react';

export const iconData = {
  "id": "PlatinoArrow",
  "name": "PlatinoArrow",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 2.74 C 11.59 11.55, 15.75 4.92, 21.59 16.53"
      }
    ],
    [
      "path",
      {
        "d": "M 9.84 6.22 C 18.87 10.31, 7.03 10.38, 18.58 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 2.61 C 7.56 17.33, 16.49 5.36, 19.41 17.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 7.13 C 17.45 17.19, 16.88 13.37, 14.44 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 4.15 C 18.00 14.24, 6.69 7.95, 21.50 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 9.85 6.99 C 11.04 11.10, 5.08 17.54, 20.18 15.79"
      }
    ]
  ]
};

export const PlatinoArrow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 2.74 C 11.59 11.55, 15.75 4.92, 21.59 16.53" />
      <path d="M 9.84 6.22 C 18.87 10.31, 7.03 10.38, 18.58 16.38" />
      <path d="M 7.82 2.61 C 7.56 17.33, 16.49 5.36, 19.41 17.59" />
      <path d="M 3.37 7.13 C 17.45 17.19, 16.88 13.37, 14.44 14.07" />
      <path d="M 6.54 4.15 C 18.00 14.24, 6.69 7.95, 21.50 20.85" />
      <path d="M 9.85 6.99 C 11.04 11.10, 5.08 17.54, 20.18 15.79" />
      {children}
    </svg>
  );
});

export default PlatinoArrow;
