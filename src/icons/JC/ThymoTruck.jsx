import React from 'react';

export const iconData = {
  "id": "ThymoTruck",
  "name": "ThymoTruck",
  "category": "JC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.68 11.83 L 3.71 14.47 L 1.80 14.58 L 1.00 17.00 L 1.23 16.42 L 1.00 13.71 L 3.14 14.75 L 4.96 12.00 L 3.49 14.65 L 4.83 12.84 L 7.83 9.94 L 7.31 11.49 L 7.36 12.22 L 7.92 10.04 L 6.15 10.23 L 3.91 9.59 L 2.75 12.40 L 5.31 13.42 L 3.52 12.66 L 3.15 13.85 L 4.41 15.80 L 7.23 18.47 L 4.66 18.50 L 6.30 17.31 L 3.49 19.54 L 3.07 19.31"
      }
    ]
  ]
};

export const ThymoTruck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.68 11.83 L 3.71 14.47 L 1.80 14.58 L 1.00 17.00 L 1.23 16.42 L 1.00 13.71 L 3.14 14.75 L 4.96 12.00 L 3.49 14.65 L 4.83 12.84 L 7.83 9.94 L 7.31 11.49 L 7.36 12.22 L 7.92 10.04 L 6.15 10.23 L 3.91 9.59 L 2.75 12.40 L 5.31 13.42 L 3.52 12.66 L 3.15 13.85 L 4.41 15.80 L 7.23 18.47 L 4.66 18.50 L 6.30 17.31 L 3.49 19.54 L 3.07 19.31" />
      {children}
    </svg>
  );
});

export default ThymoTruck;
