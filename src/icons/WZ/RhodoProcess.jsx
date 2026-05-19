import React from 'react';

export const iconData = {
  "id": "RhodoProcess",
  "name": "RhodoProcess",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.95 13.42 L 9.64 14.86 L 10.60 12.38 L 9.32 14.32 L 11.27 14.31 L 13.58 13.52 L 13.52 15.12 L 13.64 13.33 L 10.92 13.60 L 13.35 16.46 L 15.70 15.01 L 15.84 17.19 L 17.62 18.24 L 18.01 21.12 L 19.11 20.45 L 16.36 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 11.56 L 4.89 10.24 L 6.53 12.74 L 6.58 10.78 L 4.59 12.12 L 7.42 9.70 L 7.46 9.54 L 8.94 9.24 L 8.25 11.20 L 8.94 11.52 L 9.70 13.09 L 11.67 11.70 L 13.25 10.36 L 14.71 11.04 L 17.09 13.65 L 15.78 15.48 L 14.31 13.75 L 16.68 14.79 L 17.70 13.57 L 17.91 14.16"
      }
    ]
  ]
};

export const RhodoProcess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.95 13.42 L 9.64 14.86 L 10.60 12.38 L 9.32 14.32 L 11.27 14.31 L 13.58 13.52 L 13.52 15.12 L 13.64 13.33 L 10.92 13.60 L 13.35 16.46 L 15.70 15.01 L 15.84 17.19 L 17.62 18.24 L 18.01 21.12 L 19.11 20.45 L 16.36 17.87" />
      <path d="M 5.54 11.56 L 4.89 10.24 L 6.53 12.74 L 6.58 10.78 L 4.59 12.12 L 7.42 9.70 L 7.46 9.54 L 8.94 9.24 L 8.25 11.20 L 8.94 11.52 L 9.70 13.09 L 11.67 11.70 L 13.25 10.36 L 14.71 11.04 L 17.09 13.65 L 15.78 15.48 L 14.31 13.75 L 16.68 14.79 L 17.70 13.57 L 17.91 14.16" />
      {children}
    </svg>
  );
});

export default RhodoProcess;
