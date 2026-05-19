import React from 'react';

export const iconData = {
  "id": "FormoTransit",
  "name": "FormoTransit",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.57 0 a 2.29 2.29 0 1 0 -4.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.60 12.00 a 4.40 4.40 0 1 0 8.81 0 a 4.40 4.40 0 1 0 -8.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.90 12.00 a 6.10 6.10 0 1 0 12.19 0 a 6.10 6.10 0 1 0 -12.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ]
  ]
};

export const FormoTransit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.57 0 a 2.29 2.29 0 1 0 -4.57 0" />
      <path d="M 7.60 12.00 a 4.40 4.40 0 1 0 8.81 0 a 4.40 4.40 0 1 0 -8.81 0" />
      <path d="M 5.90 12.00 a 6.10 6.10 0 1 0 12.19 0 a 6.10 6.10 0 1 0 -12.19 0" />
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      {children}
    </svg>
  );
});

export default FormoTransit;
