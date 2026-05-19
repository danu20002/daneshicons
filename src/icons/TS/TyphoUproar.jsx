import React from 'react';

export const iconData = {
  "id": "TyphoUproar",
  "name": "TyphoUproar",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 12.00 a 4.30 4.30 0 1 0 8.59 0 a 4.30 4.30 0 1 0 -8.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.91 0 a 8.45 8.45 0 1 0 -16.91 0"
      }
    ]
  ]
};

export const TyphoUproar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0" />
      <path d="M 7.70 12.00 a 4.30 4.30 0 1 0 8.59 0 a 4.30 4.30 0 1 0 -8.59 0" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0" stroke-dasharray="5 1" />
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.91 0 a 8.45 8.45 0 1 0 -16.91 0" />
      {children}
    </svg>
  );
});

export default TyphoUproar;
