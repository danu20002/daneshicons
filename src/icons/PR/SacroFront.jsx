import React from 'react';

export const iconData = {
  "id": "SacroFront",
  "name": "SacroFront",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.05 6.03 L 12.08 6.51 L 10.90 5.12 L 10.76 7.55 L 10.95 6.32 L 9.52 5.27 L 7.02 5.60 L 5.72 3.64 L 2.97 2.03 L 5.38 1.81 L 4.25 3.22 L 4.91 3.39 L 6.91 1.55 L 4.27 4.50 L 2.98 2.21 L 5.35 3.30 L 5.47 1.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 9.00 L 2.77 8.79 L 3.86 9.49 L 1.42 12.02 L 2.20 13.55 L 3.26 10.72 L 3.60 7.90 L 1.01 5.87 L 1.57 6.95 L 3.81 4.80 L 3.36 7.27 L 3.30 8.60 L 2.60 8.31 L 2.96 7.00 L 5.25 4.44 L 3.73 4.63 L 3.82 3.94 L 4.64 1.53 L 3.04 3.84 L 3.31 1.73 L 2.76 1.00"
      }
    ],
    [
      "path",
      {
        "d": "M 11.18 5.13 L 9.33 6.48 L 10.89 8.67 L 10.17 9.67 L 12.18 7.36 L 14.03 9.11 L 14.09 11.18 L 16.38 11.46 L 14.18 9.12 L 15.11 10.85 L 12.85 8.70 L 15.22 9.33 L 16.17 12.22 L 17.33 13.20 L 17.11 11.51 L 17.89 11.78 L 16.51 9.98 L 17.83 11.72"
      }
    ]
  ]
};

export const SacroFront = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.05 6.03 L 12.08 6.51 L 10.90 5.12 L 10.76 7.55 L 10.95 6.32 L 9.52 5.27 L 7.02 5.60 L 5.72 3.64 L 2.97 2.03 L 5.38 1.81 L 4.25 3.22 L 4.91 3.39 L 6.91 1.55 L 4.27 4.50 L 2.98 2.21 L 5.35 3.30 L 5.47 1.00" />
      <path d="M 4.42 9.00 L 2.77 8.79 L 3.86 9.49 L 1.42 12.02 L 2.20 13.55 L 3.26 10.72 L 3.60 7.90 L 1.01 5.87 L 1.57 6.95 L 3.81 4.80 L 3.36 7.27 L 3.30 8.60 L 2.60 8.31 L 2.96 7.00 L 5.25 4.44 L 3.73 4.63 L 3.82 3.94 L 4.64 1.53 L 3.04 3.84 L 3.31 1.73 L 2.76 1.00" />
      <path d="M 11.18 5.13 L 9.33 6.48 L 10.89 8.67 L 10.17 9.67 L 12.18 7.36 L 14.03 9.11 L 14.09 11.18 L 16.38 11.46 L 14.18 9.12 L 15.11 10.85 L 12.85 8.70 L 15.22 9.33 L 16.17 12.22 L 17.33 13.20 L 17.11 11.51 L 17.89 11.78 L 16.51 9.98 L 17.83 11.72" />
      {children}
    </svg>
  );
});

export default SacroFront;
