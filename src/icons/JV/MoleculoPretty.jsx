import React from 'react';

export const iconData = {
  "id": "MoleculoPretty",
  "name": "MoleculoPretty",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.53 15.92 L 6.72 15.24 L 4.99 13.35 L 6.43 11.49 L 7.88 11.15 L 6.72 13.01 L 5.20 12.96 L 6.97 11.41 L 9.04 11.89 L 6.49 9.64 L 8.90 7.19 L 8.94 6.41 L 9.43 3.90 L 10.24 2.48 L 8.43 5.39 L 5.69 5.60 L 7.11 7.25 L 9.03 4.86 L 7.30 5.83 L 6.33 4.98 L 5.54 7.09 L 4.38 7.55 L 5.84 5.79 L 4.48 8.12 L 7.15 9.88 L 8.65 8.10 L 8.38 7.37 L 6.74 8.27 L 4.25 11.24 L 5.84 9.54 L 4.06 10.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 9.47 L 13.10 12.20 L 10.40 10.02 L 11.04 8.69 L 12.12 6.26 L 9.95 7.65 L 11.20 5.39 L 13.98 8.19 L 14.52 8.79 L 16.64 8.82 L 18.82 8.19 L 19.07 10.02 L 20.02 7.42 L 21.88 9.41 L 19.20 7.66 L 18.32 6.50 L 17.14 4.67 L 18.84 2.54 L 20.08 1.24 L 18.42 1.00 L 19.76 2.68 L 18.60 4.68 L 18.49 1.75 L 19.43 2.10 L 17.97 1.00 L 15.14 1.00 L 14.49 3.21 L 13.43 5.53"
      }
    ]
  ]
};

export const MoleculoPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.53 15.92 L 6.72 15.24 L 4.99 13.35 L 6.43 11.49 L 7.88 11.15 L 6.72 13.01 L 5.20 12.96 L 6.97 11.41 L 9.04 11.89 L 6.49 9.64 L 8.90 7.19 L 8.94 6.41 L 9.43 3.90 L 10.24 2.48 L 8.43 5.39 L 5.69 5.60 L 7.11 7.25 L 9.03 4.86 L 7.30 5.83 L 6.33 4.98 L 5.54 7.09 L 4.38 7.55 L 5.84 5.79 L 4.48 8.12 L 7.15 9.88 L 8.65 8.10 L 8.38 7.37 L 6.74 8.27 L 4.25 11.24 L 5.84 9.54 L 4.06 10.39" />
      <path d="M 13.24 9.47 L 13.10 12.20 L 10.40 10.02 L 11.04 8.69 L 12.12 6.26 L 9.95 7.65 L 11.20 5.39 L 13.98 8.19 L 14.52 8.79 L 16.64 8.82 L 18.82 8.19 L 19.07 10.02 L 20.02 7.42 L 21.88 9.41 L 19.20 7.66 L 18.32 6.50 L 17.14 4.67 L 18.84 2.54 L 20.08 1.24 L 18.42 1.00 L 19.76 2.68 L 18.60 4.68 L 18.49 1.75 L 19.43 2.10 L 17.97 1.00 L 15.14 1.00 L 14.49 3.21 L 13.43 5.53" />
      {children}
    </svg>
  );
});

export default MoleculoPretty;
