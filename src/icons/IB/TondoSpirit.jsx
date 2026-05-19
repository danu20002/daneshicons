import React from 'react';

export const iconData = {
  "id": "TondoSpirit",
  "name": "TondoSpirit",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 2.96 C 4.94 5.29, 15.62 12.78, 16.99 21.39"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 7.59 C 11.39 15.38, 4.95 18.63, 20.57 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 3.09 C 10.13 15.82, 18.82 14.31, 20.61 16.15"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 6.21 C 15.06 12.38, 19.60 18.71, 16.35 17.59"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 6.74 C 5.03 8.64, 18.21 11.58, 18.31 18.21"
      }
    ]
  ]
};

export const TondoSpirit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 2.96 C 4.94 5.29, 15.62 12.78, 16.99 21.39" />
      <path d="M 3.30 7.59 C 11.39 15.38, 4.95 18.63, 20.57 20.97" />
      <path d="M 3.32 3.09 C 10.13 15.82, 18.82 14.31, 20.61 16.15" />
      <path d="M 5.57 6.21 C 15.06 12.38, 19.60 18.71, 16.35 17.59" />
      <path d="M 5.04 6.74 C 5.03 8.64, 18.21 11.58, 18.31 18.21" />
      {children}
    </svg>
  );
});

export default TondoSpirit;
