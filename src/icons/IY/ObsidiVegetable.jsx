import React from 'react';

export const iconData = {
  "id": "ObsidiVegetable",
  "name": "ObsidiVegetable",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.40 12.00 Q 15.41 15.41 12.00 21.40"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.40 Q 8.59 15.41 2.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 12.00 Q 8.59 8.59 12.00 2.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.60 Q 15.41 8.59 21.40 12.00"
      }
    ]
  ]
};

export const ObsidiVegetable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.40 12.00 Q 15.41 15.41 12.00 21.40" />
      <path d="M 12.00 21.40 Q 8.59 15.41 2.60 12.00" />
      <path d="M 2.60 12.00 Q 8.59 8.59 12.00 2.60" />
      <path d="M 12.00 2.60 Q 15.41 8.59 21.40 12.00" />
      {children}
    </svg>
  );
});

export default ObsidiVegetable;
