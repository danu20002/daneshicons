import React from 'react';

export const iconData = {
  "id": "ClaroMulch",
  "name": "ClaroMulch",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.87 14.96 L 13.57 15.22 L 15.94 17.27 L 16.90 15.13 L 14.07 17.68 L 13.28 19.72 L 12.27 17.44 L 11.51 19.15 L 10.60 21.36 L 11.40 23.00 L 13.98 21.70 L 13.50 20.99 L 11.71 19.58 L 10.86 19.39 L 8.16 19.99 L 10.88 22.61 L 9.63 23.00 L 8.37 23.00 L 8.39 22.36"
      }
    ],
    [
      "path",
      {
        "d": "M 17.65 3.09 L 15.33 1.00 L 17.86 1.00 L 15.99 3.73 L 15.19 5.51 L 14.97 4.76 L 14.23 5.48 L 11.80 4.88 L 9.42 4.75 L 9.57 3.86 L 11.29 1.00 L 8.99 3.16 L 7.01 2.86 L 8.16 4.38 L 6.13 6.32 L 8.88 8.67 L 6.58 9.71 L 4.52 6.92 L 3.19 8.88 L 1.00 11.55 L 1.00 14.19 L 1.51 14.61 L 1.00 14.16 L 1.00 15.00 L 1.00 16.74 L 3.44 18.34 L 4.76 20.04 L 6.83 22.01 L 5.97 20.00 L 6.18 17.06 L 3.39 17.00 L 3.75 14.44 L 4.42 12.70 L 2.46 15.49"
      }
    ]
  ]
};

export const ClaroMulch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.87 14.96 L 13.57 15.22 L 15.94 17.27 L 16.90 15.13 L 14.07 17.68 L 13.28 19.72 L 12.27 17.44 L 11.51 19.15 L 10.60 21.36 L 11.40 23.00 L 13.98 21.70 L 13.50 20.99 L 11.71 19.58 L 10.86 19.39 L 8.16 19.99 L 10.88 22.61 L 9.63 23.00 L 8.37 23.00 L 8.39 22.36" />
      <path d="M 17.65 3.09 L 15.33 1.00 L 17.86 1.00 L 15.99 3.73 L 15.19 5.51 L 14.97 4.76 L 14.23 5.48 L 11.80 4.88 L 9.42 4.75 L 9.57 3.86 L 11.29 1.00 L 8.99 3.16 L 7.01 2.86 L 8.16 4.38 L 6.13 6.32 L 8.88 8.67 L 6.58 9.71 L 4.52 6.92 L 3.19 8.88 L 1.00 11.55 L 1.00 14.19 L 1.51 14.61 L 1.00 14.16 L 1.00 15.00 L 1.00 16.74 L 3.44 18.34 L 4.76 20.04 L 6.83 22.01 L 5.97 20.00 L 6.18 17.06 L 3.39 17.00 L 3.75 14.44 L 4.42 12.70 L 2.46 15.49" />
      {children}
    </svg>
  );
});

export default ClaroMulch;
