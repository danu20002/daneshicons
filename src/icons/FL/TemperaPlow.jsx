import React from 'react';

export const iconData = {
  "id": "TemperaPlow",
  "name": "TemperaPlow",
  "category": "FL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.11 16.76 L 9.57 17.41 L 11.70 17.21 L 11.26 19.54 L 10.43 21.11 L 10.46 23.00 L 9.81 23.00 L 11.24 23.00 L 13.51 20.65 L 13.13 23.00 L 14.64 23.00 L 14.12 20.13 L 13.67 21.42 L 15.29 20.17 L 12.97 19.82 L 12.34 16.95 L 14.03 14.65 L 15.06 12.82 L 14.99 15.23 L 14.81 16.21 L 16.51 18.18 L 13.57 18.83 L 14.36 17.50"
      }
    ]
  ]
};

export const TemperaPlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.11 16.76 L 9.57 17.41 L 11.70 17.21 L 11.26 19.54 L 10.43 21.11 L 10.46 23.00 L 9.81 23.00 L 11.24 23.00 L 13.51 20.65 L 13.13 23.00 L 14.64 23.00 L 14.12 20.13 L 13.67 21.42 L 15.29 20.17 L 12.97 19.82 L 12.34 16.95 L 14.03 14.65 L 15.06 12.82 L 14.99 15.23 L 14.81 16.21 L 16.51 18.18 L 13.57 18.83 L 14.36 17.50" />
      {children}
    </svg>
  );
});

export default TemperaPlow;
