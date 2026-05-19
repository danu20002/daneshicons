import React from 'react';

export const iconData = {
  "id": "TenuCrash",
  "name": "TenuCrash",
  "category": "JC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.22 4.42 L 13.64 2.77 L 12.92 1.00 L 10.77 1.00 L 13.12 1.53 L 15.15 1.00 L 12.43 1.00 L 10.15 1.00 L 12.74 2.67 L 15.36 1.00 L 16.74 3.45 L 16.93 1.00 L 15.38 1.00 L 15.60 1.69 L 13.22 1.71 L 15.65 4.00 L 15.40 3.88 L 14.69 5.80 L 12.06 6.31 L 13.72 6.61 L 14.50 7.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.14 17.71 L 14.44 16.67 L 13.03 19.42 L 12.68 19.14 L 13.49 18.29 L 15.35 20.96 L 14.21 22.28 L 14.63 20.23 L 13.72 20.03 L 15.55 17.83 L 17.26 17.01 L 18.34 18.06 L 16.28 17.24 L 17.31 19.37 L 14.32 22.19 L 17.04 22.00 L 19.02 21.82 L 21.19 22.31"
      }
    ]
  ]
};

export const TenuCrash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.22 4.42 L 13.64 2.77 L 12.92 1.00 L 10.77 1.00 L 13.12 1.53 L 15.15 1.00 L 12.43 1.00 L 10.15 1.00 L 12.74 2.67 L 15.36 1.00 L 16.74 3.45 L 16.93 1.00 L 15.38 1.00 L 15.60 1.69 L 13.22 1.71 L 15.65 4.00 L 15.40 3.88 L 14.69 5.80 L 12.06 6.31 L 13.72 6.61 L 14.50 7.09" />
      <path d="M 12.14 17.71 L 14.44 16.67 L 13.03 19.42 L 12.68 19.14 L 13.49 18.29 L 15.35 20.96 L 14.21 22.28 L 14.63 20.23 L 13.72 20.03 L 15.55 17.83 L 17.26 17.01 L 18.34 18.06 L 16.28 17.24 L 17.31 19.37 L 14.32 22.19 L 17.04 22.00 L 19.02 21.82 L 21.19 22.31" />
      {children}
    </svg>
  );
});

export default TenuCrash;
