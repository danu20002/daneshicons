import React from 'react';

export const iconData = {
  "id": "XerofiloThreshold",
  "name": "XerofiloThreshold",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.15 7.26 C 12.16 9.91, 6.64 13.97, 15.64 17.35"
      }
    ],
    [
      "path",
      {
        "d": "M 9.20 7.82 C 10.64 12.60, 8.00 15.80, 18.15 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 4.85 C 4.38 17.80, 8.41 16.90, 21.34 14.55"
      }
    ]
  ]
};

export const XerofiloThreshold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.15 7.26 C 12.16 9.91, 6.64 13.97, 15.64 17.35" />
      <path d="M 9.20 7.82 C 10.64 12.60, 8.00 15.80, 18.15 14.82" />
      <path d="M 8.01 4.85 C 4.38 17.80, 8.41 16.90, 21.34 14.55" />
      {children}
    </svg>
  );
});

export default XerofiloThreshold;
