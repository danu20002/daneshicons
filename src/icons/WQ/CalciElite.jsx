import React from 'react';

export const iconData = {
  "id": "CalciElite",
  "name": "CalciElite",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0",
        "stroke-dasharray": "3 1"
      }
    ],
    [
      "path",
      {
        "d": "M 7.82 12.00 a 4.18 4.18 0 1 0 8.36 0 a 4.18 4.18 0 1 0 -8.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0"
      }
    ]
  ]
};

export const CalciElite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.70 0 a 2.35 2.35 0 1 0 -4.70 0" stroke-dasharray="3 1" />
      <path d="M 7.82 12.00 a 4.18 4.18 0 1 0 8.36 0 a 4.18 4.18 0 1 0 -8.36 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.45 0 a 6.22 6.22 0 1 0 -12.45 0" stroke-dasharray="5 2" />
      <path d="M 3.91 12.00 a 8.09 8.09 0 1 0 16.18 0 a 8.09 8.09 0 1 0 -16.18 0" />
      {children}
    </svg>
  );
});

export default CalciElite;
