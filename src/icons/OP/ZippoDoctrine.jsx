import React from 'react';

export const iconData = {
  "id": "ZippoDoctrine",
  "name": "ZippoDoctrine",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 12.00 a 4.96 4.96 0 1 0 9.92 0 a 4.96 4.96 0 1 0 -9.92 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.31 0 a 7.66 7.66 0 1 0 -15.31 0"
      }
    ]
  ]
};

export const ZippoDoctrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.66 0 a 2.33 2.33 0 1 0 -4.66 0" />
      <path d="M 7.04 12.00 a 4.96 4.96 0 1 0 9.92 0 a 4.96 4.96 0 1 0 -9.92 0" stroke-dasharray="3 3" />
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.31 0 a 7.66 7.66 0 1 0 -15.31 0" />
      {children}
    </svg>
  );
});

export default ZippoDoctrine;
