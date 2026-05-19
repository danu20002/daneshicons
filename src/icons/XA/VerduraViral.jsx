import React from 'react';

export const iconData = {
  "id": "VerduraViral",
  "name": "VerduraViral",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.78 0 a 8.39 8.39 0 1 0 -16.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 7.80 a 7.27 2.1804054398369734 0 1 0 14.54 0 a 7.27 2.1804054398369734 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 2.517715335264802 0 1 0 16.78 0 a 8.39 2.517715335264802 0 1 0 -16.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 16.20 a 7.27 2.1804054398369734 0 1 0 14.54 0 a 7.27 2.1804054398369734 0 1 0 -14.54 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 4.73 A 2 2 0 0 0 16.20 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 16.20 4.73 A 2 2 0 0 1 16.20 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.73 A 2 2 0 0 0 7.80 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 4.73 A 2 2 0 0 1 7.80 19.27"
      }
    ]
  ]
};

export const VerduraViral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.78 0 a 8.39 8.39 0 1 0 -16.78 0" />
      <path d="M 4.73 7.80 a 7.27 2.1804054398369734 0 1 0 14.54 0 a 7.27 2.1804054398369734 0 1 0 -14.54 0" />
      <path d="M 3.61 12.00 a 8.39 2.517715335264802 0 1 0 16.78 0 a 8.39 2.517715335264802 0 1 0 -16.78 0" />
      <path d="M 4.73 16.20 a 7.27 2.1804054398369734 0 1 0 14.54 0 a 7.27 2.1804054398369734 0 1 0 -14.54 0" />
      <path d="M 16.20 4.73 A 2 2 0 0 0 16.20 19.27" />
      <path d="M 16.20 4.73 A 2 2 0 0 1 16.20 19.27" />
      <path d="M 7.80 4.73 A 2 2 0 0 0 7.80 19.27" />
      <path d="M 7.80 4.73 A 2 2 0 0 1 7.80 19.27" />
      {children}
    </svg>
  );
});

export default VerduraViral;
