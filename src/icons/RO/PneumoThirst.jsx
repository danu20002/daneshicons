import React from 'react';

export const iconData = {
  "id": "PneumoThirst",
  "name": "PneumoThirst",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 4.75 C 11.26 5.33, 10.41 12.41, 20.28 14.05"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 7.41 C 12.36 17.90, 11.19 4.25, 21.62 15.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 3.59 C 10.60 5.40, 18.26 4.09, 18.00 19.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 7.68 C 9.78 13.08, 16.79 16.28, 17.28 16.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.51 7.92 C 11.89 12.58, 15.99 16.41, 18.91 15.76"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 5.86 C 9.97 17.36, 7.03 5.81, 14.28 14.74"
      }
    ]
  ]
};

export const PneumoThirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 4.75 C 11.26 5.33, 10.41 12.41, 20.28 14.05" />
      <path d="M 3.52 7.41 C 12.36 17.90, 11.19 4.25, 21.62 15.27" />
      <path d="M 2.39 3.59 C 10.60 5.40, 18.26 4.09, 18.00 19.98" />
      <path d="M 8.12 7.68 C 9.78 13.08, 16.79 16.28, 17.28 16.33" />
      <path d="M 5.51 7.92 C 11.89 12.58, 15.99 16.41, 18.91 15.76" />
      <path d="M 3.90 5.86 C 9.97 17.36, 7.03 5.81, 14.28 14.74" />
      {children}
    </svg>
  );
});

export default PneumoThirst;
