import React from 'react';

export const iconData = {
  "id": "StereoDilute",
  "name": "StereoDilute",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.33 8.48 L 7.62 7.63 L 7.27 5.93 L 9.00 7.13 L 9.28 6.51 L 10.15 6.74 L 12.50 7.28 L 10.18 10.07 L 11.86 12.15 L 10.14 12.90 L 10.44 12.80 L 9.21 13.92 L 8.99 14.02 L 10.42 14.99 L 8.34 13.78 L 10.46 14.35 L 9.08 15.00 L 10.83 14.51 L 13.53 11.91 L 16.52 12.45 L 17.26 12.95 L 14.31 13.23 L 12.34 15.68 L 14.00 12.71 L 12.85 10.02 L 11.95 7.27 L 14.46 8.68 L 17.33 11.23 L 16.58 10.52 L 19.36 10.99 L 20.68 8.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.72 14.55 L 17.88 14.27 L 18.94 12.33 L 19.81 11.06 L 21.66 8.10 L 23.00 8.54 L 23.00 5.86 L 21.06 4.89 L 21.65 7.61 L 20.86 7.87 L 18.85 8.24 L 16.64 9.51 L 16.09 8.92 L 14.02 8.77 L 16.89 7.74 L 14.65 8.62"
      }
    ]
  ]
};

export const StereoDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.33 8.48 L 7.62 7.63 L 7.27 5.93 L 9.00 7.13 L 9.28 6.51 L 10.15 6.74 L 12.50 7.28 L 10.18 10.07 L 11.86 12.15 L 10.14 12.90 L 10.44 12.80 L 9.21 13.92 L 8.99 14.02 L 10.42 14.99 L 8.34 13.78 L 10.46 14.35 L 9.08 15.00 L 10.83 14.51 L 13.53 11.91 L 16.52 12.45 L 17.26 12.95 L 14.31 13.23 L 12.34 15.68 L 14.00 12.71 L 12.85 10.02 L 11.95 7.27 L 14.46 8.68 L 17.33 11.23 L 16.58 10.52 L 19.36 10.99 L 20.68 8.04" />
      <path d="M 18.72 14.55 L 17.88 14.27 L 18.94 12.33 L 19.81 11.06 L 21.66 8.10 L 23.00 8.54 L 23.00 5.86 L 21.06 4.89 L 21.65 7.61 L 20.86 7.87 L 18.85 8.24 L 16.64 9.51 L 16.09 8.92 L 14.02 8.77 L 16.89 7.74 L 14.65 8.62" />
      {children}
    </svg>
  );
});

export default StereoDilute;
