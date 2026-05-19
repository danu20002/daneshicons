import React from 'react';

export const iconData = {
  "id": "PhrenGown",
  "name": "PhrenGown",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 9.14 a 8.08 2.4234431939204626 0 1 0 16.16 0 a 8.08 2.4234431939204626 0 1 0 -16.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 14.86 a 8.08 2.423443193920463 0 1 0 16.16 0 a 8.08 2.423443193920463 0 1 0 -16.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.43 A 2 2 0 0 0 12.00 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.43 A 2 2 0 0 1 12.00 20.57"
      }
    ]
  ]
};

export const PhrenGown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      <path d="M 3.92 9.14 a 8.08 2.4234431939204626 0 1 0 16.16 0 a 8.08 2.4234431939204626 0 1 0 -16.16 0" />
      <path d="M 3.92 14.86 a 8.08 2.423443193920463 0 1 0 16.16 0 a 8.08 2.423443193920463 0 1 0 -16.16 0" />
      <path d="M 12.00 3.43 A 2 2 0 0 0 12.00 20.57" />
      <path d="M 12.00 3.43 A 2 2 0 0 1 12.00 20.57" />
      {children}
    </svg>
  );
});

export default PhrenGown;
