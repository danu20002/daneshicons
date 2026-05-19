import React from 'react';

export const iconData = {
  "id": "VallatoCarrier",
  "name": "VallatoCarrier",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 5.74 C 8.29 13.67, 17.47 17.56, 18.06 16.37"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 8.11 C 15.72 6.48, 4.03 4.57, 14.24 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 3.68 C 4.81 17.80, 6.23 8.11, 21.48 17.16"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 8.74 C 15.44 11.62, 11.33 9.67, 19.35 18.14"
      }
    ]
  ]
};

export const VallatoCarrier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 5.74 C 8.29 13.67, 17.47 17.56, 18.06 16.37" />
      <path d="M 8.07 8.11 C 15.72 6.48, 4.03 4.57, 14.24 20.69" />
      <path d="M 3.09 3.68 C 4.81 17.80, 6.23 8.11, 21.48 17.16" />
      <path d="M 5.70 8.74 C 15.44 11.62, 11.33 9.67, 19.35 18.14" />
      {children}
    </svg>
  );
});

export default VallatoCarrier;
