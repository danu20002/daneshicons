import React from 'react';

export const iconData = {
  "id": "ElectroThrottle",
  "name": "ElectroThrottle",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.73 16.10 L 13.43 15.40 L 10.81 15.67 L 10.09 17.07 L 8.94 18.09 L 9.83 18.72 L 12.04 16.25 L 12.60 15.20 L 12.90 13.33 L 12.27 11.26 L 10.81 12.57 L 10.04 10.18 L 8.25 13.17 L 6.54 10.85 L 3.63 11.19 L 1.16 13.27 L 1.00 11.69 L 1.00 14.07 L 3.24 16.14 L 6.05 17.32 L 8.15 16.97 L 6.93 18.85 L 9.48 20.84 L 6.75 19.58"
      }
    ]
  ]
};

export const ElectroThrottle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.73 16.10 L 13.43 15.40 L 10.81 15.67 L 10.09 17.07 L 8.94 18.09 L 9.83 18.72 L 12.04 16.25 L 12.60 15.20 L 12.90 13.33 L 12.27 11.26 L 10.81 12.57 L 10.04 10.18 L 8.25 13.17 L 6.54 10.85 L 3.63 11.19 L 1.16 13.27 L 1.00 11.69 L 1.00 14.07 L 3.24 16.14 L 6.05 17.32 L 8.15 16.97 L 6.93 18.85 L 9.48 20.84 L 6.75 19.58" />
      {children}
    </svg>
  );
});

export default ElectroThrottle;
