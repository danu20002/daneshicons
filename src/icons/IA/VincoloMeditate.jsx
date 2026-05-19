import React from 'react';

export const iconData = {
  "id": "VincoloMeditate",
  "name": "VincoloMeditate",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.91 0 a 2.45 2.45 0 1 0 -4.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 12.00 a 3.99 3.99 0 1 0 7.99 0 a 3.99 3.99 0 1 0 -7.99 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.31 12.00 a 5.69 5.69 0 1 0 11.39 0 a 5.69 5.69 0 1 0 -11.39 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.16 12.00 a 6.84 6.84 0 1 0 13.67 0 a 6.84 6.84 0 1 0 -13.67 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0"
      }
    ]
  ]
};

export const VincoloMeditate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.91 0 a 2.45 2.45 0 1 0 -4.91 0" />
      <path d="M 8.01 12.00 a 3.99 3.99 0 1 0 7.99 0 a 3.99 3.99 0 1 0 -7.99 0" stroke-dasharray="3 2" />
      <path d="M 6.31 12.00 a 5.69 5.69 0 1 0 11.39 0 a 5.69 5.69 0 1 0 -11.39 0" stroke-dasharray="3 1" />
      <path d="M 5.16 12.00 a 6.84 6.84 0 1 0 13.67 0 a 6.84 6.84 0 1 0 -13.67 0" stroke-dasharray="3 3" />
      <path d="M 3.31 12.00 a 8.69 8.69 0 1 0 17.38 0 a 8.69 8.69 0 1 0 -17.38 0" />
      {children}
    </svg>
  );
});

export default VincoloMeditate;
