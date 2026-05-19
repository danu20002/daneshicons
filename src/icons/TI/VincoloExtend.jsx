import React from 'react';

export const iconData = {
  "id": "VincoloExtend",
  "name": "VincoloExtend",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 12.75 L 1.16 12.81 L 1.80 10.09 L 1.00 7.17 L 2.76 7.96 L 3.09 6.88 L 2.82 9.57 L 1.12 9.94 L 1.00 11.09 L 2.60 12.42 L 2.93 10.48 L 3.26 8.46 L 1.75 8.70 L 1.00 7.35 L 1.00 9.27 L 1.00 8.94 L 2.35 10.38 L 1.41 10.78 L 2.37 13.69 L 1.00 14.90 L 2.51 12.79 L 1.00 14.28 L 2.90 14.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 14.29 L 17.11 16.11 L 19.08 14.38 L 18.47 16.24 L 19.37 14.72 L 17.80 14.72 L 19.91 16.46 L 22.88 17.36 L 23.00 15.97 L 23.00 17.71 L 22.39 17.78 L 23.00 19.78 L 23.00 18.08 L 23.00 15.51 L 23.00 17.43 L 20.19 14.90 L 17.30 16.71 L 15.68 18.48 L 15.45 16.47 L 17.45 16.81 L 16.72 15.31 L 18.76 16.56"
      }
    ]
  ]
};

export const VincoloExtend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 12.75 L 1.16 12.81 L 1.80 10.09 L 1.00 7.17 L 2.76 7.96 L 3.09 6.88 L 2.82 9.57 L 1.12 9.94 L 1.00 11.09 L 2.60 12.42 L 2.93 10.48 L 3.26 8.46 L 1.75 8.70 L 1.00 7.35 L 1.00 9.27 L 1.00 8.94 L 2.35 10.38 L 1.41 10.78 L 2.37 13.69 L 1.00 14.90 L 2.51 12.79 L 1.00 14.28 L 2.90 14.26" />
      <path d="M 17.45 14.29 L 17.11 16.11 L 19.08 14.38 L 18.47 16.24 L 19.37 14.72 L 17.80 14.72 L 19.91 16.46 L 22.88 17.36 L 23.00 15.97 L 23.00 17.71 L 22.39 17.78 L 23.00 19.78 L 23.00 18.08 L 23.00 15.51 L 23.00 17.43 L 20.19 14.90 L 17.30 16.71 L 15.68 18.48 L 15.45 16.47 L 17.45 16.81 L 16.72 15.31 L 18.76 16.56" />
      {children}
    </svg>
  );
});

export default VincoloExtend;
