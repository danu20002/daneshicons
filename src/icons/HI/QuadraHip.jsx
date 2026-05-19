import React from 'react';

export const iconData = {
  "id": "QuadraHip",
  "name": "QuadraHip",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.18 3.97 C 18.15 11.31, 18.21 9.00, 21.47 14.68"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 8.87 C 14.92 6.33, 5.07 15.45, 15.37 17.85"
      }
    ],
    [
      "path",
      {
        "d": "M 2.84 4.75 C 15.83 9.91, 4.04 7.48, 16.16 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 6.24 5.20 C 12.06 12.87, 13.57 6.08, 18.48 20.30"
      }
    ]
  ]
};

export const QuadraHip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.18 3.97 C 18.15 11.31, 18.21 9.00, 21.47 14.68" />
      <path d="M 2.19 8.87 C 14.92 6.33, 5.07 15.45, 15.37 17.85" />
      <path d="M 2.84 4.75 C 15.83 9.91, 4.04 7.48, 16.16 19.20" />
      <path d="M 6.24 5.20 C 12.06 12.87, 13.57 6.08, 18.48 20.30" />
      {children}
    </svg>
  );
});

export default QuadraHip;
