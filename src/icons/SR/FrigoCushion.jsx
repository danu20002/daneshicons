import React from 'react';

export const iconData = {
  "id": "FrigoCushion",
  "name": "FrigoCushion",
  "category": "SR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.31 6.67 L 19.69 6.67 L 19.69 17.33 L 4.31 17.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 6.67 L 8.43 2.56 L 23.81 2.56 L 19.69 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.69 6.67 L 23.81 2.56 L 23.81 13.21 L 19.69 17.33"
      }
    ]
  ]
};

export const FrigoCushion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.31 6.67 L 19.69 6.67 L 19.69 17.33 L 4.31 17.33 Z" />
      <path d="M 4.31 6.67 L 8.43 2.56 L 23.81 2.56 L 19.69 6.67" />
      <path d="M 19.69 6.67 L 23.81 2.56 L 23.81 13.21 L 19.69 17.33" />
      {children}
    </svg>
  );
});

export default FrigoCushion;
