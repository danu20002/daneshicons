import React from 'react';

export const iconData = {
  "id": "XilofonoVision",
  "name": "XilofonoVision",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 6.14 L 16.96 5.74 L 18.30 13.37 L 13.47 17.38 L 5.38 9.12 L 14.87 5.57 L 20.26 8.92 L 9.42 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 10.97 7.61 A 3.70 4.05 44 0 1 11.58 4.82"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 9.64 L 12.55 4.16"
      }
    ],
    [
      "path",
      {
        "d": "M 15.79 17.02 C 9.30 2.68, 14.03 4.42, 14.53 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 2.28 18.23 C 11.14 3.33, 21.55 8.18, 19.32 19.48"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 18.12 L 3.46 14.39"
      }
    ]
  ]
};

export const XilofonoVision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 6.14 L 16.96 5.74 L 18.30 13.37 L 13.47 17.38 L 5.38 9.12 L 14.87 5.57 L 20.26 8.92 L 9.42 10.64" />
      <path d="M 10.97 7.61 A 3.70 4.05 44 0 1 11.58 4.82" />
      <path d="M 16.69 9.64 L 12.55 4.16" />
      <path d="M 15.79 17.02 C 9.30 2.68, 14.03 4.42, 14.53 18.83" />
      <path d="M 2.28 18.23 C 11.14 3.33, 21.55 8.18, 19.32 19.48" />
      <path d="M 2.39 18.12 L 3.46 14.39" />
      {children}
    </svg>
  );
});

export default XilofonoVision;
