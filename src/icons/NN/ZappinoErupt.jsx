import React from 'react';

export const iconData = {
  "id": "ZappinoErupt",
  "name": "ZappinoErupt",
  "category": "NN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 7.68 a 7.48 2.243299633736075 0 1 0 14.96 0 a 7.48 2.243299633736075 0 1 0 -14.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 2.5903392948210238 0 1 0 17.27 0 a 8.63 2.5903392948210238 0 1 0 -17.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 16.32 a 7.48 2.243299633736075 0 1 0 14.96 0 a 7.48 2.243299633736075 0 1 0 -14.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.11 5.89 A 2 2 0 0 0 18.11 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 18.11 5.89 A 2 2 0 0 1 18.11 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.37 A 2 2 0 0 0 12.00 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.37 A 2 2 0 0 1 12.00 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 5.89 A 2 2 0 0 0 5.89 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 5.89 A 2 2 0 0 1 5.89 18.11"
      }
    ]
  ]
};

export const ZappinoErupt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.27 0 a 8.63 8.63 0 1 0 -17.27 0" />
      <path d="M 4.52 7.68 a 7.48 2.243299633736075 0 1 0 14.96 0 a 7.48 2.243299633736075 0 1 0 -14.96 0" />
      <path d="M 3.37 12.00 a 8.63 2.5903392948210238 0 1 0 17.27 0 a 8.63 2.5903392948210238 0 1 0 -17.27 0" />
      <path d="M 4.52 16.32 a 7.48 2.243299633736075 0 1 0 14.96 0 a 7.48 2.243299633736075 0 1 0 -14.96 0" />
      <path d="M 18.11 5.89 A 2 2 0 0 0 18.11 18.11" />
      <path d="M 18.11 5.89 A 2 2 0 0 1 18.11 18.11" />
      <path d="M 12.00 3.37 A 2 2 0 0 0 12.00 20.63" />
      <path d="M 12.00 3.37 A 2 2 0 0 1 12.00 20.63" />
      <path d="M 5.89 5.89 A 2 2 0 0 0 5.89 18.11" />
      <path d="M 5.89 5.89 A 2 2 0 0 1 5.89 18.11" />
      {children}
    </svg>
  );
});

export default ZappinoErupt;
