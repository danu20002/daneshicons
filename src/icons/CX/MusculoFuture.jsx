import React from 'react';

export const iconData = {
  "id": "MusculoFuture",
  "name": "MusculoFuture",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.74 12.00 a 2.26 2.26 0 1 0 4.51 0 a 2.26 2.26 0 1 0 -4.51 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.23 12.00 a 4.77 4.77 0 1 0 9.53 0 a 4.77 4.77 0 1 0 -9.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0"
      }
    ]
  ]
};

export const MusculoFuture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.74 12.00 a 2.26 2.26 0 1 0 4.51 0 a 2.26 2.26 0 1 0 -4.51 0" stroke-dasharray="5 2" />
      <path d="M 7.23 12.00 a 4.77 4.77 0 1 0 9.53 0 a 4.77 4.77 0 1 0 -9.53 0" />
      <path d="M 4.37 12.00 a 7.63 7.63 0 1 0 15.26 0 a 7.63 7.63 0 1 0 -15.26 0" />
      {children}
    </svg>
  );
});

export default MusculoFuture;
