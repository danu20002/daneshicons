import React from 'react';

export const iconData = {
  "id": "TriumviInteger",
  "name": "TriumviInteger",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.57 2.07 C 17.50 4.20, 5.37 6.15, 21.53 16.47"
      }
    ],
    [
      "path",
      {
        "d": "M 2.68 4.92 C 16.71 8.95, 6.67 17.59, 16.94 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 2.56 5.78 C 11.65 19.50, 13.30 6.82, 19.07 18.74"
      }
    ],
    [
      "path",
      {
        "d": "M 7.51 2.03 C 5.69 4.29, 13.47 10.89, 17.82 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 8.85 4.25 C 10.56 12.24, 18.64 14.24, 15.36 18.81"
      }
    ]
  ]
};

export const TriumviInteger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.57 2.07 C 17.50 4.20, 5.37 6.15, 21.53 16.47" />
      <path d="M 2.68 4.92 C 16.71 8.95, 6.67 17.59, 16.94 18.52" />
      <path d="M 2.56 5.78 C 11.65 19.50, 13.30 6.82, 19.07 18.74" />
      <path d="M 7.51 2.03 C 5.69 4.29, 13.47 10.89, 17.82 21.26" />
      <path d="M 8.85 4.25 C 10.56 12.24, 18.64 14.24, 15.36 18.81" />
      {children}
    </svg>
  );
});

export default TriumviInteger;
