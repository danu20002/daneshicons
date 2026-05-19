import React from 'react';

export const iconData = {
  "id": "PolarisUsage",
  "name": "PolarisUsage",
  "category": "KI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.06 L 2.50 8.26 L 3.00 9.97 L 3.50 10.84 L 4.00 10.66 L 4.50 9.48 L 5.00 7.55 L 5.50 5.30 L 6.00 3.22 L 6.50 1.75 L 7.00 1.22 L 7.50 1.75 L 8.00 3.22 L 8.50 5.30 L 9.00 7.55 L 9.50 9.48 L 10.00 10.66 L 10.50 10.84 L 11.00 9.97 L 11.50 8.26 L 12.00 6.06 L 12.50 3.86 L 13.00 2.14 L 13.50 1.28 L 14.00 1.46 L 14.50 2.64 L 15.00 4.56 L 15.50 6.82 L 16.00 8.90 L 16.50 10.37 L 17.00 10.90 L 17.50 10.37 L 18.00 8.90 L 18.50 6.82 L 19.00 4.56 L 19.50 2.64 L 20.00 1.46 L 20.50 1.28 L 21.00 2.14 L 21.50 3.86 L 22.00 6.06"
      }
    ]
  ]
};

export const PolarisUsage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.06 L 2.50 8.26 L 3.00 9.97 L 3.50 10.84 L 4.00 10.66 L 4.50 9.48 L 5.00 7.55 L 5.50 5.30 L 6.00 3.22 L 6.50 1.75 L 7.00 1.22 L 7.50 1.75 L 8.00 3.22 L 8.50 5.30 L 9.00 7.55 L 9.50 9.48 L 10.00 10.66 L 10.50 10.84 L 11.00 9.97 L 11.50 8.26 L 12.00 6.06 L 12.50 3.86 L 13.00 2.14 L 13.50 1.28 L 14.00 1.46 L 14.50 2.64 L 15.00 4.56 L 15.50 6.82 L 16.00 8.90 L 16.50 10.37 L 17.00 10.90 L 17.50 10.37 L 18.00 8.90 L 18.50 6.82 L 19.00 4.56 L 19.50 2.64 L 20.00 1.46 L 20.50 1.28 L 21.00 2.14 L 21.50 3.86 L 22.00 6.06" />
      {children}
    </svg>
  );
});

export default PolarisUsage;
