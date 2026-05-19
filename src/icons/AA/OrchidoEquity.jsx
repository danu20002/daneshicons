import React from 'react';

export const iconData = {
  "id": "OrchidoEquity",
  "name": "OrchidoEquity",
  "category": "AA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 4.88 C 7.05 12.68, 5.63 7.63, 19.01 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 9.98 6.72 C 7.91 12.71, 4.07 6.75, 17.76 17.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 2.25 C 10.53 7.84, 13.86 19.83, 15.09 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 2.80 5.20 C 7.26 10.48, 19.42 15.06, 16.96 20.76"
      }
    ]
  ]
};

export const OrchidoEquity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 4.88 C 7.05 12.68, 5.63 7.63, 19.01 18.20" />
      <path d="M 9.98 6.72 C 7.91 12.71, 4.07 6.75, 17.76 17.89" />
      <path d="M 4.01 2.25 C 10.53 7.84, 13.86 19.83, 15.09 14.11" />
      <path d="M 2.80 5.20 C 7.26 10.48, 19.42 15.06, 16.96 20.76" />
      {children}
    </svg>
  );
});

export default OrchidoEquity;
