import React from 'react';

export const iconData = {
  "id": "GyroTectonic",
  "name": "GyroTectonic",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.07 9.65 L 7.55 7.45 L 5.41 5.97 L 6.34 8.39 L 7.74 8.88 L 9.65 7.93 L 7.68 10.63 L 8.71 11.05 L 10.90 13.16 L 13.51 15.55 L 10.71 13.31 L 8.40 14.53 L 6.84 13.53 L 5.71 15.56 L 6.63 15.28 L 4.19 13.97 L 6.62 15.37 L 9.61 13.27 L 11.10 10.64 L 13.79 10.45 L 14.23 10.22 L 14.37 9.44 L 11.81 10.05 L 10.10 11.23 L 8.02 11.95 L 9.24 14.18 L 6.32 12.58 L 8.61 10.68 L 10.29 8.48 L 9.89 10.23 L 10.92 9.11 L 8.86 10.21 L 6.97 8.28 L 9.46 9.40 L 7.90 11.00"
      }
    ]
  ]
};

export const GyroTectonic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.07 9.65 L 7.55 7.45 L 5.41 5.97 L 6.34 8.39 L 7.74 8.88 L 9.65 7.93 L 7.68 10.63 L 8.71 11.05 L 10.90 13.16 L 13.51 15.55 L 10.71 13.31 L 8.40 14.53 L 6.84 13.53 L 5.71 15.56 L 6.63 15.28 L 4.19 13.97 L 6.62 15.37 L 9.61 13.27 L 11.10 10.64 L 13.79 10.45 L 14.23 10.22 L 14.37 9.44 L 11.81 10.05 L 10.10 11.23 L 8.02 11.95 L 9.24 14.18 L 6.32 12.58 L 8.61 10.68 L 10.29 8.48 L 9.89 10.23 L 10.92 9.11 L 8.86 10.21 L 6.97 8.28 L 9.46 9.40 L 7.90 11.00" />
      {children}
    </svg>
  );
});

export default GyroTectonic;
