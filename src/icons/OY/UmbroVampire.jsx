import React from 'react';

export const iconData = {
  "id": "UmbroVampire",
  "name": "UmbroVampire",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.90 18.97 L 16.09 21.18 L 16.69 20.18 L 17.16 19.13 L 16.79 20.12 L 15.98 21.84 L 18.12 23.00 L 15.44 20.87 L 17.50 21.58 L 15.70 21.83 L 15.81 20.34 L 14.59 19.18 L 14.74 18.48 L 15.41 16.07 L 13.48 14.04 L 12.66 16.80 L 12.31 14.31 L 10.07 17.12 L 12.67 16.37 L 10.16 16.03 L 8.05 17.99 L 9.76 17.28 L 10.82 17.02 L 9.27 18.21 L 7.65 20.66 L 8.99 19.64 L 8.40 18.01 L 8.26 20.30 L 5.43 18.17 L 5.33 15.61 L 5.17 17.45"
      }
    ]
  ]
};

export const UmbroVampire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.90 18.97 L 16.09 21.18 L 16.69 20.18 L 17.16 19.13 L 16.79 20.12 L 15.98 21.84 L 18.12 23.00 L 15.44 20.87 L 17.50 21.58 L 15.70 21.83 L 15.81 20.34 L 14.59 19.18 L 14.74 18.48 L 15.41 16.07 L 13.48 14.04 L 12.66 16.80 L 12.31 14.31 L 10.07 17.12 L 12.67 16.37 L 10.16 16.03 L 8.05 17.99 L 9.76 17.28 L 10.82 17.02 L 9.27 18.21 L 7.65 20.66 L 8.99 19.64 L 8.40 18.01 L 8.26 20.30 L 5.43 18.17 L 5.33 15.61 L 5.17 17.45" />
      {children}
    </svg>
  );
});

export default UmbroVampire;
