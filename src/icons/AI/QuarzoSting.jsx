import React from 'react';

export const iconData = {
  "id": "QuarzoSting",
  "name": "QuarzoSting",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 3.04 L 6.05 4.63 L 4.12 6.74 L 3.52 4.47 L 5.38 7.23 L 6.33 7.47 L 6.10 8.76 L 5.15 10.39 L 5.82 10.19 L 3.38 9.63 L 6.30 7.55 L 3.53 5.01 L 1.00 3.48 L 1.00 1.00 L 1.18 1.00 L 1.17 2.18 L 1.00 1.00 L 1.00 1.00 L 1.00 1.00 L 1.00 2.03 L 1.00 1.00 L 1.00 3.99 L 2.64 5.99 L 2.21 5.71 L 1.11 4.43 L 2.66 2.12 L 1.03 1.00 L 1.00 1.00 L 3.82 2.93 L 6.51 1.30 L 6.76 1.00 L 5.61 1.00 L 4.61 3.53 L 2.39 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 13.83 L 9.31 12.02 L 11.62 14.25 L 14.20 12.17 L 17.08 15.15 L 15.51 14.98 L 17.25 15.27 L 14.97 14.66 L 13.56 15.97 L 13.00 13.72 L 14.37 12.14 L 16.43 10.93 L 16.05 10.52 L 18.37 11.96 L 21.18 10.51 L 19.42 10.05 L 20.87 8.69 L 20.53 8.57 L 19.96 9.40 L 22.72 9.40 L 22.91 8.94 L 21.37 11.67"
      }
    ]
  ]
};

export const QuarzoSting = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 3.04 L 6.05 4.63 L 4.12 6.74 L 3.52 4.47 L 5.38 7.23 L 6.33 7.47 L 6.10 8.76 L 5.15 10.39 L 5.82 10.19 L 3.38 9.63 L 6.30 7.55 L 3.53 5.01 L 1.00 3.48 L 1.00 1.00 L 1.18 1.00 L 1.17 2.18 L 1.00 1.00 L 1.00 1.00 L 1.00 1.00 L 1.00 2.03 L 1.00 1.00 L 1.00 3.99 L 2.64 5.99 L 2.21 5.71 L 1.11 4.43 L 2.66 2.12 L 1.03 1.00 L 1.00 1.00 L 3.82 2.93 L 6.51 1.30 L 6.76 1.00 L 5.61 1.00 L 4.61 3.53 L 2.39 4.00" />
      <path d="M 9.31 13.83 L 9.31 12.02 L 11.62 14.25 L 14.20 12.17 L 17.08 15.15 L 15.51 14.98 L 17.25 15.27 L 14.97 14.66 L 13.56 15.97 L 13.00 13.72 L 14.37 12.14 L 16.43 10.93 L 16.05 10.52 L 18.37 11.96 L 21.18 10.51 L 19.42 10.05 L 20.87 8.69 L 20.53 8.57 L 19.96 9.40 L 22.72 9.40 L 22.91 8.94 L 21.37 11.67" />
      {children}
    </svg>
  );
});

export default QuarzoSting;
