import React from 'react';

export const iconData = {
  "id": "SymbioLuggage",
  "name": "SymbioLuggage",
  "category": "VJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.93 12.00 L 20.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 L 12.00 20.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 6.35 L 17.65 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 6.35 17.65 L 17.65 6.35"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0"
      }
    ]
  ]
};

export const SymbioLuggage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.93 12.00 L 20.07 12.00" />
      <path d="M 12.00 3.93 L 12.00 20.07" />
      <path d="M 6.35 6.35 L 17.65 17.65" />
      <path d="M 6.35 17.65 L 17.65 6.35" />
      <path d="M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0" />
      {children}
    </svg>
  );
});

export default SymbioLuggage;
