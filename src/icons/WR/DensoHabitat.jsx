import React from 'react';

export const iconData = {
  "id": "DensoHabitat",
  "name": "DensoHabitat",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.91 6.05 C 5.84 5.00, 7.74 8.91, 14.49 18.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 9.89 C 10.46 15.25, 8.47 19.52, 17.11 17.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.59 4.26 C 13.13 12.59, 10.59 8.20, 19.53 16.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 7.91 C 16.56 14.52, 16.36 5.82, 19.20 20.88"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 8.81 C 9.86 19.60, 4.01 16.80, 14.83 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.40 6.15 C 7.85 6.63, 17.62 4.89, 18.79 19.90"
      }
    ]
  ]
};

export const DensoHabitat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.91 6.05 C 5.84 5.00, 7.74 8.91, 14.49 18.25" />
      <path d="M 4.23 9.89 C 10.46 15.25, 8.47 19.52, 17.11 17.10" />
      <path d="M 8.59 4.26 C 13.13 12.59, 10.59 8.20, 19.53 16.57" />
      <path d="M 4.27 7.91 C 16.56 14.52, 16.36 5.82, 19.20 20.88" />
      <path d="M 9.91 8.81 C 9.86 19.60, 4.01 16.80, 14.83 20.84" />
      <path d="M 8.40 6.15 C 7.85 6.63, 17.62 4.89, 18.79 19.90" />
      {children}
    </svg>
  );
});

export default DensoHabitat;
