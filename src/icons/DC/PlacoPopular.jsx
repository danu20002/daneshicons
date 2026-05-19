import React from 'react';

export const iconData = {
  "id": "PlacoPopular",
  "name": "PlacoPopular",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 12.00 L 19.78 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.22 L 12.00 19.78"
      }
    ],
    [
      "path",
      {
        "d": "M 1.96 12.00 a 10.04 10.04 0 1 0 20.09 0 a 10.04 10.04 0 1 0 -20.09 0"
      }
    ]
  ]
};

export const PlacoPopular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 12.00 L 19.78 12.00" />
      <path d="M 12.00 4.22 L 12.00 19.78" />
      <path d="M 1.96 12.00 a 10.04 10.04 0 1 0 20.09 0 a 10.04 10.04 0 1 0 -20.09 0" />
      {children}
    </svg>
  );
});

export default PlacoPopular;
