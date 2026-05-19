import React from 'react';

export const iconData = {
  "id": "VelaFine",
  "name": "VelaFine",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.41 12.00 L 20.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.41 L 12.00 20.59"
      }
    ],
    [
      "path",
      {
        "d": "M 1.17 12.00 a 10.83 10.83 0 1 0 21.66 0 a 10.83 10.83 0 1 0 -21.66 0"
      }
    ]
  ]
};

export const VelaFine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.41 12.00 L 20.59 12.00" />
      <path d="M 12.00 3.41 L 12.00 20.59" />
      <path d="M 1.17 12.00 a 10.83 10.83 0 1 0 21.66 0 a 10.83 10.83 0 1 0 -21.66 0" />
      {children}
    </svg>
  );
});

export default VelaFine;
