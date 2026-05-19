import React from 'react';

export const iconData = {
  "id": "UbiquiVaccine",
  "name": "UbiquiVaccine",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.16 3.82 L 16.00 3.42 L 14.19 2.42 L 12.98 1.00 L 14.01 1.00 L 12.09 1.00 L 11.72 1.00 L 14.43 1.00 L 15.72 1.00 L 12.96 2.47 L 15.88 2.96 L 16.66 4.80 L 14.32 4.48 L 12.60 4.57 L 14.55 3.45 L 13.41 2.53 L 13.89 5.19 L 16.74 5.54 L 17.20 5.33 L 17.11 5.77 L 14.72 3.43 L 13.43 1.31 L 15.90 1.00 L 17.27 1.75 L 20.10 1.19 L 22.94 3.26 L 20.98 1.00 L 23.00 3.01 L 20.44 4.66 L 21.60 6.74 L 20.15 6.55 L 22.17 4.69 L 23.00 4.24 L 21.28 4.52 L 23.00 4.94 L 22.02 5.04"
      }
    ]
  ]
};

export const UbiquiVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.16 3.82 L 16.00 3.42 L 14.19 2.42 L 12.98 1.00 L 14.01 1.00 L 12.09 1.00 L 11.72 1.00 L 14.43 1.00 L 15.72 1.00 L 12.96 2.47 L 15.88 2.96 L 16.66 4.80 L 14.32 4.48 L 12.60 4.57 L 14.55 3.45 L 13.41 2.53 L 13.89 5.19 L 16.74 5.54 L 17.20 5.33 L 17.11 5.77 L 14.72 3.43 L 13.43 1.31 L 15.90 1.00 L 17.27 1.75 L 20.10 1.19 L 22.94 3.26 L 20.98 1.00 L 23.00 3.01 L 20.44 4.66 L 21.60 6.74 L 20.15 6.55 L 22.17 4.69 L 23.00 4.24 L 21.28 4.52 L 23.00 4.94 L 22.02 5.04" />
      {children}
    </svg>
  );
});

export default UbiquiVaccine;
