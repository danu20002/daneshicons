import React from 'react';

export const iconData = {
  "id": "PurpuraExpert",
  "name": "PurpuraExpert",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.67 19.83 L 19.79 22.15 L 17.44 21.55 L 17.43 19.07 L 18.73 19.47 L 17.90 18.35 L 20.84 18.01 L 22.21 18.84 L 23.00 16.14 L 22.40 13.20 L 20.97 11.18 L 21.40 12.22 L 19.35 9.46 L 20.86 11.99 L 20.57 9.26 L 20.14 8.85 L 20.58 6.35 L 21.10 8.64 L 19.68 5.83 L 21.75 4.53 L 19.55 5.21 L 18.30 4.82 L 18.14 4.09 L 19.21 6.17 L 21.64 7.54 L 18.74 6.37 L 21.23 3.77 L 19.57 6.27 L 22.05 4.69 L 23.00 6.52"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 7.33 L 4.48 5.09 L 2.62 4.13 L 4.57 3.17 L 7.04 5.91 L 6.56 7.11 L 8.25 9.93 L 9.63 7.71 L 11.24 8.49 L 11.89 11.41 L 9.93 13.34 L 11.73 14.72 L 12.69 15.81 L 12.93 15.58 L 10.71 18.41 L 11.89 17.37 L 9.17 18.68 L 9.27 16.57"
      }
    ]
  ]
};

export const PurpuraExpert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.67 19.83 L 19.79 22.15 L 17.44 21.55 L 17.43 19.07 L 18.73 19.47 L 17.90 18.35 L 20.84 18.01 L 22.21 18.84 L 23.00 16.14 L 22.40 13.20 L 20.97 11.18 L 21.40 12.22 L 19.35 9.46 L 20.86 11.99 L 20.57 9.26 L 20.14 8.85 L 20.58 6.35 L 21.10 8.64 L 19.68 5.83 L 21.75 4.53 L 19.55 5.21 L 18.30 4.82 L 18.14 4.09 L 19.21 6.17 L 21.64 7.54 L 18.74 6.37 L 21.23 3.77 L 19.57 6.27 L 22.05 4.69 L 23.00 6.52" />
      <path d="M 4.81 7.33 L 4.48 5.09 L 2.62 4.13 L 4.57 3.17 L 7.04 5.91 L 6.56 7.11 L 8.25 9.93 L 9.63 7.71 L 11.24 8.49 L 11.89 11.41 L 9.93 13.34 L 11.73 14.72 L 12.69 15.81 L 12.93 15.58 L 10.71 18.41 L 11.89 17.37 L 9.17 18.68 L 9.27 16.57" />
      {children}
    </svg>
  );
});

export default PurpuraExpert;
