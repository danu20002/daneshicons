import React from 'react';

export const iconData = {
  "id": "UmbelChair",
  "name": "UmbelChair",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.81 3.24 C 18.46 14.28, 14.90 6.47, 16.71 14.23"
      }
    ],
    [
      "path",
      {
        "d": "M 4.58 4.75 C 7.32 18.65, 4.56 10.45, 14.11 15.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 5.77 C 10.33 10.16, 14.26 12.04, 16.92 19.96"
      }
    ]
  ]
};

export const UmbelChair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.81 3.24 C 18.46 14.28, 14.90 6.47, 16.71 14.23" />
      <path d="M 4.58 4.75 C 7.32 18.65, 4.56 10.45, 14.11 15.93" />
      <path d="M 6.16 5.77 C 10.33 10.16, 14.26 12.04, 16.92 19.96" />
      {children}
    </svg>
  );
});

export default UmbelChair;
