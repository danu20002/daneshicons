import React from 'react';

export const iconData = {
  "id": "SeptiMobile",
  "name": "SeptiMobile",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.13 12.00 a 3.87 3.87 0 1 0 7.74 0 a 3.87 3.87 0 1 0 -7.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.44 12.00 a 5.56 5.56 0 1 0 11.12 0 a 5.56 5.56 0 1 0 -11.12 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0"
      }
    ]
  ]
};

export const SeptiMobile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0" />
      <path d="M 8.13 12.00 a 3.87 3.87 0 1 0 7.74 0 a 3.87 3.87 0 1 0 -7.74 0" />
      <path d="M 6.44 12.00 a 5.56 5.56 0 1 0 11.12 0 a 5.56 5.56 0 1 0 -11.12 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0" />
      <path d="M 3.11 12.00 a 8.89 8.89 0 1 0 17.78 0 a 8.89 8.89 0 1 0 -17.78 0" />
      {children}
    </svg>
  );
});

export default SeptiMobile;
