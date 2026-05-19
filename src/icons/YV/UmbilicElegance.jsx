import React from 'react';

export const iconData = {
  "id": "UmbilicElegance",
  "name": "UmbilicElegance",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.73 12.00 a 4.27 4.27 0 1 0 8.55 0 a 4.27 4.27 0 1 0 -8.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 12.00 a 6.20 6.20 0 1 0 12.40 0 a 6.20 6.20 0 1 0 -12.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.60 0 a 8.30 8.30 0 1 0 -16.60 0"
      }
    ]
  ]
};

export const UmbilicElegance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.90 0 a 2.45 2.45 0 1 0 -4.90 0" stroke-dasharray="6 3" />
      <path d="M 7.73 12.00 a 4.27 4.27 0 1 0 8.55 0 a 4.27 4.27 0 1 0 -8.55 0" />
      <path d="M 5.80 12.00 a 6.20 6.20 0 1 0 12.40 0 a 6.20 6.20 0 1 0 -12.40 0" />
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.60 0 a 8.30 8.30 0 1 0 -16.60 0" />
      {children}
    </svg>
  );
});

export default UmbilicElegance;
