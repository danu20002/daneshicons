import React from 'react';

export const iconData = {
  "id": "VersaleMeal",
  "name": "VersaleMeal",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 12.00 a 4.34 4.34 0 1 0 8.67 0 a 4.34 4.34 0 1 0 -8.67 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 12.00 a 6.45 6.45 0 1 0 12.89 0 a 6.45 6.45 0 1 0 -12.89 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0"
      }
    ]
  ]
};

export const VersaleMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0" />
      <path d="M 7.66 12.00 a 4.34 4.34 0 1 0 8.67 0 a 4.34 4.34 0 1 0 -8.67 0" stroke-dasharray="3 2" />
      <path d="M 5.55 12.00 a 6.45 6.45 0 1 0 12.89 0 a 6.45 6.45 0 1 0 -12.89 0" stroke-dasharray="3 2" />
      <path d="M 3.94 12.00 a 8.06 8.06 0 1 0 16.12 0 a 8.06 8.06 0 1 0 -16.12 0" />
      {children}
    </svg>
  );
});

export default VersaleMeal;
