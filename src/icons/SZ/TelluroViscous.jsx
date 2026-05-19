import React from 'react';

export const iconData = {
  "id": "TelluroViscous",
  "name": "TelluroViscous",
  "category": "SZ",
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
        "d": "M 7.86 12.00 a 4.14 4.14 0 1 0 8.27 0 a 4.14 4.14 0 1 0 -8.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const TelluroViscous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.86 12.00 a 4.14 4.14 0 1 0 8.27 0 a 4.14 4.14 0 1 0 -8.27 0" />
      <path d="M 5.54 12.00 a 6.46 6.46 0 1 0 12.91 0 a 6.46 6.46 0 1 0 -12.91 0" />
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.54 0 a 8.27 8.27 0 1 0 -16.54 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default TelluroViscous;
