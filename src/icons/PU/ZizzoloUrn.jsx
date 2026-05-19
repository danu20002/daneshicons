import React from 'react';

export const iconData = {
  "id": "ZizzoloUrn",
  "name": "ZizzoloUrn",
  "category": "PU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 12.00 a 7.03 7.03 0 1 0 14.06 0 a 7.03 7.03 0 1 0 -14.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.47 12.00 a 4.53 4.53 0 1 1 9.05 0 a 4.53 4.53 0 1 1 -9.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.53 12.00 L 20.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 17.10 L 17.32 18.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 18.37 L 10.10 20.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 14.83 L 4.32 15.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 9.17 L 4.32 8.30"
      }
    ],
    [
      "path",
      {
        "d": "M 10.55 5.63 L 10.10 3.68"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 6.90 L 17.32 5.33"
      }
    ]
  ]
};

export const ZizzoloUrn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 12.00 a 7.03 7.03 0 1 0 14.06 0 a 7.03 7.03 0 1 0 -14.06 0" />
      <path d="M 7.47 12.00 a 4.53 4.53 0 1 1 9.05 0 a 4.53 4.53 0 1 1 -9.05 0" />
      <path d="M 18.53 12.00 L 20.53 12.00" />
      <path d="M 16.07 17.10 L 17.32 18.67" />
      <path d="M 10.55 18.37 L 10.10 20.32" />
      <path d="M 6.12 14.83 L 4.32 15.70" />
      <path d="M 6.12 9.17 L 4.32 8.30" />
      <path d="M 10.55 5.63 L 10.10 3.68" />
      <path d="M 16.07 6.90 L 17.32 5.33" />
      {children}
    </svg>
  );
});

export default ZizzoloUrn;
