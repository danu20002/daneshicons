import React from 'react';

export const iconData = {
  "id": "HeteroNiece",
  "name": "HeteroNiece",
  "category": "RO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.99 4.95 C 17.37 11.87, 14.31 10.80, 18.07 16.57"
      }
    ],
    [
      "path",
      {
        "d": "M 2.52 9.58 C 15.85 10.40, 10.70 17.60, 17.89 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 2.61 6.87 C 12.72 14.41, 9.46 18.43, 15.00 19.21"
      }
    ]
  ]
};

export const HeteroNiece = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.99 4.95 C 17.37 11.87, 14.31 10.80, 18.07 16.57" />
      <path d="M 2.52 9.58 C 15.85 10.40, 10.70 17.60, 17.89 17.70" />
      <path d="M 2.61 6.87 C 12.72 14.41, 9.46 18.43, 15.00 19.21" />
      {children}
    </svg>
  );
});

export default HeteroNiece;
