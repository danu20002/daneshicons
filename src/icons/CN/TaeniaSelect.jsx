import React from 'react';

export const iconData = {
  "id": "TaeniaSelect",
  "name": "TaeniaSelect",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.08 11.67 L 11.25 9.89 L 12.65 12.78 L 13.93 9.87 L 12.39 12.00 L 10.98 13.74 L 10.25 12.08 L 10.80 10.29 L 8.67 11.71 L 11.54 12.78 L 12.83 11.23 L 14.71 11.76 L 17.47 12.81 L 19.67 11.61 L 17.08 12.84 L 19.45 13.68 L 22.26 12.24 L 23.00 10.13 L 20.35 10.68 L 17.76 13.30 L 16.15 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 13.24 L 6.42 14.45 L 3.55 12.19 L 6.32 11.50 L 8.51 9.20 L 8.19 11.58 L 10.02 10.18 L 9.94 10.20 L 7.70 8.78 L 9.30 9.47 L 7.86 9.83 L 6.40 8.45 L 9.23 10.17 L 10.72 11.49 L 10.68 8.51 L 10.52 11.49 L 8.66 10.01 L 10.06 12.06 L 8.04 12.77 L 6.27 11.96 L 3.99 13.97 L 6.44 15.32 L 5.33 16.40 L 5.82 13.97 L 8.59 14.02 L 7.00 13.36"
      }
    ]
  ]
};

export const TaeniaSelect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.08 11.67 L 11.25 9.89 L 12.65 12.78 L 13.93 9.87 L 12.39 12.00 L 10.98 13.74 L 10.25 12.08 L 10.80 10.29 L 8.67 11.71 L 11.54 12.78 L 12.83 11.23 L 14.71 11.76 L 17.47 12.81 L 19.67 11.61 L 17.08 12.84 L 19.45 13.68 L 22.26 12.24 L 23.00 10.13 L 20.35 10.68 L 17.76 13.30 L 16.15 10.64" />
      <path d="M 7.79 13.24 L 6.42 14.45 L 3.55 12.19 L 6.32 11.50 L 8.51 9.20 L 8.19 11.58 L 10.02 10.18 L 9.94 10.20 L 7.70 8.78 L 9.30 9.47 L 7.86 9.83 L 6.40 8.45 L 9.23 10.17 L 10.72 11.49 L 10.68 8.51 L 10.52 11.49 L 8.66 10.01 L 10.06 12.06 L 8.04 12.77 L 6.27 11.96 L 3.99 13.97 L 6.44 15.32 L 5.33 16.40 L 5.82 13.97 L 8.59 14.02 L 7.00 13.36" />
      {children}
    </svg>
  );
});

export default TaeniaSelect;
