import React from 'react';

export const iconData = {
  "id": "PirouInstall",
  "name": "PirouInstall",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.05 20.71 L 15.15 13.87 L 20.53 3.41 L 7.45 13.19 L 14.63 19.18 L 8.32 18.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.44 21.37 A 6.10 6.35 64 0 1 21.31 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 15.58 14.39 Q 8.62 20.96 14.41 13.43"
      }
    ],
    [
      "path",
      {
        "d": "M 13.66 6.73 L 2.75 6.63 L 2.43 4.05"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 9.27 A 5.05 5.27 31 0 0 8.58 9.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 2.68 L 10.98 9.79"
      }
    ]
  ]
};

export const PirouInstall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.05 20.71 L 15.15 13.87 L 20.53 3.41 L 7.45 13.19 L 14.63 19.18 L 8.32 18.41" />
      <path d="M 14.44 21.37 A 6.10 6.35 64 0 1 21.31 5.35" />
      <path d="M 15.58 14.39 Q 8.62 20.96 14.41 13.43" />
      <path d="M 13.66 6.73 L 2.75 6.63 L 2.43 4.05" />
      <path d="M 15.98 9.27 A 5.05 5.27 31 0 0 8.58 9.60" />
      <path d="M 4.32 2.68 L 10.98 9.79" />
      {children}
    </svg>
  );
});

export default PirouInstall;
