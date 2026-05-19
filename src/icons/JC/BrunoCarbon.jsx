import React from 'react';

export const iconData = {
  "id": "BrunoCarbon",
  "name": "BrunoCarbon",
  "category": "JC",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.22 4.52 L 16.37 6.36 L 13.78 3.87 L 12.93 6.20 L 15.86 5.52 L 18.02 5.03 L 20.21 7.31 L 17.33 6.81 L 19.44 7.13 L 17.47 4.87 L 15.41 6.56 L 14.37 7.40 L 15.48 8.30 L 13.93 6.51 L 13.82 8.33 L 14.19 6.76 L 13.45 5.30 L 11.57 3.41 L 11.72 1.96 L 10.03 1.00 L 7.60 1.00 L 9.40 1.00 L 10.79 1.13 L 9.90 1.54 L 6.96 1.53 L 6.12 1.00 L 7.20 1.24 L 7.11 1.00 L 4.53 1.52 L 3.64 1.00 L 3.87 1.00 L 1.71 1.00 L 3.19 1.00 L 4.80 1.00 L 6.05 3.63"
      }
    ]
  ]
};

export const BrunoCarbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.22 4.52 L 16.37 6.36 L 13.78 3.87 L 12.93 6.20 L 15.86 5.52 L 18.02 5.03 L 20.21 7.31 L 17.33 6.81 L 19.44 7.13 L 17.47 4.87 L 15.41 6.56 L 14.37 7.40 L 15.48 8.30 L 13.93 6.51 L 13.82 8.33 L 14.19 6.76 L 13.45 5.30 L 11.57 3.41 L 11.72 1.96 L 10.03 1.00 L 7.60 1.00 L 9.40 1.00 L 10.79 1.13 L 9.90 1.54 L 6.96 1.53 L 6.12 1.00 L 7.20 1.24 L 7.11 1.00 L 4.53 1.52 L 3.64 1.00 L 3.87 1.00 L 1.71 1.00 L 3.19 1.00 L 4.80 1.00 L 6.05 3.63" />
      {children}
    </svg>
  );
});

export default BrunoCarbon;
