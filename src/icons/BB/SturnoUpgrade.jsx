import React from 'react';

export const iconData = {
  "id": "SturnoUpgrade",
  "name": "SturnoUpgrade",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.26 19.05 L 5.67 21.66 L 6.26 20.25 L 7.75 22.91 L 8.77 23.00 L 7.81 23.00 L 5.40 23.00 L 3.94 23.00 L 5.82 23.00 L 4.09 21.31 L 5.13 21.89 L 6.33 20.22 L 9.21 18.30 L 10.54 20.46 L 11.79 20.74 L 12.55 22.61 L 10.62 23.00 L 10.94 20.45 L 9.96 21.33 L 8.33 23.00 L 5.51 22.08 L 6.24 23.00 L 8.57 20.37 L 9.70 19.23 L 10.98 18.48 L 9.19 21.10 L 8.95 19.86 L 10.82 22.60 L 12.15 22.10 L 11.43 21.72 L 12.06 23.00 L 11.00 23.00 L 10.08 20.02 L 11.38 20.45 L 13.50 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 16.95 12.91 L 17.72 12.54 L 16.08 11.94 L 18.04 13.88 L 15.17 14.79 L 14.03 13.06 L 15.26 13.58 L 17.27 12.49 L 15.48 11.54 L 13.44 12.33 L 12.04 12.22 L 12.42 14.14 L 10.39 14.25 L 13.05 17.06 L 11.45 16.39 L 8.97 16.34"
      }
    ]
  ]
};

export const SturnoUpgrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.26 19.05 L 5.67 21.66 L 6.26 20.25 L 7.75 22.91 L 8.77 23.00 L 7.81 23.00 L 5.40 23.00 L 3.94 23.00 L 5.82 23.00 L 4.09 21.31 L 5.13 21.89 L 6.33 20.22 L 9.21 18.30 L 10.54 20.46 L 11.79 20.74 L 12.55 22.61 L 10.62 23.00 L 10.94 20.45 L 9.96 21.33 L 8.33 23.00 L 5.51 22.08 L 6.24 23.00 L 8.57 20.37 L 9.70 19.23 L 10.98 18.48 L 9.19 21.10 L 8.95 19.86 L 10.82 22.60 L 12.15 22.10 L 11.43 21.72 L 12.06 23.00 L 11.00 23.00 L 10.08 20.02 L 11.38 20.45 L 13.50 20.83" />
      <path d="M 16.95 12.91 L 17.72 12.54 L 16.08 11.94 L 18.04 13.88 L 15.17 14.79 L 14.03 13.06 L 15.26 13.58 L 17.27 12.49 L 15.48 11.54 L 13.44 12.33 L 12.04 12.22 L 12.42 14.14 L 10.39 14.25 L 13.05 17.06 L 11.45 16.39 L 8.97 16.34" />
      {children}
    </svg>
  );
});

export default SturnoUpgrade;
