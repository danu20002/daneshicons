import React from 'react';

export const iconData = {
  "id": "TaureFare",
  "name": "TaureFare",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.33 18.90 L 6.09 20.94 L 5.28 18.72 L 5.83 16.08 L 3.03 19.03 L 3.77 17.18 L 5.03 14.97 L 6.50 15.38 L 5.90 18.27 L 7.64 20.96 L 7.62 19.38 L 5.80 16.42 L 5.96 18.59 L 5.64 18.33 L 6.60 17.44 L 7.63 17.62 L 9.24 18.30 L 10.31 15.47 L 9.09 18.17 L 7.46 18.25 L 10.10 18.64 L 8.87 16.49 L 10.63 18.33 L 9.40 21.05 L 8.35 20.40 L 9.39 23.00 L 7.74 23.00 L 7.57 20.84 L 6.22 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 6.32 L 16.31 6.35 L 15.59 9.05 L 13.37 8.27 L 13.20 5.28 L 10.89 5.04 L 9.45 4.25 L 8.23 5.23 L 8.62 6.02 L 9.61 8.04 L 8.57 7.00 L 6.85 8.86 L 4.68 10.05 L 1.97 12.10 L 1.00 14.15 L 1.00 11.86 L 1.00 14.59 L 1.00 13.15 L 3.66 12.32"
      }
    ]
  ]
};

export const TaureFare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.33 18.90 L 6.09 20.94 L 5.28 18.72 L 5.83 16.08 L 3.03 19.03 L 3.77 17.18 L 5.03 14.97 L 6.50 15.38 L 5.90 18.27 L 7.64 20.96 L 7.62 19.38 L 5.80 16.42 L 5.96 18.59 L 5.64 18.33 L 6.60 17.44 L 7.63 17.62 L 9.24 18.30 L 10.31 15.47 L 9.09 18.17 L 7.46 18.25 L 10.10 18.64 L 8.87 16.49 L 10.63 18.33 L 9.40 21.05 L 8.35 20.40 L 9.39 23.00 L 7.74 23.00 L 7.57 20.84 L 6.22 17.84" />
      <path d="M 13.33 6.32 L 16.31 6.35 L 15.59 9.05 L 13.37 8.27 L 13.20 5.28 L 10.89 5.04 L 9.45 4.25 L 8.23 5.23 L 8.62 6.02 L 9.61 8.04 L 8.57 7.00 L 6.85 8.86 L 4.68 10.05 L 1.97 12.10 L 1.00 14.15 L 1.00 11.86 L 1.00 14.59 L 1.00 13.15 L 3.66 12.32" />
      {children}
    </svg>
  );
});

export default TaureFare;
