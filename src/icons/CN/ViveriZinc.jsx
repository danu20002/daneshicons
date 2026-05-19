import React from 'react';

export const iconData = {
  "id": "ViveriZinc",
  "name": "ViveriZinc",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 4.10 L 7.20 3.43 L 9.96 5.33 L 12.66 4.94 L 14.39 5.77 L 16.72 6.20 L 17.57 8.45 L 19.22 6.01 L 19.40 6.65 L 17.93 5.42 L 14.96 8.28 L 12.22 7.13 L 14.29 5.33 L 16.29 8.23 L 19.08 6.60 L 19.64 9.37 L 20.52 8.62 L 23.00 7.23 L 23.00 6.07 L 23.00 7.49 L 23.00 7.50 L 23.00 6.31 L 23.00 7.02 L 20.97 8.37 L 23.00 9.26 L 23.00 9.16 L 23.00 11.08 L 20.60 10.76 L 18.28 12.22 L 15.89 10.99 L 16.26 11.34 L 14.73 13.47 L 13.68 14.10"
      }
    ]
  ]
};

export const ViveriZinc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 4.10 L 7.20 3.43 L 9.96 5.33 L 12.66 4.94 L 14.39 5.77 L 16.72 6.20 L 17.57 8.45 L 19.22 6.01 L 19.40 6.65 L 17.93 5.42 L 14.96 8.28 L 12.22 7.13 L 14.29 5.33 L 16.29 8.23 L 19.08 6.60 L 19.64 9.37 L 20.52 8.62 L 23.00 7.23 L 23.00 6.07 L 23.00 7.49 L 23.00 7.50 L 23.00 6.31 L 23.00 7.02 L 20.97 8.37 L 23.00 9.26 L 23.00 9.16 L 23.00 11.08 L 20.60 10.76 L 18.28 12.22 L 15.89 10.99 L 16.26 11.34 L 14.73 13.47 L 13.68 14.10" />
      {children}
    </svg>
  );
});

export default ViveriZinc;
