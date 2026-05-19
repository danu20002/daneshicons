import React from 'react';

export const iconData = {
  "id": "PlenoMeasure",
  "name": "PlenoMeasure",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.24 20.47 L 13.00 19.18 L 11.57 18.46 L 13.23 17.59 L 11.71 16.78 L 12.83 16.95 L 12.12 15.68 L 10.00 18.13 L 10.73 19.13 L 11.97 19.59 L 11.23 22.21 L 9.21 22.24 L 8.53 23.00 L 11.42 20.27 L 11.42 20.19 L 12.04 21.37 L 12.20 21.32"
      }
    ],
    [
      "path",
      {
        "d": "M 12.29 9.40 L 9.31 7.90 L 10.30 8.23 L 12.63 9.73 L 12.66 10.91 L 11.29 10.06 L 9.28 11.16 L 8.43 13.36 L 6.73 15.23 L 3.74 16.89 L 6.06 19.30 L 3.39 19.04 L 3.12 21.10 L 1.37 23.00 L 1.38 23.00 L 2.41 23.00 L 2.52 21.65 L 5.15 23.00 L 7.38 23.00 L 10.14 23.00 L 8.29 22.75 L 11.17 23.00 L 11.49 21.65"
      }
    ]
  ]
};

export const PlenoMeasure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.24 20.47 L 13.00 19.18 L 11.57 18.46 L 13.23 17.59 L 11.71 16.78 L 12.83 16.95 L 12.12 15.68 L 10.00 18.13 L 10.73 19.13 L 11.97 19.59 L 11.23 22.21 L 9.21 22.24 L 8.53 23.00 L 11.42 20.27 L 11.42 20.19 L 12.04 21.37 L 12.20 21.32" />
      <path d="M 12.29 9.40 L 9.31 7.90 L 10.30 8.23 L 12.63 9.73 L 12.66 10.91 L 11.29 10.06 L 9.28 11.16 L 8.43 13.36 L 6.73 15.23 L 3.74 16.89 L 6.06 19.30 L 3.39 19.04 L 3.12 21.10 L 1.37 23.00 L 1.38 23.00 L 2.41 23.00 L 2.52 21.65 L 5.15 23.00 L 7.38 23.00 L 10.14 23.00 L 8.29 22.75 L 11.17 23.00 L 11.49 21.65" />
      {children}
    </svg>
  );
});

export default PlenoMeasure;
