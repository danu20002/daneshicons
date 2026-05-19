import React from 'react';

export const iconData = {
  "id": "NovoInstall",
  "name": "NovoInstall",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.64 12.00 a 9.36 9.36 0 1 0 18.73 0 a 9.36 9.36 0 1 0 -18.73 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 6.38 a 7.49 2.2473308473080396 0 1 0 14.98 0 a 7.49 2.2473308473080396 0 1 0 -14.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 10.13 a 9.17 2.7524069295606357 0 1 0 18.35 0 a 9.17 2.7524069295606357 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 13.87 a 9.17 2.7524069295606357 0 1 0 18.35 0 a 9.17 2.7524069295606357 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 17.62 a 7.49 2.2473308473080396 0 1 0 14.98 0 a 7.49 2.2473308473080396 0 1 0 -14.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.89 A 2 2 0 0 0 16.68 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.68 3.89 A 2 2 0 0 1 16.68 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.89 A 2 2 0 0 0 7.32 20.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 3.89 A 2 2 0 0 1 7.32 20.11"
      }
    ]
  ]
};

export const NovoInstall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.64 12.00 a 9.36 9.36 0 1 0 18.73 0 a 9.36 9.36 0 1 0 -18.73 0" />
      <path d="M 4.51 6.38 a 7.49 2.2473308473080396 0 1 0 14.98 0 a 7.49 2.2473308473080396 0 1 0 -14.98 0" />
      <path d="M 2.83 10.13 a 9.17 2.7524069295606357 0 1 0 18.35 0 a 9.17 2.7524069295606357 0 1 0 -18.35 0" />
      <path d="M 2.83 13.87 a 9.17 2.7524069295606357 0 1 0 18.35 0 a 9.17 2.7524069295606357 0 1 0 -18.35 0" />
      <path d="M 4.51 17.62 a 7.49 2.2473308473080396 0 1 0 14.98 0 a 7.49 2.2473308473080396 0 1 0 -14.98 0" />
      <path d="M 16.68 3.89 A 2 2 0 0 0 16.68 20.11" />
      <path d="M 16.68 3.89 A 2 2 0 0 1 16.68 20.11" />
      <path d="M 7.32 3.89 A 2 2 0 0 0 7.32 20.11" />
      <path d="M 7.32 3.89 A 2 2 0 0 1 7.32 20.11" />
      {children}
    </svg>
  );
});

export default NovoInstall;
