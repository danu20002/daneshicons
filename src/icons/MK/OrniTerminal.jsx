import React from 'react';

export const iconData = {
  "id": "OrniTerminal",
  "name": "OrniTerminal",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.15 12.00 a 4.85 4.85 0 1 0 9.71 0 a 4.85 4.85 0 1 0 -9.71 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const OrniTerminal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0" stroke-dasharray="4 2" />
      <path d="M 7.15 12.00 a 4.85 4.85 0 1 0 9.71 0 a 4.85 4.85 0 1 0 -9.71 0" stroke-dasharray="5 2" />
      <path d="M 4.21 12.00 a 7.79 7.79 0 1 0 15.58 0 a 7.79 7.79 0 1 0 -15.58 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default OrniTerminal;
