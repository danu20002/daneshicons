import React from 'react';

export const iconData = {
  "id": "KryptoEdition",
  "name": "KryptoEdition",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 12.00 a 5.34 5.34 0 1 0 10.67 0 a 5.34 5.34 0 1 0 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 12.00 a 7.14 7.14 0 1 0 14.29 0 a 7.14 7.14 0 1 0 -14.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const KryptoEdition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0" />
      <path d="M 6.66 12.00 a 5.34 5.34 0 1 0 10.67 0 a 5.34 5.34 0 1 0 -10.67 0" />
      <path d="M 4.86 12.00 a 7.14 7.14 0 1 0 14.29 0 a 7.14 7.14 0 1 0 -14.29 0" />
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default KryptoEdition;
