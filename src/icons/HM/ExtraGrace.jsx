import React from 'react';

export const iconData = {
  "id": "ExtraGrace",
  "name": "ExtraGrace",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.87 8.72 L 14.87 8.72"
      }
    ],
    [
      "path",
      {
        "d": "M 14.27 9.38 L 16.27 12.85"
      }
    ],
    [
      "path",
      {
        "d": "M 15.40 12.66 L 13.40 16.12"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 15.28 L 9.13 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 9.73 14.62 L 7.73 11.15"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 11.34 L 10.60 7.88"
      }
    ]
  ]
};

export const ExtraGrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.87 8.72 L 14.87 8.72" />
      <path d="M 14.27 9.38 L 16.27 12.85" />
      <path d="M 15.40 12.66 L 13.40 16.12" />
      <path d="M 13.13 15.28 L 9.13 15.28" />
      <path d="M 9.73 14.62 L 7.73 11.15" />
      <path d="M 8.60 11.34 L 10.60 7.88" />
      {children}
    </svg>
  );
});

export default ExtraGrace;
