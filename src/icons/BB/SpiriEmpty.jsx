import React from 'react';

export const iconData = {
  "id": "SpiriEmpty",
  "name": "SpiriEmpty",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.73 5.30 L 14.66 5.19 L 12.01 3.55 L 9.43 3.93 L 8.11 2.31 L 8.17 3.14 L 6.87 6.05 L 7.24 6.89 L 4.27 8.16 L 4.54 8.64 L 7.13 11.56 L 6.70 11.81 L 5.94 9.47 L 8.68 7.93 L 8.02 8.69 L 7.42 7.31 L 5.77 6.68 L 8.42 4.12 L 8.57 1.50 L 9.68 1.00 L 9.45 1.47 L 8.58 2.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.41 14.33 L 4.28 16.46 L 4.10 18.85 L 2.79 18.60 L 1.63 18.65 L 1.00 16.06 L 1.00 14.25 L 1.00 13.57 L 2.61 14.08 L 3.40 12.87 L 1.52 15.52 L 1.00 18.43 L 1.00 16.66 L 1.21 19.63 L 1.00 20.67 L 1.00 17.96 L 1.80 17.81 L 1.00 19.43 L 1.00 18.65 L 1.00 18.29 L 1.00 17.96 L 3.40 20.78 L 6.07 21.52 L 8.99 21.83 L 11.24 21.79 L 11.41 20.13 L 9.14 19.06 L 10.20 16.25 L 7.80 14.62 L 6.30 15.05 L 6.81 17.53 L 8.91 20.04"
      }
    ]
  ]
};

export const SpiriEmpty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.73 5.30 L 14.66 5.19 L 12.01 3.55 L 9.43 3.93 L 8.11 2.31 L 8.17 3.14 L 6.87 6.05 L 7.24 6.89 L 4.27 8.16 L 4.54 8.64 L 7.13 11.56 L 6.70 11.81 L 5.94 9.47 L 8.68 7.93 L 8.02 8.69 L 7.42 7.31 L 5.77 6.68 L 8.42 4.12 L 8.57 1.50 L 9.68 1.00 L 9.45 1.47 L 8.58 2.79" />
      <path d="M 5.41 14.33 L 4.28 16.46 L 4.10 18.85 L 2.79 18.60 L 1.63 18.65 L 1.00 16.06 L 1.00 14.25 L 1.00 13.57 L 2.61 14.08 L 3.40 12.87 L 1.52 15.52 L 1.00 18.43 L 1.00 16.66 L 1.21 19.63 L 1.00 20.67 L 1.00 17.96 L 1.80 17.81 L 1.00 19.43 L 1.00 18.65 L 1.00 18.29 L 1.00 17.96 L 3.40 20.78 L 6.07 21.52 L 8.99 21.83 L 11.24 21.79 L 11.41 20.13 L 9.14 19.06 L 10.20 16.25 L 7.80 14.62 L 6.30 15.05 L 6.81 17.53 L 8.91 20.04" />
      {children}
    </svg>
  );
});

export default SpiriEmpty;
