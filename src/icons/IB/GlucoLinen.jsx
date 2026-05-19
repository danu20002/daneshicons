import React from 'react';

export const iconData = {
  "id": "GlucoLinen",
  "name": "GlucoLinen",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.19 4.33 C 4.58 13.05, 16.20 9.08, 20.75 21.05"
      }
    ],
    [
      "path",
      {
        "d": "M 5.10 5.74 C 7.29 17.02, 6.79 12.76, 17.61 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 5.02 C 7.39 12.53, 10.28 11.99, 20.54 16.25"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 8.65 C 13.75 5.29, 5.25 18.97, 15.94 14.34"
      }
    ]
  ]
};

export const GlucoLinen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.19 4.33 C 4.58 13.05, 16.20 9.08, 20.75 21.05" />
      <path d="M 5.10 5.74 C 7.29 17.02, 6.79 12.76, 17.61 20.96" />
      <path d="M 8.75 5.02 C 7.39 12.53, 10.28 11.99, 20.54 16.25" />
      <path d="M 7.50 8.65 C 13.75 5.29, 5.25 18.97, 15.94 14.34" />
      {children}
    </svg>
  );
});

export default GlucoLinen;
