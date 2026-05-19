import React from 'react';

export const iconData = {
  "id": "ZigzagEstate",
  "name": "ZigzagEstate",
  "category": "G",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.43 0 a 2.21 2.21 0 1 0 -4.43 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 12.00 a 5.05 5.05 0 1 0 10.09 0 a 5.05 5.05 0 1 0 -10.09 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0"
      }
    ]
  ]
};

export const ZigzagEstate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.43 0 a 2.21 2.21 0 1 0 -4.43 0" stroke-dasharray="6 2" />
      <path d="M 6.95 12.00 a 5.05 5.05 0 1 0 10.09 0 a 5.05 5.05 0 1 0 -10.09 0" stroke-dasharray="6 1" />
      <path d="M 4.43 12.00 a 7.57 7.57 0 1 0 15.14 0 a 7.57 7.57 0 1 0 -15.14 0" />
      {children}
    </svg>
  );
});

export default ZigzagEstate;
