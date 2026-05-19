import React from 'react';

export const iconData = {
  "id": "VillicoThroat",
  "name": "VillicoThroat",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 5.34 L 3.23 4.07 L 3.13 1.60 L 1.72 1.00 L 1.80 1.57 L 1.00 1.00 L 1.00 3.79 L 1.00 1.00 L 1.00 1.00 L 2.41 1.65 L 1.43 1.00 L 1.49 3.77 L 1.00 5.96 L 3.34 5.95 L 5.94 5.84 L 8.07 7.10 L 6.02 7.45 L 8.55 10.44 L 8.18 8.75 L 8.88 9.83 L 6.67 9.90"
      }
    ],
    [
      "path",
      {
        "d": "M 13.53 18.02 L 13.47 19.29 L 15.36 17.89 L 14.16 20.29 L 11.56 17.92 L 14.20 16.18 L 13.63 14.26 L 14.49 13.37 L 16.35 12.78 L 13.92 11.99 L 14.23 12.65 L 12.81 10.51 L 11.59 11.82 L 11.36 9.67 L 13.44 7.75 L 12.49 8.45 L 13.95 6.16 L 13.48 4.70 L 12.00 6.88 L 11.51 5.81 L 12.48 6.28 L 14.57 7.15 L 11.90 5.94 L 13.85 6.20 L 15.31 7.93 L 14.85 6.69 L 13.92 6.34 L 15.61 7.92 L 14.97 5.86 L 14.69 4.68 L 15.36 3.53 L 15.60 2.95 L 17.78 4.86"
      }
    ]
  ]
};

export const VillicoThroat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 5.34 L 3.23 4.07 L 3.13 1.60 L 1.72 1.00 L 1.80 1.57 L 1.00 1.00 L 1.00 3.79 L 1.00 1.00 L 1.00 1.00 L 2.41 1.65 L 1.43 1.00 L 1.49 3.77 L 1.00 5.96 L 3.34 5.95 L 5.94 5.84 L 8.07 7.10 L 6.02 7.45 L 8.55 10.44 L 8.18 8.75 L 8.88 9.83 L 6.67 9.90" />
      <path d="M 13.53 18.02 L 13.47 19.29 L 15.36 17.89 L 14.16 20.29 L 11.56 17.92 L 14.20 16.18 L 13.63 14.26 L 14.49 13.37 L 16.35 12.78 L 13.92 11.99 L 14.23 12.65 L 12.81 10.51 L 11.59 11.82 L 11.36 9.67 L 13.44 7.75 L 12.49 8.45 L 13.95 6.16 L 13.48 4.70 L 12.00 6.88 L 11.51 5.81 L 12.48 6.28 L 14.57 7.15 L 11.90 5.94 L 13.85 6.20 L 15.31 7.93 L 14.85 6.69 L 13.92 6.34 L 15.61 7.92 L 14.97 5.86 L 14.69 4.68 L 15.36 3.53 L 15.60 2.95 L 17.78 4.86" />
      {children}
    </svg>
  );
});

export default VillicoThroat;
