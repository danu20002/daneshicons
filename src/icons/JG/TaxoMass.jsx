import React from 'react';

export const iconData = {
  "id": "TaxoMass",
  "name": "TaxoMass",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.25 3.54 L 19.39 7.70 L 19.97 15.10 L 14.55 20.16 L 7.21 19.08 L 3.48 12.67 L 6.16 5.75 Z"
      }
    ]
  ]
};

export const TaxoMass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.25 3.54 L 19.39 7.70 L 19.97 15.10 L 14.55 20.16 L 7.21 19.08 L 3.48 12.67 L 6.16 5.75 Z" />
      {children}
    </svg>
  );
});

export default TaxoMass;
