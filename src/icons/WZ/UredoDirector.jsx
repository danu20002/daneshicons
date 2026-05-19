import React from 'react';

export const iconData = {
  "id": "UredoDirector",
  "name": "UredoDirector",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.96 15.89 L 19.61 13.99 L 20.54 12.18 L 18.95 11.76 L 18.97 12.32 L 17.93 15.14 L 15.06 17.85 L 17.98 19.77 L 20.22 17.76 L 20.59 16.99 L 23.00 18.20 L 20.87 17.20 L 18.31 14.96 L 18.86 12.88 L 17.46 14.76 L 14.68 17.10 L 15.25 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 14.44 L 19.89 16.31 L 17.09 16.59 L 14.43 14.67 L 16.61 15.35 L 15.65 18.16 L 15.93 19.42 L 15.04 21.11 L 15.92 22.71 L 14.31 23.00 L 11.56 23.00 L 9.96 21.17 L 9.55 20.88 L 12.21 20.88 L 10.08 20.28 L 7.84 23.00 L 5.84 21.81 L 3.09 23.00 L 4.40 20.91 L 5.65 20.87 L 5.49 20.09 L 5.19 19.99 L 7.37 20.73 L 6.74 20.43 L 7.74 20.40 L 10.72 17.72 L 8.13 20.40 L 9.66 18.02 L 6.67 17.60 L 7.90 16.99 L 9.71 14.39 L 10.80 12.01 L 7.94 10.71 L 7.08 11.49 L 5.55 11.58"
      }
    ]
  ]
};

export const UredoDirector = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.96 15.89 L 19.61 13.99 L 20.54 12.18 L 18.95 11.76 L 18.97 12.32 L 17.93 15.14 L 15.06 17.85 L 17.98 19.77 L 20.22 17.76 L 20.59 16.99 L 23.00 18.20 L 20.87 17.20 L 18.31 14.96 L 18.86 12.88 L 17.46 14.76 L 14.68 17.10 L 15.25 19.94" />
      <path d="M 19.16 14.44 L 19.89 16.31 L 17.09 16.59 L 14.43 14.67 L 16.61 15.35 L 15.65 18.16 L 15.93 19.42 L 15.04 21.11 L 15.92 22.71 L 14.31 23.00 L 11.56 23.00 L 9.96 21.17 L 9.55 20.88 L 12.21 20.88 L 10.08 20.28 L 7.84 23.00 L 5.84 21.81 L 3.09 23.00 L 4.40 20.91 L 5.65 20.87 L 5.49 20.09 L 5.19 19.99 L 7.37 20.73 L 6.74 20.43 L 7.74 20.40 L 10.72 17.72 L 8.13 20.40 L 9.66 18.02 L 6.67 17.60 L 7.90 16.99 L 9.71 14.39 L 10.80 12.01 L 7.94 10.71 L 7.08 11.49 L 5.55 11.58" />
      {children}
    </svg>
  );
});

export default UredoDirector;
