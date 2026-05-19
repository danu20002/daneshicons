import React from 'react';

export const iconData = {
  "id": "VirgultoSoul",
  "name": "VirgultoSoul",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.72 12.00 L 18.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.72 L 12.00 18.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 7.61 L 16.39 16.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 16.39 L 16.39 7.61"
      }
    ],
    [
      "path",
      {
        "d": "M 1.61 12.00 a 10.39 10.39 0 1 0 20.78 0 a 10.39 10.39 0 1 0 -20.78 0"
      }
    ]
  ]
};

export const VirgultoSoul = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.72 12.00 L 18.28 12.00" />
      <path d="M 12.00 5.72 L 12.00 18.28" />
      <path d="M 7.61 7.61 L 16.39 16.39" />
      <path d="M 7.61 16.39 L 16.39 7.61" />
      <path d="M 1.61 12.00 a 10.39 10.39 0 1 0 20.78 0 a 10.39 10.39 0 1 0 -20.78 0" />
      {children}
    </svg>
  );
});

export default VirgultoSoul;
