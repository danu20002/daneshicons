import React from 'react';

export const iconData = {
  "id": "GastroMart",
  "name": "GastroMart",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.00 12.00 L 17.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.00 12.00 L 13.10 9.66"
      }
    ],
    [
      "path",
      {
        "d": "M 17.00 12.00 L 13.10 14.34"
      }
    ]
  ]
};

export const GastroMart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.00 12.00 L 17.00 12.00" />
      <path d="M 17.00 12.00 L 13.10 9.66" />
      <path d="M 17.00 12.00 L 13.10 14.34" />
      {children}
    </svg>
  );
});

export default GastroMart;
