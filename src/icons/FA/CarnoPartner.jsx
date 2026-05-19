import React from 'react';

export const iconData = {
  "id": "CarnoPartner",
  "name": "CarnoPartner",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 5.83 L 10.58 7.66 L 15.24 1.99 L 15.69 9.31 L 22.52 11.99 L 15.70 14.68 L 15.26 22.00 L 10.59 16.35 L 3.50 18.19 L 7.43 12.01 Z"
      }
    ]
  ]
};

export const CarnoPartner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 5.83 L 10.58 7.66 L 15.24 1.99 L 15.69 9.31 L 22.52 11.99 L 15.70 14.68 L 15.26 22.00 L 10.59 16.35 L 3.50 18.19 L 7.43 12.01 Z" />
      {children}
    </svg>
  );
});

export default CarnoPartner;
