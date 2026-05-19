import React from 'react';

export const iconData = {
  "id": "BaroRequire",
  "name": "BaroRequire",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.00 4.99 L 7.08 2.36 L 9.57 3.24 L 12.29 3.24 L 12.34 5.71 L 9.99 5.68 L 12.07 5.09 L 9.39 6.16 L 8.64 6.07 L 9.51 6.44 L 7.29 4.95 L 10.01 7.01 L 11.97 7.23 L 11.66 5.68 L 13.62 7.86 L 12.98 7.84 L 14.05 7.60 L 14.55 5.62 L 14.80 7.08 L 13.26 5.92 L 11.98 5.03 L 11.70 4.46 L 13.79 6.72 L 10.85 7.85 L 13.42 5.54 L 13.88 5.02 L 13.46 3.99 L 15.01 6.28 L 14.60 4.91 L 12.43 2.55 L 10.72 1.00 L 9.56 3.57 L 10.69 6.49"
      }
    ]
  ]
};

export const BaroRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.00 4.99 L 7.08 2.36 L 9.57 3.24 L 12.29 3.24 L 12.34 5.71 L 9.99 5.68 L 12.07 5.09 L 9.39 6.16 L 8.64 6.07 L 9.51 6.44 L 7.29 4.95 L 10.01 7.01 L 11.97 7.23 L 11.66 5.68 L 13.62 7.86 L 12.98 7.84 L 14.05 7.60 L 14.55 5.62 L 14.80 7.08 L 13.26 5.92 L 11.98 5.03 L 11.70 4.46 L 13.79 6.72 L 10.85 7.85 L 13.42 5.54 L 13.88 5.02 L 13.46 3.99 L 15.01 6.28 L 14.60 4.91 L 12.43 2.55 L 10.72 1.00 L 9.56 3.57 L 10.69 6.49" />
      {children}
    </svg>
  );
});

export default BaroRequire;
