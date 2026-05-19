import React from 'react';

export const iconData = {
  "id": "ZirloRust",
  "name": "ZirloRust",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.35 17.95 L 13.03 3.90 L 8.83 21.52 L 13.58 4.54 L 18.26 19.04"
      }
    ],
    [
      "path",
      {
        "d": "M 9.66 4.20 L 8.44 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.74 9.21 A 3.66 6.49 167 0 0 5.36 8.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 11.17 Q 16.78 17.21 11.97 19.26"
      }
    ],
    [
      "path",
      {
        "d": "M 10.90 15.61 A 4.96 2.74 180 0 1 21.16 3.64"
      }
    ]
  ]
};

export const ZirloRust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.35 17.95 L 13.03 3.90 L 8.83 21.52 L 13.58 4.54 L 18.26 19.04" />
      <path d="M 9.66 4.20 L 8.44 15.13" />
      <path d="M 19.74 9.21 A 3.66 6.49 167 0 0 5.36 8.72" />
      <path d="M 6.89 11.17 Q 16.78 17.21 11.97 19.26" />
      <path d="M 10.90 15.61 A 4.96 2.74 180 0 1 21.16 3.64" />
      {children}
    </svg>
  );
});

export default ZirloRust;
