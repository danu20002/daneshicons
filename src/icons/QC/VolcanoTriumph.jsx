import React from 'react';

export const iconData = {
  "id": "VolcanoTriumph",
  "name": "VolcanoTriumph",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.69 9.18 C 18.35 14.65, 8.57 6.94, 21.49 18.13"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 2.84 C 4.60 6.24, 15.48 4.47, 20.03 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 7.56 C 18.74 6.69, 9.39 15.90, 21.11 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 2.52 C 19.44 15.69, 15.40 5.87, 16.70 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 9.40 6.29 C 5.30 17.24, 14.95 11.62, 20.83 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.26 3.15 C 7.20 9.88, 19.83 16.39, 20.44 18.78"
      }
    ]
  ]
};

export const VolcanoTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.69 9.18 C 18.35 14.65, 8.57 6.94, 21.49 18.13" />
      <path d="M 3.17 2.84 C 4.60 6.24, 15.48 4.47, 20.03 18.55" />
      <path d="M 3.31 7.56 C 18.74 6.69, 9.39 15.90, 21.11 18.83" />
      <path d="M 3.23 2.52 C 19.44 15.69, 15.40 5.87, 16.70 17.31" />
      <path d="M 9.40 6.29 C 5.30 17.24, 14.95 11.62, 20.83 21.49" />
      <path d="M 8.26 3.15 C 7.20 9.88, 19.83 16.39, 20.44 18.78" />
      {children}
    </svg>
  );
});

export default VolcanoTriumph;
