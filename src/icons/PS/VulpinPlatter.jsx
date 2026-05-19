import React from 'react';

export const iconData = {
  "id": "VulpinPlatter",
  "name": "VulpinPlatter",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.39 12.00 a 8.61 8.61 0 1 0 17.23 0 a 8.61 8.61 0 1 0 -17.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 9.13 a 8.12 2.436477527368979 0 1 0 16.24 0 a 8.12 2.436477527368979 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 14.87 a 8.12 2.436477527368979 0 1 0 16.24 0 a 8.12 2.436477527368979 0 1 0 -16.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.39 A 2 2 0 0 0 12.00 20.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.39 A 2 2 0 0 1 12.00 20.61"
      }
    ]
  ]
};

export const VulpinPlatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.39 12.00 a 8.61 8.61 0 1 0 17.23 0 a 8.61 8.61 0 1 0 -17.23 0" />
      <path d="M 3.88 9.13 a 8.12 2.436477527368979 0 1 0 16.24 0 a 8.12 2.436477527368979 0 1 0 -16.24 0" />
      <path d="M 3.88 14.87 a 8.12 2.436477527368979 0 1 0 16.24 0 a 8.12 2.436477527368979 0 1 0 -16.24 0" />
      <path d="M 12.00 3.39 A 2 2 0 0 0 12.00 20.61" />
      <path d="M 12.00 3.39 A 2 2 0 0 1 12.00 20.61" />
      {children}
    </svg>
  );
});

export default VulpinPlatter;
