import React from 'react';

export const iconData = {
  "id": "XenicoTomato",
  "name": "XenicoTomato",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 12.00 a 2.15 2.15 0 1 0 4.30 0 a 2.15 2.15 0 1 0 -4.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 12.00 a 6.39 6.39 0 1 0 12.78 0 a 6.39 6.39 0 1 0 -12.78 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const XenicoTomato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 12.00 a 2.15 2.15 0 1 0 4.30 0 a 2.15 2.15 0 1 0 -4.30 0" />
      <path d="M 5.61 12.00 a 6.39 6.39 0 1 0 12.78 0 a 6.39 6.39 0 1 0 -12.78 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default XenicoTomato;
