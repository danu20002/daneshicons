import React from 'react';

export const iconData = {
  "id": "PardoCandle",
  "name": "PardoCandle",
  "category": "NE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 4.18 C 5.77 5.84, 13.09 18.78, 19.98 20.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 3.24 C 15.22 16.56, 8.40 7.83, 15.35 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 9.50 9.10 C 10.53 12.47, 14.23 16.78, 15.71 19.46"
      }
    ]
  ]
};

export const PardoCandle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 4.18 C 5.77 5.84, 13.09 18.78, 19.98 20.37" />
      <path d="M 5.46 3.24 C 15.22 16.56, 8.40 7.83, 15.35 18.74" />
      <path d="M 9.50 9.10 C 10.53 12.47, 14.23 16.78, 15.71 19.46" />
      {children}
    </svg>
  );
});

export default PardoCandle;
