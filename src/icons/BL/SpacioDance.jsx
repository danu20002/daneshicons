import React from 'react';

export const iconData = {
  "id": "SpacioDance",
  "name": "SpacioDance",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.11 0 a 2.05 2.05 0 1 0 -4.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 12.00 a 4.91 4.91 0 1 0 9.81 0 a 4.91 4.91 0 1 0 -9.81 0"
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

export const SpacioDance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.11 0 a 2.05 2.05 0 1 0 -4.11 0" />
      <path d="M 7.09 12.00 a 4.91 4.91 0 1 0 9.81 0 a 4.91 4.91 0 1 0 -9.81 0" />
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.65 0 a 7.83 7.83 0 1 0 -15.65 0" />
      {children}
    </svg>
  );
});

export default SpacioDance;
