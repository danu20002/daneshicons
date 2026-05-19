import React from 'react';

export const iconData = {
  "id": "SettoFort",
  "name": "SettoFort",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.77 12.00 L 18.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.77 L 12.00 18.23"
      }
    ],
    [
      "path",
      {
        "d": "M 1.08 12.00 a 10.92 10.92 0 1 0 21.83 0 a 10.92 10.92 0 1 0 -21.83 0"
      }
    ]
  ]
};

export const SettoFort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.77 12.00 L 18.23 12.00" />
      <path d="M 12.00 5.77 L 12.00 18.23" />
      <path d="M 1.08 12.00 a 10.92 10.92 0 1 0 21.83 0 a 10.92 10.92 0 1 0 -21.83 0" />
      {children}
    </svg>
  );
});

export default SettoFort;
