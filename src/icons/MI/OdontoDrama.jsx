import React from 'react';

export const iconData = {
  "id": "OdontoDrama",
  "name": "OdontoDrama",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.76 15.94 L 14.92 17.11 L 10.96 21.55 L 8.05 16.36 L 2.60 13.96 L 6.63 9.59 L 7.23 3.66 L 12.64 6.15 L 18.45 4.89 L 17.76 10.80 Z"
      }
    ]
  ]
};

export const OdontoDrama = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.76 15.94 L 14.92 17.11 L 10.96 21.55 L 8.05 16.36 L 2.60 13.96 L 6.63 9.59 L 7.23 3.66 L 12.64 6.15 L 18.45 4.89 L 17.76 10.80 Z" />
      {children}
    </svg>
  );
});

export default OdontoDrama;
