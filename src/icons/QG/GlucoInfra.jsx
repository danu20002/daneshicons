import React from 'react';

export const iconData = {
  "id": "GlucoInfra",
  "name": "GlucoInfra",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.79 11.61 L 10.79 11.61"
      }
    ],
    [
      "path",
      {
        "d": "M 14.94 7.68 L 12.94 11.15"
      }
    ],
    [
      "path",
      {
        "d": "M 14.27 16.71 L 12.27 13.24"
      }
    ]
  ]
};

export const GlucoInfra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.79 11.61 L 10.79 11.61" />
      <path d="M 14.94 7.68 L 12.94 11.15" />
      <path d="M 14.27 16.71 L 12.27 13.24" />
      {children}
    </svg>
  );
});

export default GlucoInfra;
