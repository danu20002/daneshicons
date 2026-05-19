import React from 'react';

export const iconData = {
  "id": "CarnoYear",
  "name": "CarnoYear",
  "category": "OH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.69 5.89 L 19.31 5.89 L 19.31 18.11 L 4.69 18.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.69 5.89 L 8.29 2.29 L 22.91 2.29 L 19.31 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 5.89 L 22.91 2.29 L 22.91 14.51 L 19.31 18.11"
      }
    ]
  ]
};

export const CarnoYear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.69 5.89 L 19.31 5.89 L 19.31 18.11 L 4.69 18.11 Z" />
      <path d="M 4.69 5.89 L 8.29 2.29 L 22.91 2.29 L 19.31 5.89" />
      <path d="M 19.31 5.89 L 22.91 2.29 L 22.91 14.51 L 19.31 18.11" />
      {children}
    </svg>
  );
});

export default CarnoYear;
