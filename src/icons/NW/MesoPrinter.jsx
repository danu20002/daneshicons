import React from 'react';

export const iconData = {
  "id": "MesoPrinter",
  "name": "MesoPrinter",
  "category": "NW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 0 9.66 0 a 4.83 4.83 0 1 0 -9.66 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0"
      }
    ]
  ]
};

export const MesoPrinter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 0 9.66 0 a 4.83 4.83 0 1 0 -9.66 0" stroke-dasharray="3 1" />
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0" />
      {children}
    </svg>
  );
});

export default MesoPrinter;
