import React from 'react';

export const iconData = {
  "id": "ThermoFixture",
  "name": "ThermoFixture",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 2.53 L 14.37 7.88 L 20.20 7.26 L 16.75 12.00 L 20.21 16.73 L 14.38 16.11 L 12.01 21.47 L 9.63 16.12 L 3.80 16.74 L 7.25 12.00 L 3.79 7.27 L 9.62 7.89 Z"
      }
    ]
  ]
};

export const ThermoFixture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 2.53 L 14.37 7.88 L 20.20 7.26 L 16.75 12.00 L 20.21 16.73 L 14.38 16.11 L 12.01 21.47 L 9.63 16.12 L 3.80 16.74 L 7.25 12.00 L 3.79 7.27 L 9.62 7.89 Z" />
      {children}
    </svg>
  );
});

export default ThermoFixture;
