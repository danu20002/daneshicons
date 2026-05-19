import React from 'react';

export const iconData = {
  "id": "IridoIron",
  "name": "IridoIron",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.26 17.53 L 13.58 15.25 L 16.45 17.93 L 15.84 20.23 L 17.94 19.16 L 15.35 16.57 L 13.55 18.85 L 15.97 17.26 L 16.10 14.28 L 14.65 12.05 L 12.37 12.32 L 15.09 9.92 L 15.35 12.21 L 13.75 11.02 L 13.03 12.97 L 13.59 12.95 L 13.54 12.56 L 12.07 10.55 L 11.61 12.79 L 13.66 10.60 L 15.20 11.78 L 13.09 10.79 L 11.67 8.27"
      }
    ],
    [
      "path",
      {
        "d": "M 16.79 19.52 L 19.45 20.41 L 16.81 20.04 L 14.02 18.31 L 11.03 18.12 L 9.49 18.83 L 6.88 18.89 L 7.34 18.35 L 4.56 19.99 L 2.89 21.54 L 5.63 18.66 L 7.95 18.49 L 8.81 18.97 L 9.47 20.31 L 8.43 19.97 L 5.98 20.82 L 4.13 20.71"
      }
    ]
  ]
};

export const IridoIron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.26 17.53 L 13.58 15.25 L 16.45 17.93 L 15.84 20.23 L 17.94 19.16 L 15.35 16.57 L 13.55 18.85 L 15.97 17.26 L 16.10 14.28 L 14.65 12.05 L 12.37 12.32 L 15.09 9.92 L 15.35 12.21 L 13.75 11.02 L 13.03 12.97 L 13.59 12.95 L 13.54 12.56 L 12.07 10.55 L 11.61 12.79 L 13.66 10.60 L 15.20 11.78 L 13.09 10.79 L 11.67 8.27" />
      <path d="M 16.79 19.52 L 19.45 20.41 L 16.81 20.04 L 14.02 18.31 L 11.03 18.12 L 9.49 18.83 L 6.88 18.89 L 7.34 18.35 L 4.56 19.99 L 2.89 21.54 L 5.63 18.66 L 7.95 18.49 L 8.81 18.97 L 9.47 20.31 L 8.43 19.97 L 5.98 20.82 L 4.13 20.71" />
      {children}
    </svg>
  );
});

export default IridoIron;
