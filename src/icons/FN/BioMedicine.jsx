import React from 'react';

export const iconData = {
  "id": "BioMedicine",
  "name": "BioMedicine",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 6.65 L 20.74 6.65 L 20.74 17.35 L 3.26 17.35 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.26 6.65 L 7.30 2.61 L 24.78 2.61 L 20.74 6.65"
      }
    ],
    [
      "path",
      {
        "d": "M 20.74 6.65 L 24.78 2.61 L 24.78 13.31 L 20.74 17.35"
      }
    ]
  ]
};

export const BioMedicine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 6.65 L 20.74 6.65 L 20.74 17.35 L 3.26 17.35 Z" />
      <path d="M 3.26 6.65 L 7.30 2.61 L 24.78 2.61 L 20.74 6.65" />
      <path d="M 20.74 6.65 L 24.78 2.61 L 24.78 13.31 L 20.74 17.35" />
      {children}
    </svg>
  );
});

export default BioMedicine;
