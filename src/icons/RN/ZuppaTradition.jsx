import React from 'react';

export const iconData = {
  "id": "ZuppaTradition",
  "name": "ZuppaTradition",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.33 12.00 a 3.67 3.67 0 1 0 7.33 0 a 3.67 3.67 0 1 0 -7.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 0 10.67 0 a 5.34 5.34 0 1 0 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0"
      }
    ]
  ]
};

export const ZuppaTradition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.50 12.00 a 2.50 2.50 0 1 0 5.00 0 a 2.50 2.50 0 1 0 -5.00 0" />
      <path d="M 8.33 12.00 a 3.67 3.67 0 1 0 7.33 0 a 3.67 3.67 0 1 0 -7.33 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 0 10.67 0 a 5.34 5.34 0 1 0 -10.67 0" />
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0" stroke-dasharray="5 3" />
      <path d="M 3.23 12.00 a 8.77 8.77 0 1 0 17.54 0 a 8.77 8.77 0 1 0 -17.54 0" />
      {children}
    </svg>
  );
});

export default ZuppaTradition;
