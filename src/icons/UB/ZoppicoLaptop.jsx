import React from 'react';

export const iconData = {
  "id": "ZoppicoLaptop",
  "name": "ZoppicoLaptop",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.88 20.30 L 12.92 20.46 L 12.94 22.36 L 10.23 20.12 L 7.51 20.69 L 9.45 21.30 L 12.18 18.48 L 9.80 20.38 L 7.21 21.94 L 5.93 23.00 L 5.06 20.47 L 2.26 23.00 L 3.18 23.00 L 5.05 23.00 L 7.38 21.11 L 8.29 22.30 L 6.88 23.00 L 7.61 21.92 L 8.59 23.00 L 7.56 20.35 L 5.80 22.67 L 8.32 22.74 L 11.18 23.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.70 12.59 L 11.84 11.85 L 11.68 14.31 L 10.22 14.81 L 10.19 13.40 L 11.97 12.38 L 9.89 12.28 L 10.25 15.03 L 11.00 15.39 L 9.15 12.79 L 6.57 13.14 L 8.10 14.26 L 8.46 13.66 L 8.28 10.79 L 9.23 7.99 L 7.49 6.39"
      }
    ]
  ]
};

export const ZoppicoLaptop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.88 20.30 L 12.92 20.46 L 12.94 22.36 L 10.23 20.12 L 7.51 20.69 L 9.45 21.30 L 12.18 18.48 L 9.80 20.38 L 7.21 21.94 L 5.93 23.00 L 5.06 20.47 L 2.26 23.00 L 3.18 23.00 L 5.05 23.00 L 7.38 21.11 L 8.29 22.30 L 6.88 23.00 L 7.61 21.92 L 8.59 23.00 L 7.56 20.35 L 5.80 22.67 L 8.32 22.74 L 11.18 23.00" />
      <path d="M 13.70 12.59 L 11.84 11.85 L 11.68 14.31 L 10.22 14.81 L 10.19 13.40 L 11.97 12.38 L 9.89 12.28 L 10.25 15.03 L 11.00 15.39 L 9.15 12.79 L 6.57 13.14 L 8.10 14.26 L 8.46 13.66 L 8.28 10.79 L 9.23 7.99 L 7.49 6.39" />
      {children}
    </svg>
  );
});

export default ZoppicoLaptop;
