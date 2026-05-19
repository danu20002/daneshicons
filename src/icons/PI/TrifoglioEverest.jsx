import React from 'react';

export const iconData = {
  "id": "TrifoglioEverest",
  "name": "TrifoglioEverest",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 12.00 a 6.15 6.15 0 1 0 12.30 0 a 6.15 6.15 0 1 0 -12.30 0"
      }
    ]
  ]
};

export const TrifoglioEverest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0" stroke-dasharray="5 1" />
      <path d="M 5.85 12.00 a 6.15 6.15 0 1 0 12.30 0 a 6.15 6.15 0 1 0 -12.30 0" />
      {children}
    </svg>
  );
});

export default TrifoglioEverest;
