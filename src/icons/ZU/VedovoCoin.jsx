import React from 'react';

export const iconData = {
  "id": "VedovoCoin",
  "name": "VedovoCoin",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.23 19.10 L 17.92 14.11 L 2.93 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 21.19 L 16.94 3.12 L 10.35 20.06 L 19.80 13.89 L 15.73 15.13 L 14.78 5.60 L 10.38 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 20.21 4.66 Q 18.01 20.25 4.28 13.45"
      }
    ],
    [
      "path",
      {
        "d": "M 20.66 7.52 C 19.34 6.23, 5.85 13.95, 5.74 4.56"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 17.59 Q 2.71 13.20 12.60 18.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.06 18.30 C 5.17 12.37, 15.69 18.76, 16.80 16.18"
      }
    ]
  ]
};

export const VedovoCoin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.23 19.10 L 17.92 14.11 L 2.93 20.98" />
      <path d="M 4.03 21.19 L 16.94 3.12 L 10.35 20.06 L 19.80 13.89 L 15.73 15.13 L 14.78 5.60 L 10.38 19.41" />
      <path d="M 20.21 4.66 Q 18.01 20.25 4.28 13.45" />
      <path d="M 20.66 7.52 C 19.34 6.23, 5.85 13.95, 5.74 4.56" />
      <path d="M 14.29 17.59 Q 2.71 13.20 12.60 18.29" />
      <path d="M 14.06 18.30 C 5.17 12.37, 15.69 18.76, 16.80 16.18" />
      {children}
    </svg>
  );
});

export default VedovoCoin;
