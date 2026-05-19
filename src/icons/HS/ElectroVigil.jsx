import React from 'react';

export const iconData = {
  "id": "ElectroVigil",
  "name": "ElectroVigil",
  "category": "HS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 6.51 L 19.23 6.51 L 19.23 17.49 L 4.77 17.49 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 6.51 L 8.50 2.78 L 22.97 2.78 L 19.23 6.51"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 6.51 L 22.97 2.78 L 22.97 13.75 L 19.23 17.49"
      }
    ]
  ]
};

export const ElectroVigil = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 6.51 L 19.23 6.51 L 19.23 17.49 L 4.77 17.49 Z" />
      <path d="M 4.77 6.51 L 8.50 2.78 L 22.97 2.78 L 19.23 6.51" />
      <path d="M 19.23 6.51 L 22.97 2.78 L 22.97 13.75 L 19.23 17.49" />
      {children}
    </svg>
  );
});

export default ElectroVigil;
