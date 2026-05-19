import React from 'react';

export const iconData = {
  "id": "GastroGarrison",
  "name": "GastroGarrison",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 7.00 L 20.34 7.00 L 20.34 17.00 L 3.66 17.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 7.00 L 7.24 3.42 L 23.92 3.42 L 20.34 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 7.00 L 23.92 3.42 L 23.92 13.42 L 20.34 17.00"
      }
    ]
  ]
};

export const GastroGarrison = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 7.00 L 20.34 7.00 L 20.34 17.00 L 3.66 17.00 Z" />
      <path d="M 3.66 7.00 L 7.24 3.42 L 23.92 3.42 L 20.34 7.00" />
      <path d="M 20.34 7.00 L 23.92 3.42 L 23.92 13.42 L 20.34 17.00" />
      {children}
    </svg>
  );
});

export default GastroGarrison;
