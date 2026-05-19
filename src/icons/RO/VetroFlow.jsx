import React from 'react';

export const iconData = {
  "id": "VetroFlow",
  "name": "VetroFlow",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.14 3.73 C 6.97 5.48, 12.87 8.85, 18.15 18.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 7.32 C 14.56 10.17, 12.63 18.79, 20.13 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 2.89 C 11.39 11.12, 4.82 13.79, 15.41 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 2.95 C 16.85 7.47, 10.66 10.92, 21.16 21.01"
      }
    ]
  ]
};

export const VetroFlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.14 3.73 C 6.97 5.48, 12.87 8.85, 18.15 18.81" />
      <path d="M 5.12 7.32 C 14.56 10.17, 12.63 18.79, 20.13 20.33" />
      <path d="M 5.96 2.89 C 11.39 11.12, 4.82 13.79, 15.41 14.99" />
      <path d="M 5.12 2.95 C 16.85 7.47, 10.66 10.92, 21.16 21.01" />
      {children}
    </svg>
  );
});

export default VetroFlow;
