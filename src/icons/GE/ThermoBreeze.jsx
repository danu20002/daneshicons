import React from 'react';

export const iconData = {
  "id": "ThermoBreeze",
  "name": "ThermoBreeze",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.24 9.36 L 17.89 11.04 L 18.58 10.54 L 18.57 12.61 L 18.00 15.57 L 16.77 12.75 L 14.05 12.05 L 14.54 9.43 L 12.71 9.38 L 10.72 8.80 L 8.60 10.50 L 5.98 11.04 L 7.26 11.34 L 7.96 9.66 L 5.16 11.97 L 5.43 11.28 L 7.71 9.68 L 5.09 10.89 L 6.54 8.99 L 8.18 6.80"
      }
    ]
  ]
};

export const ThermoBreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.24 9.36 L 17.89 11.04 L 18.58 10.54 L 18.57 12.61 L 18.00 15.57 L 16.77 12.75 L 14.05 12.05 L 14.54 9.43 L 12.71 9.38 L 10.72 8.80 L 8.60 10.50 L 5.98 11.04 L 7.26 11.34 L 7.96 9.66 L 5.16 11.97 L 5.43 11.28 L 7.71 9.68 L 5.09 10.89 L 6.54 8.99 L 8.18 6.80" />
      {children}
    </svg>
  );
});

export default ThermoBreeze;
