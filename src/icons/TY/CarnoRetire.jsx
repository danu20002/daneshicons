import React from 'react';

export const iconData = {
  "id": "CarnoRetire",
  "name": "CarnoRetire",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.17 7.79 C 21.98 6.60, 4.22 5.95, 11.00 12.53"
      }
    ],
    [
      "path",
      {
        "d": "M 18.31 14.53 C 9.87 15.50, 2.00 5.16, 21.44 5.01"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 15.98 L 5.82 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 5.86 L 4.66 9.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 2.54 Q 19.41 21.22 14.05 16.02"
      }
    ]
  ]
};

export const CarnoRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.17 7.79 C 21.98 6.60, 4.22 5.95, 11.00 12.53" />
      <path d="M 18.31 14.53 C 9.87 15.50, 2.00 5.16, 21.44 5.01" />
      <path d="M 19.56 15.98 L 5.82 21.48" />
      <path d="M 18.43 5.86 L 4.66 9.62" />
      <path d="M 20.49 2.54 Q 19.41 21.22 14.05 16.02" />
      {children}
    </svg>
  );
});

export default CarnoRetire;
