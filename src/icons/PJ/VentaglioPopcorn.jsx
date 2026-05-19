import React from 'react';

export const iconData = {
  "id": "VentaglioPopcorn",
  "name": "VentaglioPopcorn",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 2.93 C 6.34 18.35, 11.88 19.77, 16.88 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.43 7.06 C 18.28 5.15, 14.12 8.52, 16.90 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 5.20 C 12.62 4.64, 6.85 15.10, 21.03 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 9.58 7.65 C 5.98 13.61, 13.08 14.40, 14.66 19.51"
      }
    ]
  ]
};

export const VentaglioPopcorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 2.93 C 6.34 18.35, 11.88 19.77, 16.88 16.21" />
      <path d="M 7.43 7.06 C 18.28 5.15, 14.12 8.52, 16.90 15.81" />
      <path d="M 5.01 5.20 C 12.62 4.64, 6.85 15.10, 21.03 16.01" />
      <path d="M 9.58 7.65 C 5.98 13.61, 13.08 14.40, 14.66 19.51" />
      {children}
    </svg>
  );
});

export default VentaglioPopcorn;
