import React from 'react';

export const iconData = {
  "id": "ZulùGirder",
  "name": "ZulùGirder",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.26 21.94 L 16.89 13.96 L 5.84 15.08 L 12.30 18.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 10.08 C 18.69 21.94, 5.69 6.47, 4.26 12.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 6.80 C 6.59 3.68, 9.27 7.44, 11.93 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 17.10 C 21.92 19.83, 10.48 11.55, 20.00 5.32"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 7.33 A 5.73 3.29 61 0 0 3.78 6.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.74 6.39 L 14.87 8.89 L 9.71 4.58"
      }
    ]
  ]
};

export const ZulùGirder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.26 21.94 L 16.89 13.96 L 5.84 15.08 L 12.30 18.32" />
      <path d="M 4.20 10.08 C 18.69 21.94, 5.69 6.47, 4.26 12.78" />
      <path d="M 3.52 6.80 C 6.59 3.68, 9.27 7.44, 11.93 6.63" />
      <path d="M 5.86 17.10 C 21.92 19.83, 10.48 11.55, 20.00 5.32" />
      <path d="M 8.72 7.33 A 5.73 3.29 61 0 0 3.78 6.62" />
      <path d="M 19.74 6.39 L 14.87 8.89 L 9.71 4.58" />
      {children}
    </svg>
  );
});

export default ZulùGirder;
