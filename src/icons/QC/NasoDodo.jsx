import React from 'react';

export const iconData = {
  "id": "NasoDodo",
  "name": "NasoDodo",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 8.97 C 17.46 14.64, 17.36 9.02, 20.34 14.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 5.72 C 4.65 6.67, 9.97 4.29, 19.01 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.03 3.26 C 13.38 7.94, 19.99 19.95, 16.20 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 8.41 5.08 C 10.66 6.95, 8.41 19.15, 15.72 14.48"
      }
    ]
  ]
};

export const NasoDodo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 8.97 C 17.46 14.64, 17.36 9.02, 20.34 14.30" />
      <path d="M 3.37 5.72 C 4.65 6.67, 9.97 4.29, 19.01 15.83" />
      <path d="M 8.03 3.26 C 13.38 7.94, 19.99 19.95, 16.20 16.48" />
      <path d="M 8.41 5.08 C 10.66 6.95, 8.41 19.15, 15.72 14.48" />
      {children}
    </svg>
  );
});

export default NasoDodo;
