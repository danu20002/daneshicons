import React from 'react';

export const iconData = {
  "id": "PhantoClone",
  "name": "PhantoClone",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 5.51 L 7.70 3.05 L 7.82 2.54 L 7.01 5.21 L 4.43 5.70 L 5.01 7.15 L 5.31 8.61 L 5.07 5.98 L 4.54 7.46 L 6.40 10.18 L 8.27 9.44 L 9.91 11.60 L 10.95 9.44 L 13.14 9.02 L 15.21 10.57 L 13.68 13.53 L 12.35 14.87 L 10.58 17.75 L 8.56 18.29 L 6.57 19.18 L 5.24 18.25 L 6.16 18.96 L 3.24 21.07 L 5.42 22.12 L 2.68 20.67 L 5.00 19.61 L 4.54 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 11.89 L 3.62 12.94 L 2.27 10.56 L 1.00 10.64 L 1.45 13.29 L 3.52 12.93 L 6.29 10.02 L 4.23 11.40 L 3.66 12.17 L 1.00 9.55 L 1.00 9.57 L 1.00 7.68 L 1.00 8.22 L 1.00 8.15 L 1.00 7.51 L 3.94 5.10 L 3.00 4.07 L 5.28 4.13 L 8.15 5.76 L 6.89 2.98 L 7.36 1.00 L 6.27 2.30 L 6.38 1.54"
      }
    ]
  ]
};

export const PhantoClone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 5.51 L 7.70 3.05 L 7.82 2.54 L 7.01 5.21 L 4.43 5.70 L 5.01 7.15 L 5.31 8.61 L 5.07 5.98 L 4.54 7.46 L 6.40 10.18 L 8.27 9.44 L 9.91 11.60 L 10.95 9.44 L 13.14 9.02 L 15.21 10.57 L 13.68 13.53 L 12.35 14.87 L 10.58 17.75 L 8.56 18.29 L 6.57 19.18 L 5.24 18.25 L 6.16 18.96 L 3.24 21.07 L 5.42 22.12 L 2.68 20.67 L 5.00 19.61 L 4.54 21.30" />
      <path d="M 6.25 11.89 L 3.62 12.94 L 2.27 10.56 L 1.00 10.64 L 1.45 13.29 L 3.52 12.93 L 6.29 10.02 L 4.23 11.40 L 3.66 12.17 L 1.00 9.55 L 1.00 9.57 L 1.00 7.68 L 1.00 8.22 L 1.00 8.15 L 1.00 7.51 L 3.94 5.10 L 3.00 4.07 L 5.28 4.13 L 8.15 5.76 L 6.89 2.98 L 7.36 1.00 L 6.27 2.30 L 6.38 1.54" />
      {children}
    </svg>
  );
});

export default PhantoClone;
