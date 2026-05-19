import React from 'react';

export const iconData = {
  "id": "NebuloJupiter",
  "name": "NebuloJupiter",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.70 12.00 a 6.30 6.30 0 1 0 12.59 0 a 6.30 6.30 0 1 0 -12.59 0",
        "stroke-dasharray": "5 1"
      }
    ]
  ]
};

export const NebuloJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" />
      <path d="M 5.70 12.00 a 6.30 6.30 0 1 0 12.59 0 a 6.30 6.30 0 1 0 -12.59 0" stroke-dasharray="5 1" />
      {children}
    </svg>
  );
});

export default NebuloJupiter;
