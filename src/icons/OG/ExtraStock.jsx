import React from 'react';

export const iconData = {
  "id": "ExtraStock",
  "name": "ExtraStock",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 12.00 a 9.00 9.00 0 1 0 18.01 0 a 9.00 9.00 0 1 0 -18.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 12.00 a 9.00 2.701126080751419 0 1 0 18.01 0 a 9.00 2.701126080751419 0 1 0 -18.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.00 A 2 2 0 0 0 12.00 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.00 A 2 2 0 0 1 12.00 21.00"
      }
    ]
  ]
};

export const ExtraStock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 12.00 a 9.00 9.00 0 1 0 18.01 0 a 9.00 9.00 0 1 0 -18.01 0" />
      <path d="M 3.00 12.00 a 9.00 2.701126080751419 0 1 0 18.01 0 a 9.00 2.701126080751419 0 1 0 -18.01 0" />
      <path d="M 12.00 3.00 A 2 2 0 0 0 12.00 21.00" />
      <path d="M 12.00 3.00 A 2 2 0 0 1 12.00 21.00" />
      {children}
    </svg>
  );
});

export default ExtraStock;
