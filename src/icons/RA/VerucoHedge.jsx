import React from 'react';

export const iconData = {
  "id": "VerucoHedge",
  "name": "VerucoHedge",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.96 12.72 C 5.18 10.79, 18.87 5.23, 7.72 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 14.03 L 3.06 3.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 12.86 C 12.57 6.05, 11.91 2.67, 9.17 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 17.90 4.16 L 11.25 5.99 L 19.33 13.05 L 16.05 7.86 L 14.28 12.57 L 9.17 11.13 L 2.16 17.10 L 19.04 8.17"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 5.73 A 6.15 4.02 90 0 1 11.88 4.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.22 7.90 C 10.85 21.93, 11.02 4.66, 10.86 13.99"
      }
    ]
  ]
};

export const VerucoHedge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.96 12.72 C 5.18 10.79, 18.87 5.23, 7.72 21.71" />
      <path d="M 5.18 14.03 L 3.06 3.48" />
      <path d="M 12.11 12.86 C 12.57 6.05, 11.91 2.67, 9.17 18.15" />
      <path d="M 17.90 4.16 L 11.25 5.99 L 19.33 13.05 L 16.05 7.86 L 14.28 12.57 L 9.17 11.13 L 2.16 17.10 L 19.04 8.17" />
      <path d="M 8.60 5.73 A 6.15 4.02 90 0 1 11.88 4.30" />
      <path d="M 7.22 7.90 C 10.85 21.93, 11.02 4.66, 10.86 13.99" />
      {children}
    </svg>
  );
});

export default VerucoHedge;
