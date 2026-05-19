import React from 'react';

export const iconData = {
  "id": "VegetoBell",
  "name": "VegetoBell",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 10.02 L 18.56 10.66 L 17.57 11.96 L 20.23 14.70 L 21.78 17.62 L 23.00 16.96 L 21.37 17.58 L 23.00 18.82 L 23.00 19.38 L 22.41 21.35 L 23.00 19.03 L 20.39 21.81 L 22.18 22.75 L 21.86 23.00 L 21.21 22.70 L 21.19 23.00 L 23.00 22.65 L 23.00 19.66 L 21.08 21.69 L 23.00 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 3.69 L 20.34 1.83 L 17.96 1.00 L 19.29 2.66 L 20.05 1.00 L 17.67 1.00 L 15.14 1.00 L 13.95 1.00 L 16.49 3.36 L 15.80 2.34 L 13.00 1.85 L 13.18 3.49 L 15.46 5.29 L 14.41 5.32 L 13.98 4.80 L 13.73 3.83 L 15.42 6.48 L 16.97 7.07 L 14.25 5.14 L 13.47 5.13 L 10.80 7.76 L 8.83 7.08"
      }
    ]
  ]
};

export const VegetoBell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 10.02 L 18.56 10.66 L 17.57 11.96 L 20.23 14.70 L 21.78 17.62 L 23.00 16.96 L 21.37 17.58 L 23.00 18.82 L 23.00 19.38 L 22.41 21.35 L 23.00 19.03 L 20.39 21.81 L 22.18 22.75 L 21.86 23.00 L 21.21 22.70 L 21.19 23.00 L 23.00 22.65 L 23.00 19.66 L 21.08 21.69 L 23.00 19.44" />
      <path d="M 20.14 3.69 L 20.34 1.83 L 17.96 1.00 L 19.29 2.66 L 20.05 1.00 L 17.67 1.00 L 15.14 1.00 L 13.95 1.00 L 16.49 3.36 L 15.80 2.34 L 13.00 1.85 L 13.18 3.49 L 15.46 5.29 L 14.41 5.32 L 13.98 4.80 L 13.73 3.83 L 15.42 6.48 L 16.97 7.07 L 14.25 5.14 L 13.47 5.13 L 10.80 7.76 L 8.83 7.08" />
      {children}
    </svg>
  );
});

export default VegetoBell;
