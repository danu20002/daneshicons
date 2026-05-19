import React from 'react';

export const iconData = {
  "id": "PhylloCave",
  "name": "PhylloCave",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 12.00 a 4.44 4.44 0 1 0 8.88 0 a 4.44 4.44 0 1 0 -8.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.92 0 a 6.46 6.46 0 1 0 -12.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 12.00 a 8.49 8.49 0 1 0 16.99 0 a 8.49 8.49 0 1 0 -16.99 0",
        "stroke-dasharray": "2 2"
      }
    ]
  ]
};

export const PhylloCave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.51 0 a 2.25 2.25 0 1 0 -4.51 0" />
      <path d="M 7.56 12.00 a 4.44 4.44 0 1 0 8.88 0 a 4.44 4.44 0 1 0 -8.88 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.92 0 a 6.46 6.46 0 1 0 -12.92 0" />
      <path d="M 3.51 12.00 a 8.49 8.49 0 1 0 16.99 0 a 8.49 8.49 0 1 0 -16.99 0" stroke-dasharray="2 2" />
      {children}
    </svg>
  );
});

export default PhylloCave;
