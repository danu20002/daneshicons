import React from 'react';

export const iconData = {
  "id": "SemiPump",
  "name": "SemiPump",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.24 19.69 L 16.76 17.10 L 15.24 19.79 L 12.96 17.46 L 10.64 17.31 L 7.81 15.52 L 5.40 15.62 L 7.42 12.92 L 9.24 12.00 L 11.64 11.20 L 14.23 9.21 L 11.33 8.26 L 8.98 10.00 L 9.72 10.60 L 7.31 10.02 L 4.89 11.70 L 7.53 12.50 L 5.78 13.18 L 2.87 10.80 L 1.27 10.71 L 1.85 12.26 L 1.00 14.91 L 2.72 17.58 L 1.38 16.98 L 3.92 18.53 L 6.47 16.59"
      }
    ],
    [
      "path",
      {
        "d": "M 15.00 16.47 L 17.66 16.26 L 18.22 18.43 L 16.48 17.40 L 17.18 16.82 L 14.99 14.29 L 17.78 14.85 L 18.42 16.68 L 19.04 13.71 L 19.84 12.94 L 17.84 10.10 L 18.02 8.09 L 19.15 11.06 L 19.39 12.67 L 20.72 15.31 L 20.91 16.40 L 19.85 15.98 L 19.34 16.36 L 21.37 15.21 L 22.49 12.92 L 23.00 13.74 L 23.00 13.69 L 20.74 11.76"
      }
    ]
  ]
};

export const SemiPump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.24 19.69 L 16.76 17.10 L 15.24 19.79 L 12.96 17.46 L 10.64 17.31 L 7.81 15.52 L 5.40 15.62 L 7.42 12.92 L 9.24 12.00 L 11.64 11.20 L 14.23 9.21 L 11.33 8.26 L 8.98 10.00 L 9.72 10.60 L 7.31 10.02 L 4.89 11.70 L 7.53 12.50 L 5.78 13.18 L 2.87 10.80 L 1.27 10.71 L 1.85 12.26 L 1.00 14.91 L 2.72 17.58 L 1.38 16.98 L 3.92 18.53 L 6.47 16.59" />
      <path d="M 15.00 16.47 L 17.66 16.26 L 18.22 18.43 L 16.48 17.40 L 17.18 16.82 L 14.99 14.29 L 17.78 14.85 L 18.42 16.68 L 19.04 13.71 L 19.84 12.94 L 17.84 10.10 L 18.02 8.09 L 19.15 11.06 L 19.39 12.67 L 20.72 15.31 L 20.91 16.40 L 19.85 15.98 L 19.34 16.36 L 21.37 15.21 L 22.49 12.92 L 23.00 13.74 L 23.00 13.69 L 20.74 11.76" />
      {children}
    </svg>
  );
});

export default SemiPump;
