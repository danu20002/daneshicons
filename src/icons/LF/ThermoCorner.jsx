import React from 'react';

export const iconData = {
  "id": "ThermoCorner",
  "name": "ThermoCorner",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 12.00 L 15.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 12.00 L 13.08 9.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 12.00 L 13.08 14.77"
      }
    ]
  ]
};

export const ThermoCorner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 12.00 L 15.54 12.00" />
      <path d="M 8.46 12.00 L 13.08 9.23" />
      <path d="M 8.46 12.00 L 13.08 14.77" />
      {children}
    </svg>
  );
});

export default ThermoCorner;
