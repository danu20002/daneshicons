import React from 'react';

export const iconData = {
  "id": "ZimoNear",
  "name": "ZimoNear",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.63 0 a 7.82 7.82 0 1 0 -15.63 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const ZimoNear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0" stroke-dasharray="4 3" />
      <path d="M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0" />
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.63 0 a 7.82 7.82 0 1 0 -15.63 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default ZimoNear;
