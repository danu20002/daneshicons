import React from 'react';

export const iconData = {
  "id": "VogliaSuperb",
  "name": "VogliaSuperb",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.91 11.53 C 18.08 4.45, 4.74 9.19, 12.29 2.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.38 8.85 L 4.30 7.58 L 8.87 2.90 L 2.35 20.46 L 10.74 16.06 L 7.26 8.96 L 8.04 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 2.29 L 3.81 15.43 L 3.30 12.02 L 11.41 15.51 L 19.06 3.42 L 8.22 13.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 11.42 A 4.29 6.72 133 0 0 16.32 8.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.83 20.98 C 21.81 5.40, 7.20 19.80, 18.70 18.14"
      }
    ],
    [
      "path",
      {
        "d": "M 18.13 11.04 A 3.89 3.47 129 0 0 6.77 10.75"
      }
    ]
  ]
};

export const VogliaSuperb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.91 11.53 C 18.08 4.45, 4.74 9.19, 12.29 2.41" />
      <path d="M 12.38 8.85 L 4.30 7.58 L 8.87 2.90 L 2.35 20.46 L 10.74 16.06 L 7.26 8.96 L 8.04 6.81" />
      <path d="M 3.68 2.29 L 3.81 15.43 L 3.30 12.02 L 11.41 15.51 L 19.06 3.42 L 8.22 13.07" />
      <path d="M 6.44 11.42 A 4.29 6.72 133 0 0 16.32 8.86" />
      <path d="M 12.83 20.98 C 21.81 5.40, 7.20 19.80, 18.70 18.14" />
      <path d="M 18.13 11.04 A 3.89 3.47 129 0 0 6.77 10.75" />
      {children}
    </svg>
  );
});

export default VogliaSuperb;
