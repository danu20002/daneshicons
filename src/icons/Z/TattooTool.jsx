import React from 'react';

export const iconData = {
  "id": "TattooTool",
  "name": "TattooTool",
  "category": "Z",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.09 0 a 4.04 4.04 0 1 0 -8.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.89 12.00 a 6.11 6.11 0 1 0 12.22 0 a 6.11 6.11 0 1 0 -12.22 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.30 0 a 8.15 8.15 0 1 0 -16.30 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const TattooTool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 12.00 a 2.09 2.09 0 1 0 4.18 0 a 2.09 2.09 0 1 0 -4.18 0" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.09 0 a 4.04 4.04 0 1 0 -8.09 0" />
      <path d="M 5.89 12.00 a 6.11 6.11 0 1 0 12.22 0 a 6.11 6.11 0 1 0 -12.22 0" stroke-dasharray="2 2" />
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.30 0 a 8.15 8.15 0 1 0 -16.30 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default TattooTool;
