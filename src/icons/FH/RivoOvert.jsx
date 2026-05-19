import React from 'react';

export const iconData = {
  "id": "RivoOvert",
  "name": "RivoOvert",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.08 12.00 Q 16.16 14.40 16.54 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 19.86 Q 12.00 16.80 7.46 19.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 19.86 Q 7.84 14.40 2.92 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.92 12.00 Q 7.84 9.60 7.46 4.14"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 4.14 Q 12.00 7.20 16.54 4.14"
      }
    ],
    [
      "path",
      {
        "d": "M 16.54 4.14 Q 16.16 9.60 21.08 12.00"
      }
    ]
  ]
};

export const RivoOvert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.08 12.00 Q 16.16 14.40 16.54 19.86" />
      <path d="M 16.54 19.86 Q 12.00 16.80 7.46 19.86" />
      <path d="M 7.46 19.86 Q 7.84 14.40 2.92 12.00" />
      <path d="M 2.92 12.00 Q 7.84 9.60 7.46 4.14" />
      <path d="M 7.46 4.14 Q 12.00 7.20 16.54 4.14" />
      <path d="M 16.54 4.14 Q 16.16 9.60 21.08 12.00" />
      {children}
    </svg>
  );
});

export default RivoOvert;
