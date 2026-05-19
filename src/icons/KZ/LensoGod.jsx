import React from 'react';

export const iconData = {
  "id": "LensoGod",
  "name": "LensoGod",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 8.54 C 17.94 9.33, 19.07 12.23, 17.99 20.64"
      }
    ],
    [
      "path",
      {
        "d": "M 6.73 5.65 C 4.08 19.12, 5.98 6.37, 14.53 18.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 7.91 C 13.01 5.91, 10.58 17.46, 20.64 17.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.70 4.46 C 12.66 13.64, 12.31 17.91, 14.06 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 5.71 9.24 C 4.32 12.79, 19.44 9.59, 18.91 15.26"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 4.87 C 5.90 4.54, 16.13 14.40, 17.44 18.69"
      }
    ]
  ]
};

export const LensoGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 8.54 C 17.94 9.33, 19.07 12.23, 17.99 20.64" />
      <path d="M 6.73 5.65 C 4.08 19.12, 5.98 6.37, 14.53 18.97" />
      <path d="M 5.27 7.91 C 13.01 5.91, 10.58 17.46, 20.64 17.72" />
      <path d="M 2.70 4.46 C 12.66 13.64, 12.31 17.91, 14.06 21.69" />
      <path d="M 5.71 9.24 C 4.32 12.79, 19.44 9.59, 18.91 15.26" />
      <path d="M 8.68 4.87 C 5.90 4.54, 16.13 14.40, 17.44 18.69" />
      {children}
    </svg>
  );
});

export default LensoGod;
