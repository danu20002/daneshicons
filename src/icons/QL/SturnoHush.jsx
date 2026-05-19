import React from 'react';

export const iconData = {
  "id": "SturnoHush",
  "name": "SturnoHush",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.67 12.00 a 9.33 9.33 0 1 0 18.67 0 a 9.33 9.33 0 1 0 -18.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 8.89 a 8.80 2.640033646771948 0 1 0 17.60 0 a 8.80 2.640033646771948 0 1 0 -17.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.20 15.11 a 8.80 2.640033646771948 0 1 0 17.60 0 a 8.80 2.640033646771948 0 1 0 -17.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 5.40 A 2 2 0 0 0 18.60 18.60"
      }
    ],
    [
      "path",
      {
        "d": "M 18.60 5.40 A 2 2 0 0 1 18.60 18.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.67 A 2 2 0 0 0 12.00 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.67 A 2 2 0 0 1 12.00 21.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 5.40 A 2 2 0 0 0 5.40 18.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 5.40 A 2 2 0 0 1 5.40 18.60"
      }
    ]
  ]
};

export const SturnoHush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.67 12.00 a 9.33 9.33 0 1 0 18.67 0 a 9.33 9.33 0 1 0 -18.67 0" />
      <path d="M 3.20 8.89 a 8.80 2.640033646771948 0 1 0 17.60 0 a 8.80 2.640033646771948 0 1 0 -17.60 0" />
      <path d="M 3.20 15.11 a 8.80 2.640033646771948 0 1 0 17.60 0 a 8.80 2.640033646771948 0 1 0 -17.60 0" />
      <path d="M 18.60 5.40 A 2 2 0 0 0 18.60 18.60" />
      <path d="M 18.60 5.40 A 2 2 0 0 1 18.60 18.60" />
      <path d="M 12.00 2.67 A 2 2 0 0 0 12.00 21.33" />
      <path d="M 12.00 2.67 A 2 2 0 0 1 12.00 21.33" />
      <path d="M 5.40 5.40 A 2 2 0 0 0 5.40 18.60" />
      <path d="M 5.40 5.40 A 2 2 0 0 1 5.40 18.60" />
      {children}
    </svg>
  );
});

export default SturnoHush;
