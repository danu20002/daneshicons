import React from 'react';

export const iconData = {
  "id": "ViolaFloor",
  "name": "ViolaFloor",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.33 13.96 L 10.60 20.42 L 11.27 8.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 18.90 A 6.35 4.61 43 0 1 11.48 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 12.86 C 2.18 12.28, 14.11 3.49, 12.76 12.33"
      }
    ],
    [
      "path",
      {
        "d": "M 18.20 11.07 L 12.62 2.34 L 18.12 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 10.58 16.03 A 6.70 5.81 180 0 0 11.76 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 14.30 19.74 Q 5.68 5.67 5.69 14.38"
      }
    ]
  ]
};

export const ViolaFloor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.33 13.96 L 10.60 20.42 L 11.27 8.51" />
      <path d="M 9.99 18.90 A 6.35 4.61 43 0 1 11.48 10.64" />
      <path d="M 4.84 12.86 C 2.18 12.28, 14.11 3.49, 12.76 12.33" />
      <path d="M 18.20 11.07 L 12.62 2.34 L 18.12 15.46" />
      <path d="M 10.58 16.03 A 6.70 5.81 180 0 0 11.76 5.40" />
      <path d="M 14.30 19.74 Q 5.68 5.67 5.69 14.38" />
      {children}
    </svg>
  );
});

export default ViolaFloor;
