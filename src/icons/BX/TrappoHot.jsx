import React from 'react';

export const iconData = {
  "id": "TrappoHot",
  "name": "TrappoHot",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 12.00 a 4.78 4.78 0 1 1 9.56 0 a 4.78 4.78 0 1 1 -9.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 12.00 L 20.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 16.05 L 19.19 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 14.13 18.55 L 14.75 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 18.55 L 9.25 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 16.05 L 4.81 17.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 12.00 L 3.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.43 7.95 L 4.81 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 5.45 L 9.25 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 14.13 5.45 L 14.75 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.57 7.95 L 19.19 6.77"
      }
    ]
  ]
};

export const TrappoHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.61 12.00 a 7.39 7.39 0 1 0 14.78 0 a 7.39 7.39 0 1 0 -14.78 0" />
      <path d="M 7.22 12.00 a 4.78 4.78 0 1 1 9.56 0 a 4.78 4.78 0 1 1 -9.56 0" />
      <path d="M 18.89 12.00 L 20.89 12.00" />
      <path d="M 17.57 16.05 L 19.19 17.23" />
      <path d="M 14.13 18.55 L 14.75 20.45" />
      <path d="M 9.87 18.55 L 9.25 20.45" />
      <path d="M 6.43 16.05 L 4.81 17.23" />
      <path d="M 5.11 12.00 L 3.11 12.00" />
      <path d="M 6.43 7.95 L 4.81 6.77" />
      <path d="M 9.87 5.45 L 9.25 3.55" />
      <path d="M 14.13 5.45 L 14.75 3.55" />
      <path d="M 17.57 7.95 L 19.19 6.77" />
      {children}
    </svg>
  );
});

export default TrappoHot;
