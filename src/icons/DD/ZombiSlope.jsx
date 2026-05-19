import React from 'react';

export const iconData = {
  "id": "ZombiSlope",
  "name": "ZombiSlope",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.74 11.01 L 19.44 20.48 L 4.68 10.45 L 7.15 5.93 L 14.81 2.58 L 16.42 19.79 L 8.98 20.56 L 8.20 10.92"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 20.82 C 5.71 9.53, 13.30 13.75, 12.64 9.77"
      }
    ],
    [
      "path",
      {
        "d": "M 17.84 7.15 L 9.74 3.45 L 9.14 14.43 L 17.37 6.99"
      }
    ],
    [
      "path",
      {
        "d": "M 21.23 17.41 L 4.66 11.87 L 13.92 15.37 L 11.41 6.69 L 6.35 6.68 L 15.61 15.81 L 13.42 19.12 L 13.87 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 8.20 16.85 A 2.83 5.55 62 0 0 20.46 15.93"
      }
    ]
  ]
};

export const ZombiSlope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.74 11.01 L 19.44 20.48 L 4.68 10.45 L 7.15 5.93 L 14.81 2.58 L 16.42 19.79 L 8.98 20.56 L 8.20 10.92" />
      <path d="M 3.23 20.82 C 5.71 9.53, 13.30 13.75, 12.64 9.77" />
      <path d="M 17.84 7.15 L 9.74 3.45 L 9.14 14.43 L 17.37 6.99" />
      <path d="M 21.23 17.41 L 4.66 11.87 L 13.92 15.37 L 11.41 6.69 L 6.35 6.68 L 15.61 15.81 L 13.42 19.12 L 13.87 18.88" />
      <path d="M 8.20 16.85 A 2.83 5.55 62 0 0 20.46 15.93" />
      {children}
    </svg>
  );
});

export default ZombiSlope;
