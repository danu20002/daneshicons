import React from 'react';

export const iconData = {
  "id": "PeriMercury",
  "name": "PeriMercury",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.54 12.03 L 12.89 14.71 L 15.06 13.66 L 12.10 14.97 L 9.89 17.69 L 9.61 15.76 L 9.57 14.02 L 8.03 12.49 L 7.17 13.26 L 5.79 14.48 L 3.84 12.77 L 4.99 12.60 L 2.78 9.74 L 3.38 8.02 L 5.40 9.10 L 3.71 8.53 L 5.71 5.89 L 3.08 8.10 L 1.34 10.31 L 1.00 7.34 L 3.74 5.06 L 1.44 2.86 L 1.00 4.63 L 1.00 7.26 L 3.06 9.46 L 1.01 9.75 L 1.00 8.39 L 1.08 6.39 L 1.00 5.10 L 3.64 2.12 L 2.73 1.00"
      }
    ]
  ]
};

export const PeriMercury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.54 12.03 L 12.89 14.71 L 15.06 13.66 L 12.10 14.97 L 9.89 17.69 L 9.61 15.76 L 9.57 14.02 L 8.03 12.49 L 7.17 13.26 L 5.79 14.48 L 3.84 12.77 L 4.99 12.60 L 2.78 9.74 L 3.38 8.02 L 5.40 9.10 L 3.71 8.53 L 5.71 5.89 L 3.08 8.10 L 1.34 10.31 L 1.00 7.34 L 3.74 5.06 L 1.44 2.86 L 1.00 4.63 L 1.00 7.26 L 3.06 9.46 L 1.01 9.75 L 1.00 8.39 L 1.08 6.39 L 1.00 5.10 L 3.64 2.12 L 2.73 1.00" />
      {children}
    </svg>
  );
});

export default PeriMercury;
