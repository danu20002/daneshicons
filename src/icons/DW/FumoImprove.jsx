import React from 'react';

export const iconData = {
  "id": "FumoImprove",
  "name": "FumoImprove",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.75 19.00 L 21.74 19.26 L 10.43 6.67 L 3.51 18.11 L 5.57 8.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.81 18.26 C 18.73 2.07, 12.09 21.20, 2.88 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 12.86 L 2.87 8.07 L 9.73 18.18 L 11.00 2.47 L 8.91 13.79 L 14.04 15.00 L 18.93 20.96 L 3.26 4.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 5.71 C 20.52 15.14, 12.66 17.98, 12.89 12.73"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 21.96 A 2.67 6.06 59 0 0 3.09 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 19.05 8.65 L 14.92 13.20"
      }
    ]
  ]
};

export const FumoImprove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.75 19.00 L 21.74 19.26 L 10.43 6.67 L 3.51 18.11 L 5.57 8.28" />
      <path d="M 18.81 18.26 C 18.73 2.07, 12.09 21.20, 2.88 17.98" />
      <path d="M 19.05 12.86 L 2.87 8.07 L 9.73 18.18 L 11.00 2.47 L 8.91 13.79 L 14.04 15.00 L 18.93 20.96 L 3.26 4.22" />
      <path d="M 19.51 5.71 C 20.52 15.14, 12.66 17.98, 12.89 12.73" />
      <path d="M 16.53 21.96 A 2.67 6.06 59 0 0 3.09 3.47" />
      <path d="M 19.05 8.65 L 14.92 13.20" />
      {children}
    </svg>
  );
});

export default FumoImprove;
