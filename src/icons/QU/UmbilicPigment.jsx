import React from 'react';

export const iconData = {
  "id": "UmbilicPigment",
  "name": "UmbilicPigment",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.55 12.00 a 4.45 4.45 0 1 0 8.89 0 a 4.45 4.45 0 1 0 -8.89 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.62 12.00 a 6.38 6.38 0 1 0 12.76 0 a 6.38 6.38 0 1 0 -12.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 12.00 a 8.08 8.08 0 1 0 16.16 0 a 8.08 8.08 0 1 0 -16.16 0"
      }
    ]
  ]
};

export const UmbilicPigment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 12.00 a 2.34 2.34 0 1 0 4.68 0 a 2.34 2.34 0 1 0 -4.68 0" />
      <path d="M 7.55 12.00 a 4.45 4.45 0 1 0 8.89 0 a 4.45 4.45 0 1 0 -8.89 0" stroke-dasharray="3 2" />
      <path d="M 5.62 12.00 a 6.38 6.38 0 1 0 12.76 0 a 6.38 6.38 0 1 0 -12.76 0" />
      <path d="M 3.92 12.00 a 8.08 8.08 0 1 0 16.16 0 a 8.08 8.08 0 1 0 -16.16 0" />
      {children}
    </svg>
  );
});

export default UmbilicPigment;
