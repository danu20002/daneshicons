import React from 'react';

export const iconData = {
  "id": "DigiCauldron",
  "name": "DigiCauldron",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.83 8.47 Q 8.11 3.21 6.94 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.15 3.87 A 2.83 3.90 67 0 1 15.00 6.34"
      }
    ]
  ]
};

export const DigiCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.83 8.47 Q 8.11 3.21 6.94 7.78" />
      <path d="M 3.15 3.87 A 2.83 3.90 67 0 1 15.00 6.34" />
      {children}
    </svg>
  );
});

export default DigiCauldron;
