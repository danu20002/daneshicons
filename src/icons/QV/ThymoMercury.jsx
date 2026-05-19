import React from 'react';

export const iconData = {
  "id": "ThymoMercury",
  "name": "ThymoMercury",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.73 3.05 C 12.62 9.60, 12.74 16.55, 17.18 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 8.39 C 4.34 10.55, 8.34 13.54, 20.59 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 2.16 C 19.93 5.50, 7.34 6.79, 21.84 17.83"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 8.05 C 17.51 14.57, 12.08 19.43, 20.97 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.05 3.73 C 8.65 7.57, 17.46 8.17, 14.82 18.26"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 9.20 C 15.15 17.84, 17.95 14.60, 17.63 20.47"
      }
    ]
  ]
};

export const ThymoMercury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.73 3.05 C 12.62 9.60, 12.74 16.55, 17.18 17.93" />
      <path d="M 6.23 8.39 C 4.34 10.55, 8.34 13.54, 20.59 15.83" />
      <path d="M 3.27 2.16 C 19.93 5.50, 7.34 6.79, 21.84 17.83" />
      <path d="M 6.27 8.05 C 17.51 14.57, 12.08 19.43, 20.97 18.44" />
      <path d="M 7.05 3.73 C 8.65 7.57, 17.46 8.17, 14.82 18.26" />
      <path d="M 8.06 9.20 C 15.15 17.84, 17.95 14.60, 17.63 20.47" />
      {children}
    </svg>
  );
});

export default ThymoMercury;
