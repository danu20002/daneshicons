import React from 'react';

export const iconData = {
  "id": "TrifoglioOpium",
  "name": "TrifoglioOpium",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 12.00 a 7.48 7.48 0 1 0 14.96 0 a 7.48 7.48 0 1 0 -14.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.84 12.00 a 5.16 5.16 0 1 1 10.31 0 a 5.16 5.16 0 1 1 -10.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.98 12.00 L 20.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 16.94 L 18.35 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 18.98 L 12.00 20.98"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 16.94 L 5.65 18.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.02 12.00 L 3.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 7.06 L 5.65 5.65"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.02 L 12.00 3.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.94 7.06 L 18.35 5.65"
      }
    ]
  ]
};

export const TrifoglioOpium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 12.00 a 7.48 7.48 0 1 0 14.96 0 a 7.48 7.48 0 1 0 -14.96 0" />
      <path d="M 6.84 12.00 a 5.16 5.16 0 1 1 10.31 0 a 5.16 5.16 0 1 1 -10.31 0" />
      <path d="M 18.98 12.00 L 20.98 12.00" />
      <path d="M 16.94 16.94 L 18.35 18.35" />
      <path d="M 12.00 18.98 L 12.00 20.98" />
      <path d="M 7.06 16.94 L 5.65 18.35" />
      <path d="M 5.02 12.00 L 3.02 12.00" />
      <path d="M 7.06 7.06 L 5.65 5.65" />
      <path d="M 12.00 5.02 L 12.00 3.02" />
      <path d="M 16.94 7.06 L 18.35 5.65" />
      {children}
    </svg>
  );
});

export default TrifoglioOpium;
