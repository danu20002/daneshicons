import React from 'react';

export const iconData = {
  "id": "SymbioVariety",
  "name": "SymbioVariety",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.84 12.00 Q 16.19 13.36 19.16 17.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 17.20 Q 14.59 15.57 14.73 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 14.73 20.41 Q 12.00 16.41 9.27 20.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.27 20.41 Q 9.41 15.57 4.84 17.20"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 17.20 Q 7.81 13.36 3.16 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 12.00 Q 7.81 10.64 4.84 6.80"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 6.80 Q 9.41 8.43 9.27 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 9.27 3.59 Q 12.00 7.59 14.73 3.59"
      }
    ],
    [
      "path",
      {
        "d": "M 14.73 3.59 Q 14.59 8.43 19.16 6.80"
      }
    ],
    [
      "path",
      {
        "d": "M 19.16 6.80 Q 16.19 10.64 20.84 12.00"
      }
    ]
  ]
};

export const SymbioVariety = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.84 12.00 Q 16.19 13.36 19.16 17.20" />
      <path d="M 19.16 17.20 Q 14.59 15.57 14.73 20.41" />
      <path d="M 14.73 20.41 Q 12.00 16.41 9.27 20.41" />
      <path d="M 9.27 20.41 Q 9.41 15.57 4.84 17.20" />
      <path d="M 4.84 17.20 Q 7.81 13.36 3.16 12.00" />
      <path d="M 3.16 12.00 Q 7.81 10.64 4.84 6.80" />
      <path d="M 4.84 6.80 Q 9.41 8.43 9.27 3.59" />
      <path d="M 9.27 3.59 Q 12.00 7.59 14.73 3.59" />
      <path d="M 14.73 3.59 Q 14.59 8.43 19.16 6.80" />
      <path d="M 19.16 6.80 Q 16.19 10.64 20.84 12.00" />
      {children}
    </svg>
  );
});

export default SymbioVariety;
