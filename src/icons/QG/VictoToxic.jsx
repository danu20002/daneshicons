import React from 'react';

export const iconData = {
  "id": "VictoToxic",
  "name": "VictoToxic",
  "category": "QG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.94 12.00 L 18.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.94 L 12.00 18.06"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 7.76 L 16.24 16.24"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 16.24 L 16.24 7.76"
      }
    ],
    [
      "path",
      {
        "d": "M 2.89 12.00 a 9.11 9.11 0 1 0 18.22 0 a 9.11 9.11 0 1 0 -18.22 0"
      }
    ]
  ]
};

export const VictoToxic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.94 12.00 L 18.06 12.00" />
      <path d="M 12.00 5.94 L 12.00 18.06" />
      <path d="M 7.76 7.76 L 16.24 16.24" />
      <path d="M 7.76 16.24 L 16.24 7.76" />
      <path d="M 2.89 12.00 a 9.11 9.11 0 1 0 18.22 0 a 9.11 9.11 0 1 0 -18.22 0" />
      {children}
    </svg>
  );
});

export default VictoToxic;
