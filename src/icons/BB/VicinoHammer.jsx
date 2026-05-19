import React from 'react';

export const iconData = {
  "id": "VicinoHammer",
  "name": "VicinoHammer",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.04 17.60 L 18.79 16.76 L 20.63 14.46 L 23.00 12.20 L 21.14 14.95 L 23.00 14.90 L 23.00 15.77 L 23.00 14.30 L 21.70 16.70 L 23.00 17.41 L 23.00 19.55 L 23.00 19.44 L 21.53 19.51 L 21.13 17.08 L 19.54 18.30 L 20.81 15.61 L 18.68 14.90 L 19.35 12.93 L 19.04 11.62 L 16.47 10.99 L 14.14 10.51 L 13.77 11.33 L 13.19 12.43 L 10.29 10.16 L 11.22 9.37 L 8.79 10.07 L 8.83 9.48 L 8.45 8.90 L 8.64 6.83 L 9.61 8.22 L 9.67 9.38 L 7.64 10.38"
      }
    ],
    [
      "path",
      {
        "d": "M 13.84 13.48 L 14.55 12.72 L 12.68 15.68 L 11.54 17.15 L 9.59 17.73 L 11.60 16.09 L 10.29 16.19 L 7.35 16.27 L 6.99 13.59 L 9.94 15.72 L 9.27 15.68 L 7.02 17.70 L 9.92 16.62 L 9.03 16.61 L 11.21 17.66 L 10.33 17.58 L 13.29 19.83"
      }
    ]
  ]
};

export const VicinoHammer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.04 17.60 L 18.79 16.76 L 20.63 14.46 L 23.00 12.20 L 21.14 14.95 L 23.00 14.90 L 23.00 15.77 L 23.00 14.30 L 21.70 16.70 L 23.00 17.41 L 23.00 19.55 L 23.00 19.44 L 21.53 19.51 L 21.13 17.08 L 19.54 18.30 L 20.81 15.61 L 18.68 14.90 L 19.35 12.93 L 19.04 11.62 L 16.47 10.99 L 14.14 10.51 L 13.77 11.33 L 13.19 12.43 L 10.29 10.16 L 11.22 9.37 L 8.79 10.07 L 8.83 9.48 L 8.45 8.90 L 8.64 6.83 L 9.61 8.22 L 9.67 9.38 L 7.64 10.38" />
      <path d="M 13.84 13.48 L 14.55 12.72 L 12.68 15.68 L 11.54 17.15 L 9.59 17.73 L 11.60 16.09 L 10.29 16.19 L 7.35 16.27 L 6.99 13.59 L 9.94 15.72 L 9.27 15.68 L 7.02 17.70 L 9.92 16.62 L 9.03 16.61 L 11.21 17.66 L 10.33 17.58 L 13.29 19.83" />
      {children}
    </svg>
  );
});

export default VicinoHammer;
