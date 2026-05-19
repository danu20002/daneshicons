import React from 'react';

export const iconData = {
  "id": "ZoticoSedge",
  "name": "ZoticoSedge",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.69 12.00 a 7.31 7.31 0 1 0 14.62 0 a 7.31 7.31 0 1 0 -14.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 12.00 a 4.67 4.67 0 1 1 9.33 0 a 4.67 4.67 0 1 1 -9.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.81 12.00 L 20.81 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 16.00 L 19.13 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 14.10 18.47 L 14.72 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 18.47 L 9.28 20.38"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 16.00 L 4.87 17.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.19 12.00 L 3.19 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 8.00 L 4.87 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 9.90 5.53 L 9.28 3.62"
      }
    ],
    [
      "path",
      {
        "d": "M 14.10 5.53 L 14.72 3.62"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 8.00 L 19.13 6.82"
      }
    ]
  ]
};

export const ZoticoSedge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.69 12.00 a 7.31 7.31 0 1 0 14.62 0 a 7.31 7.31 0 1 0 -14.62 0" />
      <path d="M 7.33 12.00 a 4.67 4.67 0 1 1 9.33 0 a 4.67 4.67 0 1 1 -9.33 0" />
      <path d="M 18.81 12.00 L 20.81 12.00" />
      <path d="M 17.51 16.00 L 19.13 17.18" />
      <path d="M 14.10 18.47 L 14.72 20.38" />
      <path d="M 9.90 18.47 L 9.28 20.38" />
      <path d="M 6.49 16.00 L 4.87 17.18" />
      <path d="M 5.19 12.00 L 3.19 12.00" />
      <path d="M 6.49 8.00 L 4.87 6.82" />
      <path d="M 9.90 5.53 L 9.28 3.62" />
      <path d="M 14.10 5.53 L 14.72 3.62" />
      <path d="M 17.51 8.00 L 19.13 6.82" />
      {children}
    </svg>
  );
});

export default ZoticoSedge;
