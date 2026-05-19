import React from 'react';

export const iconData = {
  "id": "ValutaSpill",
  "name": "ValutaSpill",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.99 12.48 L 14.32 20.70 L 4.44 16.89 L 5.01 6.32 L 15.24 3.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 14.30 L 11.57 18.12 L 6.05 13.48 L 8.75 6.80 L 15.95 7.31 Z"
      }
    ]
  ]
};

export const ValutaSpill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.99 12.48 L 14.32 20.70 L 4.44 16.89 L 5.01 6.32 L 15.24 3.60 Z" />
      <path d="M 17.68 14.30 L 11.57 18.12 L 6.05 13.48 L 8.75 6.80 L 15.95 7.31 Z" />
      {children}
    </svg>
  );
});

export default ValutaSpill;
