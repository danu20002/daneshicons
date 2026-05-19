import React from 'react';

export const iconData = {
  "id": "FumoVista",
  "name": "FumoVista",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.09 13.81 L 7.82 11.79 L 6.84 14.37 L 8.15 12.30 L 7.66 14.42 L 6.25 11.93 L 3.80 12.35 L 4.06 14.16 L 5.77 11.96 L 8.75 13.79 L 6.45 13.71 L 8.47 16.10 L 6.92 15.52 L 5.61 16.97 L 5.68 14.05 L 3.42 13.89 L 5.75 15.05 L 7.16 13.56 L 6.30 15.20 L 8.58 12.47 L 8.00 14.12 L 10.83 14.40"
      }
    ]
  ]
};

export const FumoVista = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.09 13.81 L 7.82 11.79 L 6.84 14.37 L 8.15 12.30 L 7.66 14.42 L 6.25 11.93 L 3.80 12.35 L 4.06 14.16 L 5.77 11.96 L 8.75 13.79 L 6.45 13.71 L 8.47 16.10 L 6.92 15.52 L 5.61 16.97 L 5.68 14.05 L 3.42 13.89 L 5.75 15.05 L 7.16 13.56 L 6.30 15.20 L 8.58 12.47 L 8.00 14.12 L 10.83 14.40" />
      {children}
    </svg>
  );
});

export default FumoVista;
