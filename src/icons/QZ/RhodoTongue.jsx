import React from 'react';

export const iconData = {
  "id": "RhodoTongue",
  "name": "RhodoTongue",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.20 7.02 L 15.20 7.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.91 8.82 L 17.91 12.28"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 13.80 L 14.71 17.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.80 16.98 L 8.80 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 8.09 15.18 L 6.09 11.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 10.20 L 9.29 6.74"
      }
    ]
  ]
};

export const RhodoTongue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.20 7.02 L 15.20 7.02" />
      <path d="M 15.91 8.82 L 17.91 12.28" />
      <path d="M 16.71 13.80 L 14.71 17.26" />
      <path d="M 12.80 16.98 L 8.80 16.98" />
      <path d="M 8.09 15.18 L 6.09 11.72" />
      <path d="M 7.29 10.20 L 9.29 6.74" />
      {children}
    </svg>
  );
});

export default RhodoTongue;
