import React from 'react';

export const iconData = {
  "id": "ProximoDefect",
  "name": "ProximoDefect",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 7.37 C 15.93 6.19, 16.50 19.92, 17.51 14.04"
      }
    ],
    [
      "path",
      {
        "d": "M 2.03 5.23 C 6.73 11.49, 18.74 10.69, 15.03 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 7.90 C 15.15 16.93, 12.15 13.75, 15.05 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 6.68 C 14.30 4.95, 14.29 6.37, 21.61 14.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 7.29 C 5.10 18.13, 9.60 7.52, 18.82 18.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 9.47 C 6.70 11.21, 9.12 5.31, 18.98 21.14"
      }
    ]
  ]
};

export const ProximoDefect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 7.37 C 15.93 6.19, 16.50 19.92, 17.51 14.04" />
      <path d="M 2.03 5.23 C 6.73 11.49, 18.74 10.69, 15.03 16.21" />
      <path d="M 2.99 7.90 C 15.15 16.93, 12.15 13.75, 15.05 20.07" />
      <path d="M 7.27 6.68 C 14.30 4.95, 14.29 6.37, 21.61 14.60" />
      <path d="M 5.38 7.29 C 5.10 18.13, 9.60 7.52, 18.82 18.73" />
      <path d="M 5.92 9.47 C 6.70 11.21, 9.12 5.31, 18.98 21.14" />
      {children}
    </svg>
  );
});

export default ProximoDefect;
