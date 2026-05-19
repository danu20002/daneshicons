import React from 'react';

export const iconData = {
  "id": "CymoVerify",
  "name": "CymoVerify",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 7.17 a 6.44 1.9319519805908203 0 1 0 12.88 0 a 6.44 1.9319519805908203 0 1 0 -12.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 10.39 a 7.89 2.3661482800034297 0 1 0 15.77 0 a 7.89 2.3661482800034297 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 13.61 a 7.89 2.3661482800034297 0 1 0 15.77 0 a 7.89 2.3661482800034297 0 1 0 -15.77 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.56 16.83 a 6.44 1.9319519805908203 0 1 0 12.88 0 a 6.44 1.9319519805908203 0 1 0 -12.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.03 A 2 2 0 0 0 16.02 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 5.03 A 2 2 0 0 1 16.02 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.03 A 2 2 0 0 0 7.98 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 5.03 A 2 2 0 0 1 7.98 18.97"
      }
    ]
  ]
};

export const CymoVerify = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0" />
      <path d="M 5.56 7.17 a 6.44 1.9319519805908203 0 1 0 12.88 0 a 6.44 1.9319519805908203 0 1 0 -12.88 0" />
      <path d="M 4.11 10.39 a 7.89 2.3661482800034297 0 1 0 15.77 0 a 7.89 2.3661482800034297 0 1 0 -15.77 0" />
      <path d="M 4.11 13.61 a 7.89 2.3661482800034297 0 1 0 15.77 0 a 7.89 2.3661482800034297 0 1 0 -15.77 0" />
      <path d="M 5.56 16.83 a 6.44 1.9319519805908203 0 1 0 12.88 0 a 6.44 1.9319519805908203 0 1 0 -12.88 0" />
      <path d="M 16.02 5.03 A 2 2 0 0 0 16.02 18.97" />
      <path d="M 16.02 5.03 A 2 2 0 0 1 16.02 18.97" />
      <path d="M 7.98 5.03 A 2 2 0 0 0 7.98 18.97" />
      <path d="M 7.98 5.03 A 2 2 0 0 1 7.98 18.97" />
      {children}
    </svg>
  );
});

export default CymoVerify;
