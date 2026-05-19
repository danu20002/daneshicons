import React from 'react';

export const iconData = {
  "id": "TurcheseSir",
  "name": "TurcheseSir",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 10.99 L 5.78 12.88 L 8.39 10.71 L 7.25 12.49 L 4.36 11.69 L 1.91 13.06 L 2.30 15.09 L 1.00 14.91 L 1.00 11.96 L 1.00 12.86 L 1.00 15.77 L 1.00 17.42 L 2.92 16.26 L 1.00 17.68 L 1.00 19.76 L 1.00 19.62 L 2.60 22.28 L 3.39 20.64 L 2.45 20.84 L 1.00 19.47 L 1.00 17.04 L 2.19 14.46 L 3.23 14.38 L 3.60 13.81 L 5.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 5.76 L 1.00 6.07 L 3.88 9.07 L 4.81 6.35 L 6.25 5.12 L 8.38 7.09 L 11.07 7.39 L 9.36 7.79 L 10.55 4.96 L 13.07 2.16 L 15.21 2.72 L 16.63 5.64 L 15.77 6.42 L 15.13 7.31 L 12.28 8.99 L 14.40 8.06 L 13.58 9.51 L 13.28 10.57 L 13.81 9.59 L 15.29 9.32 L 13.30 10.05"
      }
    ]
  ]
};

export const TurcheseSir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 10.99 L 5.78 12.88 L 8.39 10.71 L 7.25 12.49 L 4.36 11.69 L 1.91 13.06 L 2.30 15.09 L 1.00 14.91 L 1.00 11.96 L 1.00 12.86 L 1.00 15.77 L 1.00 17.42 L 2.92 16.26 L 1.00 17.68 L 1.00 19.76 L 1.00 19.62 L 2.60 22.28 L 3.39 20.64 L 2.45 20.84 L 1.00 19.47 L 1.00 17.04 L 2.19 14.46 L 3.23 14.38 L 3.60 13.81 L 5.32 12.00" />
      <path d="M 3.23 5.76 L 1.00 6.07 L 3.88 9.07 L 4.81 6.35 L 6.25 5.12 L 8.38 7.09 L 11.07 7.39 L 9.36 7.79 L 10.55 4.96 L 13.07 2.16 L 15.21 2.72 L 16.63 5.64 L 15.77 6.42 L 15.13 7.31 L 12.28 8.99 L 14.40 8.06 L 13.58 9.51 L 13.28 10.57 L 13.81 9.59 L 15.29 9.32 L 13.30 10.05" />
      {children}
    </svg>
  );
});

export default TurcheseSir;
