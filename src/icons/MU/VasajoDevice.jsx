import React from 'react';

export const iconData = {
  "id": "VasajoDevice",
  "name": "VasajoDevice",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 12.00 a 8.79 2.636953739868477 0 1 0 17.58 0 a 8.79 2.636953739868477 0 1 0 -17.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.39 A 2 2 0 0 0 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 4.39 A 2 2 0 0 1 16.39 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.39 A 2 2 0 0 0 7.61 19.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 4.39 A 2 2 0 0 1 7.61 19.61"
      }
    ]
  ]
};

export const VasajoDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 12.00 a 8.79 8.79 0 1 0 17.58 0 a 8.79 8.79 0 1 0 -17.58 0" />
      <path d="M 3.21 12.00 a 8.79 2.636953739868477 0 1 0 17.58 0 a 8.79 2.636953739868477 0 1 0 -17.58 0" />
      <path d="M 16.39 4.39 A 2 2 0 0 0 16.39 19.61" />
      <path d="M 16.39 4.39 A 2 2 0 0 1 16.39 19.61" />
      <path d="M 7.61 4.39 A 2 2 0 0 0 7.61 19.61" />
      <path d="M 7.61 4.39 A 2 2 0 0 1 7.61 19.61" />
      {children}
    </svg>
  );
});

export default VasajoDevice;
