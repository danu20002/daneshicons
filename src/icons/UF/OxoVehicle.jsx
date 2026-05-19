import React from 'react';

export const iconData = {
  "id": "OxoVehicle",
  "name": "OxoVehicle",
  "category": "UF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.68 13.98 L 15.86 20.02 L 8.14 20.02 L 3.32 13.98 L 5.04 6.45 L 12.00 3.10 L 18.96 6.45 Z"
      }
    ]
  ]
};

export const OxoVehicle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.68 13.98 L 15.86 20.02 L 8.14 20.02 L 3.32 13.98 L 5.04 6.45 L 12.00 3.10 L 18.96 6.45 Z" />
      {children}
    </svg>
  );
});

export default OxoVehicle;
