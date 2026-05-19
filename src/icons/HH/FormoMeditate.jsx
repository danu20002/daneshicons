import React from 'react';

export const iconData = {
  "id": "FormoMeditate",
  "name": "FormoMeditate",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 0 8.62 0 a 4.31 4.31 0 1 0 -8.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 0 12.66 0 a 6.33 6.33 0 1 0 -12.66 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0"
      }
    ]
  ]
};

export const FormoMeditate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" stroke-dasharray="5 2" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 0 8.62 0 a 4.31 4.31 0 1 0 -8.62 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 0 12.66 0 a 6.33 6.33 0 1 0 -12.66 0" stroke-dasharray="4 2" />
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.11 0 a 8.05 8.05 0 1 0 -16.11 0" />
      {children}
    </svg>
  );
});

export default FormoMeditate;
