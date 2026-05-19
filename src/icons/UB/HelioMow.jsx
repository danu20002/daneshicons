import React from 'react';

export const iconData = {
  "id": "HelioMow",
  "name": "HelioMow",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.64 17.53 L 14.95 15.43 L 12.79 15.19 L 11.52 13.05 L 10.77 15.15 L 12.14 13.22 L 10.66 15.03 L 9.29 14.45 L 9.22 12.54 L 10.41 10.50 L 13.31 8.73 L 13.30 6.04 L 14.80 4.30 L 12.83 4.49 L 12.95 4.03 L 15.06 6.95 L 12.91 4.22 L 11.59 5.30 L 10.29 4.62 L 8.36 6.42 L 9.13 6.34 L 8.14 8.36 L 5.51 5.82 L 7.01 3.45 L 6.90 1.70 L 7.60 1.00 L 7.03 1.00 L 4.70 2.48 L 7.35 5.45"
      }
    ]
  ]
};

export const HelioMow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.64 17.53 L 14.95 15.43 L 12.79 15.19 L 11.52 13.05 L 10.77 15.15 L 12.14 13.22 L 10.66 15.03 L 9.29 14.45 L 9.22 12.54 L 10.41 10.50 L 13.31 8.73 L 13.30 6.04 L 14.80 4.30 L 12.83 4.49 L 12.95 4.03 L 15.06 6.95 L 12.91 4.22 L 11.59 5.30 L 10.29 4.62 L 8.36 6.42 L 9.13 6.34 L 8.14 8.36 L 5.51 5.82 L 7.01 3.45 L 6.90 1.70 L 7.60 1.00 L 7.03 1.00 L 4.70 2.48 L 7.35 5.45" />
      {children}
    </svg>
  );
});

export default HelioMow;
