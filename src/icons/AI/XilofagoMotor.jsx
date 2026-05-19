import React from 'react';

export const iconData = {
  "id": "XilofagoMotor",
  "name": "XilofagoMotor",
  "category": "AI",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.06 3.03 L 18.57 4.42 L 19.53 4.82 L 19.02 3.15 L 17.11 5.03 L 15.89 4.88 L 15.91 4.92 L 18.11 7.91 L 18.68 7.82 L 19.65 5.26 L 16.70 3.32 L 13.85 3.17 L 12.81 2.32 L 13.73 1.68 L 14.33 1.00 L 12.37 2.08 L 14.83 4.11 L 13.05 1.55 L 14.45 2.42"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 18.87 L 9.36 16.29 L 9.56 17.34 L 12.50 15.22 L 10.71 12.93 L 8.64 12.15 L 9.40 14.51 L 7.84 16.84 L 8.92 16.47 L 9.58 13.67 L 7.36 11.28 L 8.56 11.42 L 10.14 10.98 L 11.00 9.87 L 9.06 10.92 L 10.74 9.47 L 10.43 10.43 L 10.70 11.07 L 8.89 9.72 L 10.85 11.31 L 12.37 13.56 L 11.26 12.85 L 12.29 12.85 L 10.43 11.49 L 13.32 11.54 L 13.61 10.55 L 15.85 12.63 L 15.97 12.45"
      }
    ]
  ]
};

export const XilofagoMotor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.06 3.03 L 18.57 4.42 L 19.53 4.82 L 19.02 3.15 L 17.11 5.03 L 15.89 4.88 L 15.91 4.92 L 18.11 7.91 L 18.68 7.82 L 19.65 5.26 L 16.70 3.32 L 13.85 3.17 L 12.81 2.32 L 13.73 1.68 L 14.33 1.00 L 12.37 2.08 L 14.83 4.11 L 13.05 1.55 L 14.45 2.42" />
      <path d="M 9.14 18.87 L 9.36 16.29 L 9.56 17.34 L 12.50 15.22 L 10.71 12.93 L 8.64 12.15 L 9.40 14.51 L 7.84 16.84 L 8.92 16.47 L 9.58 13.67 L 7.36 11.28 L 8.56 11.42 L 10.14 10.98 L 11.00 9.87 L 9.06 10.92 L 10.74 9.47 L 10.43 10.43 L 10.70 11.07 L 8.89 9.72 L 10.85 11.31 L 12.37 13.56 L 11.26 12.85 L 12.29 12.85 L 10.43 11.49 L 13.32 11.54 L 13.61 10.55 L 15.85 12.63 L 15.97 12.45" />
      {children}
    </svg>
  );
});

export default XilofagoMotor;
