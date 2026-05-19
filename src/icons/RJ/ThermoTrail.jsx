import React from 'react';

export const iconData = {
  "id": "ThermoTrail",
  "name": "ThermoTrail",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 11.78 L 5.89 5.58 L 12.22 3.14 L 18.42 5.89 L 20.86 12.22 L 18.11 18.42 L 11.78 20.86 L 5.58 18.11 Z"
      }
    ]
  ]
};

export const ThermoTrail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 11.78 L 5.89 5.58 L 12.22 3.14 L 18.42 5.89 L 20.86 12.22 L 18.11 18.42 L 11.78 20.86 L 5.58 18.11 Z" />
      {children}
    </svg>
  );
});

export default ThermoTrail;
