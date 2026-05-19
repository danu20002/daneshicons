import React from 'react';

export const iconData = {
  "id": "CryptEqual",
  "name": "CryptEqual",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 11.73 L 4.53 14.66 L 6.24 15.06 L 3.74 14.85 L 5.12 16.27 L 7.79 18.71 L 8.90 19.14 L 6.61 21.58 L 5.95 22.52 L 6.95 22.99 L 4.02 20.75 L 5.64 21.64 L 3.30 19.65 L 3.07 18.85 L 1.00 18.89 L 1.00 20.05 L 1.00 21.88 L 1.00 23.00 L 2.45 23.00 L 2.93 23.00 L 4.87 23.00 L 5.78 22.81 L 6.76 21.70 L 5.74 21.58 L 5.29 19.45 L 7.04 21.48 L 9.15 19.30 L 7.49 16.90 L 6.72 18.63 L 9.11 20.10 L 8.85 20.10 L 8.04 17.29"
      }
    ],
    [
      "path",
      {
        "d": "M 11.81 18.94 L 14.49 20.35 L 11.59 21.27 L 10.61 21.95 L 9.20 21.46 L 11.26 19.46 L 12.25 21.97 L 13.68 21.00 L 15.75 18.27 L 18.29 19.75 L 16.92 18.44 L 19.50 19.22 L 17.26 16.32 L 14.31 17.99 L 15.74 16.58 L 15.15 17.57"
      }
    ]
  ]
};

export const CryptEqual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 11.73 L 4.53 14.66 L 6.24 15.06 L 3.74 14.85 L 5.12 16.27 L 7.79 18.71 L 8.90 19.14 L 6.61 21.58 L 5.95 22.52 L 6.95 22.99 L 4.02 20.75 L 5.64 21.64 L 3.30 19.65 L 3.07 18.85 L 1.00 18.89 L 1.00 20.05 L 1.00 21.88 L 1.00 23.00 L 2.45 23.00 L 2.93 23.00 L 4.87 23.00 L 5.78 22.81 L 6.76 21.70 L 5.74 21.58 L 5.29 19.45 L 7.04 21.48 L 9.15 19.30 L 7.49 16.90 L 6.72 18.63 L 9.11 20.10 L 8.85 20.10 L 8.04 17.29" />
      <path d="M 11.81 18.94 L 14.49 20.35 L 11.59 21.27 L 10.61 21.95 L 9.20 21.46 L 11.26 19.46 L 12.25 21.97 L 13.68 21.00 L 15.75 18.27 L 18.29 19.75 L 16.92 18.44 L 19.50 19.22 L 17.26 16.32 L 14.31 17.99 L 15.74 16.58 L 15.15 17.57" />
      {children}
    </svg>
  );
});

export default CryptEqual;
