import React from 'react';

export const iconData = {
  "id": "VespaThrill",
  "name": "VespaThrill",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 4.60 A 6.89 2.97 15 0 0 6.21 12.94"
      }
    ],
    [
      "path",
      {
        "d": "M 11.77 16.94 C 2.73 19.35, 15.00 19.86, 9.66 4.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 7.81 C 18.81 2.29, 13.67 2.87, 18.77 14.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 6.81 C 2.10 13.20, 19.66 12.37, 9.70 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 8.11 L 21.90 9.33"
      }
    ]
  ]
};

export const VespaThrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 4.60 A 6.89 2.97 15 0 0 6.21 12.94" />
      <path d="M 11.77 16.94 C 2.73 19.35, 15.00 19.86, 9.66 4.76" />
      <path d="M 15.50 7.81 C 18.81 2.29, 13.67 2.87, 18.77 14.00" />
      <path d="M 5.18 6.81 C 2.10 13.20, 19.66 12.37, 9.70 5.46" />
      <path d="M 4.28 8.11 L 21.90 9.33" />
      {children}
    </svg>
  );
});

export default VespaThrill;
