import React from 'react';

export const iconData = {
  "id": "PhrenMovie",
  "name": "PhrenMovie",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.11 13.13 L 6.45 12.28 L 7.57 14.45 L 7.27 14.45 L 7.83 11.89 L 9.02 11.54 L 8.59 12.90 L 9.66 10.98 L 8.63 13.49 L 6.06 15.10 L 5.40 12.65 L 2.71 15.27 L 3.36 13.02 L 1.00 12.09 L 1.51 10.01 L 4.48 11.80 L 7.02 12.99 L 8.37 14.80 L 6.30 14.41 L 6.87 16.89 L 3.98 14.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.68 17.16 L 7.50 15.10 L 6.79 17.87 L 5.61 15.25 L 8.50 17.76 L 9.09 20.15 L 6.73 17.88 L 4.09 19.21 L 1.40 21.80 L 1.00 20.04 L 1.00 22.81 L 2.38 23.00 L 3.50 23.00 L 3.01 20.98 L 5.52 23.00 L 5.87 20.73 L 8.08 21.43 L 8.92 23.00"
      }
    ]
  ]
};

export const PhrenMovie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.11 13.13 L 6.45 12.28 L 7.57 14.45 L 7.27 14.45 L 7.83 11.89 L 9.02 11.54 L 8.59 12.90 L 9.66 10.98 L 8.63 13.49 L 6.06 15.10 L 5.40 12.65 L 2.71 15.27 L 3.36 13.02 L 1.00 12.09 L 1.51 10.01 L 4.48 11.80 L 7.02 12.99 L 8.37 14.80 L 6.30 14.41 L 6.87 16.89 L 3.98 14.79" />
      <path d="M 6.68 17.16 L 7.50 15.10 L 6.79 17.87 L 5.61 15.25 L 8.50 17.76 L 9.09 20.15 L 6.73 17.88 L 4.09 19.21 L 1.40 21.80 L 1.00 20.04 L 1.00 22.81 L 2.38 23.00 L 3.50 23.00 L 3.01 20.98 L 5.52 23.00 L 5.87 20.73 L 8.08 21.43 L 8.92 23.00" />
      {children}
    </svg>
  );
});

export default PhrenMovie;
