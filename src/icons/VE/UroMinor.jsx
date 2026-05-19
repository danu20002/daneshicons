import React from 'react';

export const iconData = {
  "id": "UroMinor",
  "name": "UroMinor",
  "category": "VE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 12.00 a 4.21 4.21 0 1 0 8.41 0 a 4.21 4.21 0 1 0 -8.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 0 12.46 0 a 6.23 6.23 0 1 0 -12.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 8.01 0 1 0 16.01 0 a 8.01 8.01 0 1 0 -16.01 0"
      }
    ]
  ]
};

export const UroMinor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 12.00 a 2.21 2.21 0 1 0 4.42 0 a 2.21 2.21 0 1 0 -4.42 0" stroke-dasharray="4 3" />
      <path d="M 7.79 12.00 a 4.21 4.21 0 1 0 8.41 0 a 4.21 4.21 0 1 0 -8.41 0" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 0 12.46 0 a 6.23 6.23 0 1 0 -12.46 0" />
      <path d="M 3.99 12.00 a 8.01 8.01 0 1 0 16.01 0 a 8.01 8.01 0 1 0 -16.01 0" />
      {children}
    </svg>
  );
});

export default UroMinor;
