import React from 'react';

export const iconData = {
  "id": "TortiZest",
  "name": "TortiZest",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 4.86 L 8.87 3.36 L 6.63 1.00 L 7.60 3.99 L 5.22 4.82 L 7.07 2.18 L 9.85 1.00 L 11.71 1.54 L 13.48 2.46 L 12.71 1.00 L 9.83 1.00 L 8.08 1.22 L 9.30 1.00 L 10.11 2.46 L 7.90 5.31 L 7.53 4.00 L 6.19 5.69 L 8.19 4.25 L 10.50 2.02 L 7.66 4.72 L 5.18 6.16 L 7.37 8.14 L 10.19 6.29 L 9.75 8.34 L 10.81 10.21 L 10.59 9.67"
      }
    ]
  ]
};

export const TortiZest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 4.86 L 8.87 3.36 L 6.63 1.00 L 7.60 3.99 L 5.22 4.82 L 7.07 2.18 L 9.85 1.00 L 11.71 1.54 L 13.48 2.46 L 12.71 1.00 L 9.83 1.00 L 8.08 1.22 L 9.30 1.00 L 10.11 2.46 L 7.90 5.31 L 7.53 4.00 L 6.19 5.69 L 8.19 4.25 L 10.50 2.02 L 7.66 4.72 L 5.18 6.16 L 7.37 8.14 L 10.19 6.29 L 9.75 8.34 L 10.81 10.21 L 10.59 9.67" />
      {children}
    </svg>
  );
});

export default TortiZest;
