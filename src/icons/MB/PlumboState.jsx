import React from 'react';

export const iconData = {
  "id": "PlumboState",
  "name": "PlumboState",
  "category": "MB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 9.19 a 7.94 2.382960124523217 0 1 0 15.89 0 a 7.94 2.382960124523217 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.06 14.81 a 7.94 2.382960124523217 0 1 0 15.89 0 a 7.94 2.382960124523217 0 1 0 -15.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 4.70 A 2 2 0 0 0 16.21 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.21 4.70 A 2 2 0 0 1 16.21 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 4.70 A 2 2 0 0 0 7.79 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 4.70 A 2 2 0 0 1 7.79 19.30"
      }
    ]
  ]
};

export const PlumboState = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.85 0 a 8.43 8.43 0 1 0 -16.85 0" />
      <path d="M 4.06 9.19 a 7.94 2.382960124523217 0 1 0 15.89 0 a 7.94 2.382960124523217 0 1 0 -15.89 0" />
      <path d="M 4.06 14.81 a 7.94 2.382960124523217 0 1 0 15.89 0 a 7.94 2.382960124523217 0 1 0 -15.89 0" />
      <path d="M 16.21 4.70 A 2 2 0 0 0 16.21 19.30" />
      <path d="M 16.21 4.70 A 2 2 0 0 1 16.21 19.30" />
      <path d="M 7.79 4.70 A 2 2 0 0 0 7.79 19.30" />
      <path d="M 7.79 4.70 A 2 2 0 0 1 7.79 19.30" />
      {children}
    </svg>
  );
});

export default PlumboState;
