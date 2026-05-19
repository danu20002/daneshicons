import React from 'react';

export const iconData = {
  "id": "VinoPromo",
  "name": "VinoPromo",
  "category": "WH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 12.00 a 9.25 9.25 0 1 0 18.51 0 a 9.25 9.25 0 1 0 -18.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 8.92 a 8.72 2.617494430331075 0 1 0 17.45 0 a 8.72 2.617494430331075 0 1 0 -17.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 15.08 a 8.72 2.617494430331075 0 1 0 17.45 0 a 8.72 2.617494430331075 0 1 0 -17.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.75 A 2 2 0 0 0 12.00 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.75 A 2 2 0 0 1 12.00 21.25"
      }
    ]
  ]
};

export const VinoPromo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 12.00 a 9.25 9.25 0 1 0 18.51 0 a 9.25 9.25 0 1 0 -18.51 0" />
      <path d="M 3.28 8.92 a 8.72 2.617494430331075 0 1 0 17.45 0 a 8.72 2.617494430331075 0 1 0 -17.45 0" />
      <path d="M 3.28 15.08 a 8.72 2.617494430331075 0 1 0 17.45 0 a 8.72 2.617494430331075 0 1 0 -17.45 0" />
      <path d="M 12.00 2.75 A 2 2 0 0 0 12.00 21.25" />
      <path d="M 12.00 2.75 A 2 2 0 0 1 12.00 21.25" />
      {children}
    </svg>
  );
});

export default VinoPromo;
