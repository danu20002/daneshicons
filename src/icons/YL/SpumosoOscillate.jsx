import React from 'react';

export const iconData = {
  "id": "SpumosoOscillate",
  "name": "SpumosoOscillate",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.39 5.18 L 6.86 4.73 L 6.32 4.20 L 4.83 2.76 L 5.29 2.71 L 5.12 2.73 L 4.53 1.00 L 2.29 1.00 L 1.00 1.00 L 1.64 1.98 L 1.00 2.54 L 1.00 3.75 L 1.00 5.41 L 1.00 6.34 L 1.00 8.89 L 1.00 8.71 L 2.20 7.45 L 1.36 6.90 L 1.01 6.72 L 1.00 5.28 L 1.00 3.74 L 1.00 1.02 L 1.00 1.00 L 1.00 1.50 L 2.14 2.63 L 3.06 3.05 L 2.61 5.95"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 3.19 L 9.91 3.65 L 8.78 3.75 L 5.93 2.57 L 8.17 1.00 L 9.52 2.09 L 12.28 1.00 L 14.43 1.00 L 12.97 1.41 L 11.65 1.00 L 11.01 2.61 L 10.82 1.00 L 12.07 1.00 L 10.46 3.56 L 11.67 1.73 L 12.59 1.00 L 10.61 1.09 L 11.42 1.00 L 11.78 1.00 L 14.06 1.66 L 11.07 2.78 L 11.29 2.40 L 13.68 5.30"
      }
    ]
  ]
};

export const SpumosoOscillate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.39 5.18 L 6.86 4.73 L 6.32 4.20 L 4.83 2.76 L 5.29 2.71 L 5.12 2.73 L 4.53 1.00 L 2.29 1.00 L 1.00 1.00 L 1.64 1.98 L 1.00 2.54 L 1.00 3.75 L 1.00 5.41 L 1.00 6.34 L 1.00 8.89 L 1.00 8.71 L 2.20 7.45 L 1.36 6.90 L 1.01 6.72 L 1.00 5.28 L 1.00 3.74 L 1.00 1.02 L 1.00 1.00 L 1.00 1.50 L 2.14 2.63 L 3.06 3.05 L 2.61 5.95" />
      <path d="M 7.96 3.19 L 9.91 3.65 L 8.78 3.75 L 5.93 2.57 L 8.17 1.00 L 9.52 2.09 L 12.28 1.00 L 14.43 1.00 L 12.97 1.41 L 11.65 1.00 L 11.01 2.61 L 10.82 1.00 L 12.07 1.00 L 10.46 3.56 L 11.67 1.73 L 12.59 1.00 L 10.61 1.09 L 11.42 1.00 L 11.78 1.00 L 14.06 1.66 L 11.07 2.78 L 11.29 2.40 L 13.68 5.30" />
      {children}
    </svg>
  );
});

export default SpumosoOscillate;
