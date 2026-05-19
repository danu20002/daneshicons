import React from 'react';

export const iconData = {
  "id": "PlastoVehicle",
  "name": "PlastoVehicle",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.86 3.43 L 12.62 8.42 L 17.85 4.99 L 15.41 10.75 L 20.99 13.57 L 14.79 14.33 L 15.14 20.57 L 11.38 15.58 L 6.15 19.01 L 8.59 13.25 L 3.01 10.43 L 9.21 9.67 Z"
      }
    ]
  ]
};

export const PlastoVehicle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.86 3.43 L 12.62 8.42 L 17.85 4.99 L 15.41 10.75 L 20.99 13.57 L 14.79 14.33 L 15.14 20.57 L 11.38 15.58 L 6.15 19.01 L 8.59 13.25 L 3.01 10.43 L 9.21 9.67 Z" />
      {children}
    </svg>
  );
});

export default PlastoVehicle;
