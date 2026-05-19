import React from 'react';

export const iconData = {
  "id": "VictoHalt",
  "name": "VictoHalt",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 6.49 a 7.34 2.2023658425360915 0 1 0 14.68 0 a 7.34 2.2023658425360915 0 1 0 -14.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 10.16 a 8.99 2.697336270574094 0 1 0 17.98 0 a 8.99 2.697336270574094 0 1 0 -17.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.01 13.84 a 8.99 2.697336270574094 0 1 0 17.98 0 a 8.99 2.697336270574094 0 1 0 -17.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 17.51 a 7.34 2.2023658425360915 0 1 0 14.68 0 a 7.34 2.2023658425360915 0 1 0 -14.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.82 A 2 2 0 0 0 12.00 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.82 A 2 2 0 0 1 12.00 21.18"
      }
    ]
  ]
};

export const VictoHalt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.82 12.00 a 9.18 9.18 0 1 0 18.35 0 a 9.18 9.18 0 1 0 -18.35 0" />
      <path d="M 4.66 6.49 a 7.34 2.2023658425360915 0 1 0 14.68 0 a 7.34 2.2023658425360915 0 1 0 -14.68 0" />
      <path d="M 3.01 10.16 a 8.99 2.697336270574094 0 1 0 17.98 0 a 8.99 2.697336270574094 0 1 0 -17.98 0" />
      <path d="M 3.01 13.84 a 8.99 2.697336270574094 0 1 0 17.98 0 a 8.99 2.697336270574094 0 1 0 -17.98 0" />
      <path d="M 4.66 17.51 a 7.34 2.2023658425360915 0 1 0 14.68 0 a 7.34 2.2023658425360915 0 1 0 -14.68 0" />
      <path d="M 12.00 2.82 A 2 2 0 0 0 12.00 21.18" />
      <path d="M 12.00 2.82 A 2 2 0 0 1 12.00 21.18" />
      {children}
    </svg>
  );
});

export default VictoHalt;
