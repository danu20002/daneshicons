import React from 'react';

export const iconData = {
  "id": "TremaJam",
  "name": "TremaJam",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.10 3.47 L 8.00 3.66 L 9.01 6.11 L 9.62 4.53 L 11.70 5.14 L 9.73 6.26 L 11.95 4.48 L 14.87 2.65 L 12.69 4.50 L 11.41 4.18 L 11.43 6.97 L 12.32 4.98 L 9.79 4.07 L 10.82 4.20 L 13.34 6.90 L 11.75 7.67 L 9.52 9.16 L 10.06 9.18 L 11.79 6.88 L 12.21 5.60 L 14.07 7.54 L 11.41 8.47 L 8.87 7.11 L 11.06 7.23 L 11.35 8.99 L 12.95 9.13 L 11.68 11.79 L 10.29 14.39 L 7.81 13.08 L 7.90 10.92 L 6.15 13.80 L 4.99 14.99"
      }
    ]
  ]
};

export const TremaJam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.10 3.47 L 8.00 3.66 L 9.01 6.11 L 9.62 4.53 L 11.70 5.14 L 9.73 6.26 L 11.95 4.48 L 14.87 2.65 L 12.69 4.50 L 11.41 4.18 L 11.43 6.97 L 12.32 4.98 L 9.79 4.07 L 10.82 4.20 L 13.34 6.90 L 11.75 7.67 L 9.52 9.16 L 10.06 9.18 L 11.79 6.88 L 12.21 5.60 L 14.07 7.54 L 11.41 8.47 L 8.87 7.11 L 11.06 7.23 L 11.35 8.99 L 12.95 9.13 L 11.68 11.79 L 10.29 14.39 L 7.81 13.08 L 7.90 10.92 L 6.15 13.80 L 4.99 14.99" />
      {children}
    </svg>
  );
});

export default TremaJam;
