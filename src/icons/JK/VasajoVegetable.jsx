import React from 'react';

export const iconData = {
  "id": "VasajoVegetable",
  "name": "VasajoVegetable",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 19.87 L 12.28 16.32 L 7.81 20.48 L 8.40 14.40 L 2.56 12.61 L 8.12 10.08 L 6.75 4.13 L 11.72 7.68 L 16.19 3.52 L 15.60 9.60 L 21.44 11.39 L 15.88 13.92 Z"
      }
    ]
  ]
};

export const VasajoVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 19.87 L 12.28 16.32 L 7.81 20.48 L 8.40 14.40 L 2.56 12.61 L 8.12 10.08 L 6.75 4.13 L 11.72 7.68 L 16.19 3.52 L 15.60 9.60 L 21.44 11.39 L 15.88 13.92 Z" />
      {children}
    </svg>
  );
});

export default VasajoVegetable;
