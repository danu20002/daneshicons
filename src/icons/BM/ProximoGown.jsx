import React from 'react';

export const iconData = {
  "id": "ProximoGown",
  "name": "ProximoGown",
  "category": "BM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.35 5.83 C 8.43 6.60, 11.69 12.63, 15.25 17.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 6.68 C 5.86 10.57, 5.16 17.89, 17.97 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 5.99 C 7.84 14.11, 4.24 11.39, 16.81 17.03"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 9.00 C 19.14 9.52, 6.51 10.24, 16.05 21.55"
      }
    ]
  ]
};

export const ProximoGown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.35 5.83 C 8.43 6.60, 11.69 12.63, 15.25 17.21" />
      <path d="M 6.10 6.68 C 5.86 10.57, 5.16 17.89, 17.97 18.18" />
      <path d="M 5.62 5.99 C 7.84 14.11, 4.24 11.39, 16.81 17.03" />
      <path d="M 2.48 9.00 C 19.14 9.52, 6.51 10.24, 16.05 21.55" />
      {children}
    </svg>
  );
});

export default ProximoGown;
