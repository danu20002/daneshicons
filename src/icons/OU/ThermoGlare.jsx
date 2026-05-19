import React from 'react';

export const iconData = {
  "id": "ThermoGlare",
  "name": "ThermoGlare",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.01 11.06 L 15.01 11.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.94 11.01 L 12.94 15.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.99 12.94 L 8.99 12.94"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 12.99 L 11.06 8.99"
      }
    ]
  ]
};

export const ThermoGlare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.01 11.06 L 15.01 11.06" />
      <path d="M 12.94 11.01 L 12.94 15.01" />
      <path d="M 12.99 12.94 L 8.99 12.94" />
      <path d="M 11.06 12.99 L 11.06 8.99" />
      {children}
    </svg>
  );
});

export default ThermoGlare;
