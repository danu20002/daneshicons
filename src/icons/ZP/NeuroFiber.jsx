import React from 'react';

export const iconData = {
  "id": "NeuroFiber",
  "name": "NeuroFiber",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.30 3.67 C 5.38 11.09, 8.90 16.42, 15.65 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 2.56 C 4.16 15.01, 10.96 8.76, 16.12 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 8.24 C 13.47 18.97, 9.68 6.71, 21.06 21.26"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 7.47 C 15.13 9.27, 11.81 14.57, 17.88 20.58"
      }
    ],
    [
      "path",
      {
        "d": "M 2.46 2.08 C 17.76 6.10, 15.10 6.66, 14.75 14.22"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 6.25 C 18.46 8.46, 9.54 17.80, 14.66 21.64"
      }
    ]
  ]
};

export const NeuroFiber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.30 3.67 C 5.38 11.09, 8.90 16.42, 15.65 21.15" />
      <path d="M 3.38 2.56 C 4.16 15.01, 10.96 8.76, 16.12 21.32" />
      <path d="M 9.46 8.24 C 13.47 18.97, 9.68 6.71, 21.06 21.26" />
      <path d="M 7.72 7.47 C 15.13 9.27, 11.81 14.57, 17.88 20.58" />
      <path d="M 2.46 2.08 C 17.76 6.10, 15.10 6.66, 14.75 14.22" />
      <path d="M 2.69 6.25 C 18.46 8.46, 9.54 17.80, 14.66 21.64" />
      {children}
    </svg>
  );
});

export default NeuroFiber;
