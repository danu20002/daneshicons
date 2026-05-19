import React from 'react';

export const iconData = {
  "id": "SextoFog",
  "name": "SextoFog",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 12.00 L 22.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 18.36 L 18.32 19.92"
      }
    ],
    [
      "path",
      {
        "d": "M 10.19 19.93 L 9.75 21.88"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 15.53 L 2.87 16.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.67 8.47 L 2.87 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.19 4.07 L 9.75 2.12"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 5.64 L 18.32 4.08"
      }
    ]
  ]
};

export const SextoFog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0" />
      <path d="M 20.13 12.00 L 22.13 12.00" />
      <path d="M 17.07 18.36 L 18.32 19.92" />
      <path d="M 10.19 19.93 L 9.75 21.88" />
      <path d="M 4.67 15.53 L 2.87 16.40" />
      <path d="M 4.67 8.47 L 2.87 7.60" />
      <path d="M 10.19 4.07 L 9.75 2.12" />
      <path d="M 17.07 5.64 L 18.32 4.08" />
      {children}
    </svg>
  );
});

export default SextoFog;
