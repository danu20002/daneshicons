import React from 'react';

export const iconData = {
  "id": "CelerMature",
  "name": "CelerMature",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.89 0 a 2.45 2.45 0 1 0 -4.89 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.87 12.00 a 5.13 5.13 0 1 0 10.27 0 a 5.13 5.13 0 1 0 -10.27 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.40 12.00 a 7.60 7.60 0 1 0 15.21 0 a 7.60 7.60 0 1 0 -15.21 0",
        "stroke-dasharray": "5 2"
      }
    ]
  ]
};

export const CelerMature = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.89 0 a 2.45 2.45 0 1 0 -4.89 0" stroke-dasharray="4 2" />
      <path d="M 6.87 12.00 a 5.13 5.13 0 1 0 10.27 0 a 5.13 5.13 0 1 0 -10.27 0" stroke-dasharray="4 3" />
      <path d="M 4.40 12.00 a 7.60 7.60 0 1 0 15.21 0 a 7.60 7.60 0 1 0 -15.21 0" stroke-dasharray="5 2" />
      {children}
    </svg>
  );
});

export default CelerMature;
