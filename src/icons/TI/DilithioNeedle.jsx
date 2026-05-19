import React from 'react';

export const iconData = {
  "id": "DilithioNeedle",
  "name": "DilithioNeedle",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.47 19.61 L 13.95 19.42 L 16.43 20.93 L 13.90 21.08 L 14.34 22.46 L 14.39 22.88 L 17.23 21.16 L 19.67 23.00 L 18.52 21.01 L 19.28 18.84 L 19.82 20.16 L 20.65 17.99 L 20.29 17.44 L 21.28 15.37 L 20.39 17.79 L 17.72 16.13 L 18.83 17.37 L 18.31 17.40 L 19.67 18.19 L 22.37 19.88 L 22.28 20.42 L 23.00 20.65 L 23.00 19.13 L 23.00 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 18.50 11.06 L 16.33 11.20 L 15.29 13.35 L 15.26 15.20 L 17.61 16.77 L 19.32 15.05 L 19.73 13.67 L 19.58 14.74 L 17.65 15.64 L 16.49 18.57 L 16.94 20.86 L 19.13 21.15 L 19.99 21.49 L 19.66 19.36 L 20.86 22.02 L 22.89 19.07 L 20.15 17.34 L 21.63 15.37 L 23.00 12.80"
      }
    ]
  ]
};

export const DilithioNeedle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.47 19.61 L 13.95 19.42 L 16.43 20.93 L 13.90 21.08 L 14.34 22.46 L 14.39 22.88 L 17.23 21.16 L 19.67 23.00 L 18.52 21.01 L 19.28 18.84 L 19.82 20.16 L 20.65 17.99 L 20.29 17.44 L 21.28 15.37 L 20.39 17.79 L 17.72 16.13 L 18.83 17.37 L 18.31 17.40 L 19.67 18.19 L 22.37 19.88 L 22.28 20.42 L 23.00 20.65 L 23.00 19.13 L 23.00 16.79" />
      <path d="M 18.50 11.06 L 16.33 11.20 L 15.29 13.35 L 15.26 15.20 L 17.61 16.77 L 19.32 15.05 L 19.73 13.67 L 19.58 14.74 L 17.65 15.64 L 16.49 18.57 L 16.94 20.86 L 19.13 21.15 L 19.99 21.49 L 19.66 19.36 L 20.86 22.02 L 22.89 19.07 L 20.15 17.34 L 21.63 15.37 L 23.00 12.80" />
      {children}
    </svg>
  );
});

export default DilithioNeedle;
