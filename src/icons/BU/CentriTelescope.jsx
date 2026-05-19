import React from 'react';

export const iconData = {
  "id": "CentriTelescope",
  "name": "CentriTelescope",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.58 9.57 L 5.77 6.59 L 7.57 7.15 L 8.93 6.48 L 10.52 6.73 L 10.16 8.38 L 7.30 5.55 L 9.78 3.92 L 10.77 3.91 L 11.93 2.20 L 13.56 1.00 L 14.62 1.00 L 15.49 3.46 L 18.40 3.39 L 16.28 4.22 L 15.52 4.93"
      }
    ],
    [
      "path",
      {
        "d": "M 13.47 16.05 L 12.71 17.39 L 12.76 14.80 L 11.20 16.11 L 12.58 14.71 L 10.22 11.78 L 7.25 9.40 L 5.12 11.56 L 4.30 12.51 L 3.66 12.20 L 2.74 9.58 L 2.32 7.71 L 4.57 9.68 L 3.60 10.55 L 2.56 8.94 L 2.47 8.42 L 1.00 9.31 L 1.20 6.41 L 1.52 7.50 L 4.01 7.20 L 6.50 4.72 L 6.20 6.84 L 5.19 6.18 L 7.30 5.16 L 9.80 7.01 L 11.77 8.64"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 13.42 L 5.39 13.18 L 2.67 14.71 L 1.47 15.53 L 3.68 15.85 L 4.81 14.09 L 5.50 16.31 L 8.03 16.25 L 8.76 19.25 L 9.94 16.64 L 10.16 15.19 L 9.63 17.49 L 9.72 19.24 L 10.82 20.96 L 11.88 18.63 L 11.44 20.80"
      }
    ]
  ]
};

export const CentriTelescope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.58 9.57 L 5.77 6.59 L 7.57 7.15 L 8.93 6.48 L 10.52 6.73 L 10.16 8.38 L 7.30 5.55 L 9.78 3.92 L 10.77 3.91 L 11.93 2.20 L 13.56 1.00 L 14.62 1.00 L 15.49 3.46 L 18.40 3.39 L 16.28 4.22 L 15.52 4.93" />
      <path d="M 13.47 16.05 L 12.71 17.39 L 12.76 14.80 L 11.20 16.11 L 12.58 14.71 L 10.22 11.78 L 7.25 9.40 L 5.12 11.56 L 4.30 12.51 L 3.66 12.20 L 2.74 9.58 L 2.32 7.71 L 4.57 9.68 L 3.60 10.55 L 2.56 8.94 L 2.47 8.42 L 1.00 9.31 L 1.20 6.41 L 1.52 7.50 L 4.01 7.20 L 6.50 4.72 L 6.20 6.84 L 5.19 6.18 L 7.30 5.16 L 9.80 7.01 L 11.77 8.64" />
      <path d="M 3.96 13.42 L 5.39 13.18 L 2.67 14.71 L 1.47 15.53 L 3.68 15.85 L 4.81 14.09 L 5.50 16.31 L 8.03 16.25 L 8.76 19.25 L 9.94 16.64 L 10.16 15.19 L 9.63 17.49 L 9.72 19.24 L 10.82 20.96 L 11.88 18.63 L 11.44 20.80" />
      {children}
    </svg>
  );
});

export default CentriTelescope;
