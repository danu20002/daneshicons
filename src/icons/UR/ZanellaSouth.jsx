import React from 'react';

export const iconData = {
  "id": "ZanellaSouth",
  "name": "ZanellaSouth",
  "category": "UR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.83 15.28 Q 2.20 19.12 16.48 5.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.05 3.54 L 11.63 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 9.65 Q 8.55 18.14 7.36 10.91"
      }
    ],
    [
      "path",
      {
        "d": "M 2.26 16.99 Q 2.48 4.83 11.12 11.41"
      }
    ],
    [
      "path",
      {
        "d": "M 11.38 5.39 L 19.11 20.13 L 12.08 2.90"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 7.64 A 3.51 4.81 149 0 0 17.39 4.91"
      }
    ]
  ]
};

export const ZanellaSouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.83 15.28 Q 2.20 19.12 16.48 5.00" />
      <path d="M 14.05 3.54 L 11.63 21.85" />
      <path d="M 5.25 9.65 Q 8.55 18.14 7.36 10.91" />
      <path d="M 2.26 16.99 Q 2.48 4.83 11.12 11.41" />
      <path d="M 11.38 5.39 L 19.11 20.13 L 12.08 2.90" />
      <path d="M 19.51 7.64 A 3.51 4.81 149 0 0 17.39 4.91" />
      {children}
    </svg>
  );
});

export default ZanellaSouth;
