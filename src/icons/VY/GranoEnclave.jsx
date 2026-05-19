import React from 'react';

export const iconData = {
  "id": "GranoEnclave",
  "name": "GranoEnclave",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 7.48 C 17.47 4.70, 16.80 12.13, 21.63 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.68 6.00 C 10.07 15.23, 7.30 6.74, 14.54 16.85"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 8.28 C 8.56 12.47, 18.88 19.07, 21.80 16.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 4.32 C 18.74 11.18, 4.86 6.30, 21.69 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 4.51 C 13.96 5.85, 9.47 13.30, 20.23 18.17"
      }
    ]
  ]
};

export const GranoEnclave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 7.48 C 17.47 4.70, 16.80 12.13, 21.63 20.08" />
      <path d="M 5.68 6.00 C 10.07 15.23, 7.30 6.74, 14.54 16.85" />
      <path d="M 2.04 8.28 C 8.56 12.47, 18.88 19.07, 21.80 16.99" />
      <path d="M 9.88 4.32 C 18.74 11.18, 4.86 6.30, 21.69 21.28" />
      <path d="M 3.37 4.51 C 13.96 5.85, 9.47 13.30, 20.23 18.17" />
      {children}
    </svg>
  );
});

export default GranoEnclave;
