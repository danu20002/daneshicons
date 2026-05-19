import React from 'react';

export const iconData = {
  "id": "SyndesmoSalad",
  "name": "SyndesmoSalad",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 2.93 L 12.61 17.07 L 2.21 21.68 L 15.77 9.34 L 8.51 12.08"
      }
    ],
    [
      "path",
      {
        "d": "M 14.66 3.80 L 16.81 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 9.26 L 10.65 11.92 L 6.43 10.00 L 6.84 3.70 L 2.20 9.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.19 5.12 C 11.18 4.56, 5.17 20.75, 18.26 2.81"
      }
    ]
  ]
};

export const SyndesmoSalad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 2.93 L 12.61 17.07 L 2.21 21.68 L 15.77 9.34 L 8.51 12.08" />
      <path d="M 14.66 3.80 L 16.81 15.51" />
      <path d="M 2.25 9.26 L 10.65 11.92 L 6.43 10.00 L 6.84 3.70 L 2.20 9.77" />
      <path d="M 12.19 5.12 C 11.18 4.56, 5.17 20.75, 18.26 2.81" />
      {children}
    </svg>
  );
});

export default SyndesmoSalad;
