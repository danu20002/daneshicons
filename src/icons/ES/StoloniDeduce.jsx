import React from 'react';

export const iconData = {
  "id": "StoloniDeduce",
  "name": "StoloniDeduce",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.44 10.75 L 21.18 8.89 L 23.00 8.51 L 22.10 7.94 L 22.07 10.46 L 19.77 13.15 L 21.67 15.91 L 23.00 18.21 L 23.00 18.24 L 22.54 20.80 L 20.96 22.05 L 23.00 23.00 L 22.70 21.24 L 23.00 19.35 L 23.00 21.52 L 20.61 23.00 L 19.70 23.00 L 17.38 23.00 L 17.97 20.68 L 17.58 23.00 L 20.01 23.00 L 20.77 23.00 L 18.42 23.00 L 16.75 23.00 L 14.12 23.00 L 14.27 22.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.06 11.62 L 14.08 13.10 L 14.94 13.97 L 17.17 14.48 L 18.00 16.05 L 15.79 14.43 L 13.99 13.58 L 14.25 12.01 L 16.50 11.16 L 15.11 8.55 L 12.11 11.44 L 10.60 10.07 L 10.93 8.39 L 13.20 10.86 L 16.01 8.05 L 14.00 6.77 L 15.69 7.15 L 14.60 5.67 L 17.45 3.57 L 19.49 2.84 L 16.72 1.00 L 15.92 1.00 L 17.61 1.30"
      }
    ]
  ]
};

export const StoloniDeduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.44 10.75 L 21.18 8.89 L 23.00 8.51 L 22.10 7.94 L 22.07 10.46 L 19.77 13.15 L 21.67 15.91 L 23.00 18.21 L 23.00 18.24 L 22.54 20.80 L 20.96 22.05 L 23.00 23.00 L 22.70 21.24 L 23.00 19.35 L 23.00 21.52 L 20.61 23.00 L 19.70 23.00 L 17.38 23.00 L 17.97 20.68 L 17.58 23.00 L 20.01 23.00 L 20.77 23.00 L 18.42 23.00 L 16.75 23.00 L 14.12 23.00 L 14.27 22.73" />
      <path d="M 17.06 11.62 L 14.08 13.10 L 14.94 13.97 L 17.17 14.48 L 18.00 16.05 L 15.79 14.43 L 13.99 13.58 L 14.25 12.01 L 16.50 11.16 L 15.11 8.55 L 12.11 11.44 L 10.60 10.07 L 10.93 8.39 L 13.20 10.86 L 16.01 8.05 L 14.00 6.77 L 15.69 7.15 L 14.60 5.67 L 17.45 3.57 L 19.49 2.84 L 16.72 1.00 L 15.92 1.00 L 17.61 1.30" />
      {children}
    </svg>
  );
});

export default StoloniDeduce;
