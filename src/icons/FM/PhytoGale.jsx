import React from 'react';

export const iconData = {
  "id": "PhytoGale",
  "name": "PhytoGale",
  "category": "FM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.25 0 a 8.63 8.63 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 2.587604443402961 0 1 0 17.25 0 a 8.63 2.587604443402961 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.31 4.53 A 2 2 0 0 0 16.31 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 16.31 4.53 A 2 2 0 0 1 16.31 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.53 A 2 2 0 0 0 7.69 19.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 4.53 A 2 2 0 0 1 7.69 19.47"
      }
    ]
  ]
};

export const PhytoGale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.25 0 a 8.63 8.63 0 1 0 -17.25 0" />
      <path d="M 3.37 12.00 a 8.63 2.587604443402961 0 1 0 17.25 0 a 8.63 2.587604443402961 0 1 0 -17.25 0" />
      <path d="M 16.31 4.53 A 2 2 0 0 0 16.31 19.47" />
      <path d="M 16.31 4.53 A 2 2 0 0 1 16.31 19.47" />
      <path d="M 7.69 4.53 A 2 2 0 0 0 7.69 19.47" />
      <path d="M 7.69 4.53 A 2 2 0 0 1 7.69 19.47" />
      {children}
    </svg>
  );
});

export default PhytoGale;
