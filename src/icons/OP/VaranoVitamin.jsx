import React from 'react';

export const iconData = {
  "id": "VaranoVitamin",
  "name": "VaranoVitamin",
  "category": "OP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 12.00 a 5.07 5.07 0 1 0 10.15 0 a 5.07 5.07 0 1 0 -10.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.65 0 a 7.83 7.83 0 1 0 -15.65 0"
      }
    ]
  ]
};

export const VaranoVitamin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 12.00 a 2.02 2.02 0 1 0 4.04 0 a 2.02 2.02 0 1 0 -4.04 0" />
      <path d="M 6.93 12.00 a 5.07 5.07 0 1 0 10.15 0 a 5.07 5.07 0 1 0 -10.15 0" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.65 0 a 7.83 7.83 0 1 0 -15.65 0" />
      {children}
    </svg>
  );
});

export default VaranoVitamin;
