import React from 'react';

export const iconData = {
  "id": "TephroLoad",
  "name": "TephroLoad",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.26 16.65 L 13.64 17.51 L 16.25 14.58 L 15.87 12.21 L 12.89 14.03 L 10.29 14.40 L 7.54 13.51 L 7.20 12.98 L 4.76 10.21 L 5.76 11.71 L 6.20 11.00 L 8.98 11.04 L 6.89 11.43 L 6.64 9.80 L 6.51 8.99 L 9.00 8.74 L 10.85 8.62 L 10.27 6.99 L 11.62 6.59"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 4.83 L 17.15 6.83 L 19.75 8.88 L 22.38 6.40 L 21.54 4.63 L 23.00 4.50 L 23.00 2.63 L 23.00 5.28 L 23.00 2.90 L 22.36 1.00 L 23.00 3.67 L 23.00 2.83 L 23.00 5.52 L 20.67 7.28 L 22.47 8.70 L 19.89 9.43 L 19.80 6.59 L 22.51 4.69 L 22.79 3.79 L 23.00 1.65 L 20.43 1.87 L 17.68 1.00"
      }
    ]
  ]
};

export const TephroLoad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.26 16.65 L 13.64 17.51 L 16.25 14.58 L 15.87 12.21 L 12.89 14.03 L 10.29 14.40 L 7.54 13.51 L 7.20 12.98 L 4.76 10.21 L 5.76 11.71 L 6.20 11.00 L 8.98 11.04 L 6.89 11.43 L 6.64 9.80 L 6.51 8.99 L 9.00 8.74 L 10.85 8.62 L 10.27 6.99 L 11.62 6.59" />
      <path d="M 16.57 4.83 L 17.15 6.83 L 19.75 8.88 L 22.38 6.40 L 21.54 4.63 L 23.00 4.50 L 23.00 2.63 L 23.00 5.28 L 23.00 2.90 L 22.36 1.00 L 23.00 3.67 L 23.00 2.83 L 23.00 5.52 L 20.67 7.28 L 22.47 8.70 L 19.89 9.43 L 19.80 6.59 L 22.51 4.69 L 22.79 3.79 L 23.00 1.65 L 20.43 1.87 L 17.68 1.00" />
      {children}
    </svg>
  );
});

export default TephroLoad;
