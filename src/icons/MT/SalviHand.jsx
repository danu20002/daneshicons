import React from 'react';

export const iconData = {
  "id": "SalviHand",
  "name": "SalviHand",
  "category": "MT",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.29 4.26 L 17.64 5.64 L 18.03 6.69 L 16.93 7.61 L 15.61 7.15 L 12.78 6.75 L 15.28 3.86 L 13.26 4.35 L 14.79 3.46 L 15.23 5.93 L 15.50 8.34 L 17.07 7.10 L 18.56 6.69 L 16.97 8.10 L 15.89 5.65 L 12.93 6.57 L 15.54 8.09 L 16.94 7.73 L 14.20 8.52 L 16.68 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 13.95 9.20 L 15.03 7.21 L 17.55 8.22 L 19.79 5.65 L 21.22 4.09 L 21.04 5.56 L 22.68 2.78 L 20.14 1.00 L 18.19 1.00 L 18.82 1.00 L 17.56 1.00 L 17.07 1.00 L 17.57 1.00 L 18.94 1.00 L 19.87 2.42 L 22.62 4.35 L 20.45 2.51 L 19.20 1.00 L 21.82 1.00 L 21.17 3.96 L 23.00 1.45"
      }
    ]
  ]
};

export const SalviHand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.29 4.26 L 17.64 5.64 L 18.03 6.69 L 16.93 7.61 L 15.61 7.15 L 12.78 6.75 L 15.28 3.86 L 13.26 4.35 L 14.79 3.46 L 15.23 5.93 L 15.50 8.34 L 17.07 7.10 L 18.56 6.69 L 16.97 8.10 L 15.89 5.65 L 12.93 6.57 L 15.54 8.09 L 16.94 7.73 L 14.20 8.52 L 16.68 11.39" />
      <path d="M 13.95 9.20 L 15.03 7.21 L 17.55 8.22 L 19.79 5.65 L 21.22 4.09 L 21.04 5.56 L 22.68 2.78 L 20.14 1.00 L 18.19 1.00 L 18.82 1.00 L 17.56 1.00 L 17.07 1.00 L 17.57 1.00 L 18.94 1.00 L 19.87 2.42 L 22.62 4.35 L 20.45 2.51 L 19.20 1.00 L 21.82 1.00 L 21.17 3.96 L 23.00 1.45" />
      {children}
    </svg>
  );
});

export default SalviHand;
