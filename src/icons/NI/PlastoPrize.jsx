import React from 'react';

export const iconData = {
  "id": "PlastoPrize",
  "name": "PlastoPrize",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.92 8.39 L 10.92 8.39"
      }
    ],
    [
      "path",
      {
        "d": "M 12.59 5.80 L 14.59 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 9.41 L 15.67 12.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.08 15.61 L 13.08 15.61"
      }
    ],
    [
      "path",
      {
        "d": "M 11.41 18.20 L 9.41 14.74"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 14.59 L 8.33 11.13"
      }
    ]
  ]
};

export const PlastoPrize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.92 8.39 L 10.92 8.39" />
      <path d="M 12.59 5.80 L 14.59 9.26" />
      <path d="M 17.67 9.41 L 15.67 12.87" />
      <path d="M 17.08 15.61 L 13.08 15.61" />
      <path d="M 11.41 18.20 L 9.41 14.74" />
      <path d="M 6.33 14.59 L 8.33 11.13" />
      {children}
    </svg>
  );
});

export default PlastoPrize;
