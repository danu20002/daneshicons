import React from 'react';

export const iconData = {
  "id": "SalinoPrestige",
  "name": "SalinoPrestige",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.84 3.14 L 21.19 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 18.18 18.86 A 5.09 6.12 112 0 1 12.99 13.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 20.69 C 10.76 3.68, 7.52 14.27, 10.05 14.33"
      }
    ],
    [
      "path",
      {
        "d": "M 21.74 9.78 L 2.05 6.45 L 21.97 13.54 L 2.74 15.12 L 17.98 9.51 L 18.32 5.56"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 18.31 A 3.93 6.40 174 0 1 9.80 18.50"
      }
    ],
    [
      "path",
      {
        "d": "M 19.43 11.19 C 20.17 20.99, 11.73 9.17, 17.80 6.74"
      }
    ]
  ]
};

export const SalinoPrestige = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.84 3.14 L 21.19 18.87" />
      <path d="M 18.18 18.86 A 5.09 6.12 112 0 1 12.99 13.93" />
      <path d="M 17.27 20.69 C 10.76 3.68, 7.52 14.27, 10.05 14.33" />
      <path d="M 21.74 9.78 L 2.05 6.45 L 21.97 13.54 L 2.74 15.12 L 17.98 9.51 L 18.32 5.56" />
      <path d="M 9.62 18.31 A 3.93 6.40 174 0 1 9.80 18.50" />
      <path d="M 19.43 11.19 C 20.17 20.99, 11.73 9.17, 17.80 6.74" />
      {children}
    </svg>
  );
});

export default SalinoPrestige;
