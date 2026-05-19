import React from 'react';

export const iconData = {
  "id": "GlacioVirtual",
  "name": "GlacioVirtual",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.94 13.78 L 12.76 13.71 L 14.57 13.80 L 16.58 15.09 L 19.51 16.20 L 19.26 15.72 L 21.58 13.79 L 22.43 15.02 L 23.00 17.65 L 23.00 18.14 L 23.00 18.52 L 23.00 17.15 L 21.30 15.86 L 21.02 15.32 L 23.00 14.17 L 23.00 14.96 L 21.89 17.03 L 20.65 17.60 L 19.84 20.27 L 20.31 18.68 L 19.04 20.60 L 18.69 19.49 L 19.15 19.63 L 19.56 17.48"
      }
    ],
    [
      "path",
      {
        "d": "M 12.64 8.63 L 15.46 5.87 L 18.17 4.17 L 15.42 3.95 L 15.88 2.62 L 17.40 3.02 L 19.75 2.79 L 19.63 3.84 L 16.98 2.68 L 15.82 2.76 L 17.45 2.62 L 17.07 3.34 L 14.12 5.63 L 16.76 8.01 L 14.91 10.80 L 13.91 9.81 L 16.79 11.69 L 14.45 9.59 L 12.78 10.91 L 12.05 10.19 L 12.16 9.38 L 10.18 7.34"
      }
    ]
  ]
};

export const GlacioVirtual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.94 13.78 L 12.76 13.71 L 14.57 13.80 L 16.58 15.09 L 19.51 16.20 L 19.26 15.72 L 21.58 13.79 L 22.43 15.02 L 23.00 17.65 L 23.00 18.14 L 23.00 18.52 L 23.00 17.15 L 21.30 15.86 L 21.02 15.32 L 23.00 14.17 L 23.00 14.96 L 21.89 17.03 L 20.65 17.60 L 19.84 20.27 L 20.31 18.68 L 19.04 20.60 L 18.69 19.49 L 19.15 19.63 L 19.56 17.48" />
      <path d="M 12.64 8.63 L 15.46 5.87 L 18.17 4.17 L 15.42 3.95 L 15.88 2.62 L 17.40 3.02 L 19.75 2.79 L 19.63 3.84 L 16.98 2.68 L 15.82 2.76 L 17.45 2.62 L 17.07 3.34 L 14.12 5.63 L 16.76 8.01 L 14.91 10.80 L 13.91 9.81 L 16.79 11.69 L 14.45 9.59 L 12.78 10.91 L 12.05 10.19 L 12.16 9.38 L 10.18 7.34" />
      {children}
    </svg>
  );
});

export default GlacioVirtual;
