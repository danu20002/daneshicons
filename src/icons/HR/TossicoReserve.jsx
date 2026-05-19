import React from 'react';

export const iconData = {
  "id": "TossicoReserve",
  "name": "TossicoReserve",
  "category": "HR",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 12.00 a 9.76 9.76 0 1 0 19.53 0 a 9.76 9.76 0 1 0 -19.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 7.12 a 8.46 2.536638194304731 0 1 0 16.91 0 a 8.46 2.536638194304731 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.24 12.00 a 9.76 2.929057488637045 0 1 0 19.53 0 a 9.76 2.929057488637045 0 1 0 -19.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 16.88 a 8.46 2.536638194304731 0 1 0 16.91 0 a 8.46 2.536638194304731 0 1 0 -16.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.24 A 2 2 0 0 0 12.00 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.24 A 2 2 0 0 1 12.00 21.76"
      }
    ]
  ]
};

export const TossicoReserve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 12.00 a 9.76 9.76 0 1 0 19.53 0 a 9.76 9.76 0 1 0 -19.53 0" />
      <path d="M 3.54 7.12 a 8.46 2.536638194304731 0 1 0 16.91 0 a 8.46 2.536638194304731 0 1 0 -16.91 0" />
      <path d="M 2.24 12.00 a 9.76 2.929057488637045 0 1 0 19.53 0 a 9.76 2.929057488637045 0 1 0 -19.53 0" />
      <path d="M 3.54 16.88 a 8.46 2.536638194304731 0 1 0 16.91 0 a 8.46 2.536638194304731 0 1 0 -16.91 0" />
      <path d="M 12.00 2.24 A 2 2 0 0 0 12.00 21.76" />
      <path d="M 12.00 2.24 A 2 2 0 0 1 12.00 21.76" />
      {children}
    </svg>
  );
});

export default TossicoReserve;
