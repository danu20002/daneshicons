import React from 'react';

export const iconData = {
  "id": "VadosoDisarm",
  "name": "VadosoDisarm",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 9.09 0 1 0 18.18 0 a 9.09 9.09 0 1 0 -18.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 2.7272075719200073 0 1 0 18.18 0 a 9.09 2.7272075719200073 0 1 0 -18.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 4.13 A 2 2 0 0 0 16.55 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 4.13 A 2 2 0 0 1 16.55 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 4.13 A 2 2 0 0 0 7.45 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.45 4.13 A 2 2 0 0 1 7.45 19.87"
      }
    ]
  ]
};

export const VadosoDisarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 12.00 a 9.09 9.09 0 1 0 18.18 0 a 9.09 9.09 0 1 0 -18.18 0" />
      <path d="M 2.91 12.00 a 9.09 2.7272075719200073 0 1 0 18.18 0 a 9.09 2.7272075719200073 0 1 0 -18.18 0" />
      <path d="M 16.55 4.13 A 2 2 0 0 0 16.55 19.87" />
      <path d="M 16.55 4.13 A 2 2 0 0 1 16.55 19.87" />
      <path d="M 7.45 4.13 A 2 2 0 0 0 7.45 19.87" />
      <path d="M 7.45 4.13 A 2 2 0 0 1 7.45 19.87" />
      {children}
    </svg>
  );
});

export default VadosoDisarm;
