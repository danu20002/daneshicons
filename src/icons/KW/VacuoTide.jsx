import React from 'react';

export const iconData = {
  "id": "VacuoTide",
  "name": "VacuoTide",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.49 11.38 L 9.22 10.17 L 7.28 2.59 L 12.20 8.68 L 17.79 3.21 L 14.97 10.51 L 22.51 12.62 L 14.78 13.83 L 16.72 21.41 L 11.80 15.32 L 6.21 20.79 L 9.03 13.49 Z"
      }
    ]
  ]
};

export const VacuoTide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.49 11.38 L 9.22 10.17 L 7.28 2.59 L 12.20 8.68 L 17.79 3.21 L 14.97 10.51 L 22.51 12.62 L 14.78 13.83 L 16.72 21.41 L 11.80 15.32 L 6.21 20.79 L 9.03 13.49 Z" />
      {children}
    </svg>
  );
});

export default VacuoTide;
