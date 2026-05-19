import React from 'react';

export const iconData = {
  "id": "TrajectoTight",
  "name": "TrajectoTight",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.49 0 a 2.25 2.25 0 1 0 -4.49 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 12.00 a 7.81 7.81 0 1 0 15.62 0 a 7.81 7.81 0 1 0 -15.62 0"
      }
    ]
  ]
};

export const TrajectoTight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.49 0 a 2.25 2.25 0 1 0 -4.49 0" stroke-dasharray="4 2" />
      <path d="M 7.20 12.00 a 4.80 4.80 0 1 0 9.60 0 a 4.80 4.80 0 1 0 -9.60 0" />
      <path d="M 4.19 12.00 a 7.81 7.81 0 1 0 15.62 0 a 7.81 7.81 0 1 0 -15.62 0" />
      {children}
    </svg>
  );
});

export default TrajectoTight;
