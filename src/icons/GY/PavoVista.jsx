import React from 'react';

export const iconData = {
  "id": "PavoVista",
  "name": "PavoVista",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 a 8.12 2.436288491031155 0 1 0 16.24 0 a 8.12 2.436288491031155 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.88 A 2 2 0 0 0 12.00 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.88 A 2 2 0 0 1 12.00 20.12"
      }
    ]
  ]
};

export const PavoVista = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 12.00 a 8.12 8.12 0 1 0 16.24 0 a 8.12 8.12 0 1 0 -16.24 0" />
      <path d="M 3.88 12.00 a 8.12 2.436288491031155 0 1 0 16.24 0 a 8.12 2.436288491031155 0 1 0 -16.24 0" />
      <path d="M 12.00 3.88 A 2 2 0 0 0 12.00 20.12" />
      <path d="M 12.00 3.88 A 2 2 0 0 1 12.00 20.12" />
      {children}
    </svg>
  );
});

export default PavoVista;
