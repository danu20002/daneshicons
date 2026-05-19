import React from 'react';

export const iconData = {
  "id": "VentaglioWilling",
  "name": "VentaglioWilling",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.58 9.12 C 12.96 6.03, 16.02 7.35, 14.84 14.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 4.74 C 17.93 18.35, 9.76 13.30, 18.49 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 3.79 C 5.88 13.91, 19.66 16.45, 18.18 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.29 3.83 C 16.15 12.43, 16.69 7.58, 21.59 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 6.00 C 5.82 5.96, 9.06 6.07, 17.61 19.56"
      }
    ]
  ]
};

export const VentaglioWilling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.58 9.12 C 12.96 6.03, 16.02 7.35, 14.84 14.90" />
      <path d="M 5.82 4.74 C 17.93 18.35, 9.76 13.30, 18.49 20.02" />
      <path d="M 2.81 3.79 C 5.88 13.91, 19.66 16.45, 18.18 16.21" />
      <path d="M 5.29 3.83 C 16.15 12.43, 16.69 7.58, 21.59 17.70" />
      <path d="M 7.71 6.00 C 5.82 5.96, 9.06 6.07, 17.61 19.56" />
      {children}
    </svg>
  );
});

export default VentaglioWilling;
