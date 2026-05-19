import React from 'react';

export const iconData = {
  "id": "VetroVitamin",
  "name": "VetroVitamin",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.81 12.00 a 4.19 4.19 0 1 0 8.38 0 a 4.19 4.19 0 1 0 -8.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 12.00 a 6.35 6.35 0 1 0 12.71 0 a 6.35 6.35 0 1 0 -12.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0"
      }
    ]
  ]
};

export const VetroVitamin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.46 0 a 2.23 2.23 0 1 0 -4.46 0" />
      <path d="M 7.81 12.00 a 4.19 4.19 0 1 0 8.38 0 a 4.19 4.19 0 1 0 -8.38 0" />
      <path d="M 5.65 12.00 a 6.35 6.35 0 1 0 12.71 0 a 6.35 6.35 0 1 0 -12.71 0" />
      <path d="M 3.77 12.00 a 8.23 8.23 0 1 0 16.45 0 a 8.23 8.23 0 1 0 -16.45 0" />
      {children}
    </svg>
  );
});

export default VetroVitamin;
