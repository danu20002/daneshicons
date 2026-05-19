import React from 'react';

export const iconData = {
  "id": "CarnoPixel",
  "name": "CarnoPixel",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 5.87 L 19.30 5.87 L 19.30 18.13 L 4.70 18.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 5.87 L 8.75 1.83 L 23.34 1.83 L 19.30 5.87"
      }
    ],
    [
      "path",
      {
        "d": "M 19.30 5.87 L 23.34 1.83 L 23.34 14.09 L 19.30 18.13"
      }
    ]
  ]
};

export const CarnoPixel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 5.87 L 19.30 5.87 L 19.30 18.13 L 4.70 18.13 Z" />
      <path d="M 4.70 5.87 L 8.75 1.83 L 23.34 1.83 L 19.30 5.87" />
      <path d="M 19.30 5.87 L 23.34 1.83 L 23.34 14.09 L 19.30 18.13" />
      {children}
    </svg>
  );
});

export default CarnoPixel;
