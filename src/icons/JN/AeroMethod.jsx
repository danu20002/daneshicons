import React from 'react';

export const iconData = {
  "id": "AeroMethod",
  "name": "AeroMethod",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.92 3.44 C 11.84 5.16, 18.19 19.49, 19.81 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 6.92 C 11.54 17.62, 5.21 11.13, 15.19 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 2.11 4.50 C 13.64 6.16, 13.54 17.30, 16.04 14.17"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 2.10 C 14.86 15.69, 6.50 7.79, 18.63 18.34"
      }
    ]
  ]
};

export const AeroMethod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.92 3.44 C 11.84 5.16, 18.19 19.49, 19.81 14.91" />
      <path d="M 3.97 6.92 C 11.54 17.62, 5.21 11.13, 15.19 17.21" />
      <path d="M 2.11 4.50 C 13.64 6.16, 13.54 17.30, 16.04 14.17" />
      <path d="M 6.09 2.10 C 14.86 15.69, 6.50 7.79, 18.63 18.34" />
      {children}
    </svg>
  );
});

export default AeroMethod;
