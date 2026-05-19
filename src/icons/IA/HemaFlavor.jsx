import React from 'react';

export const iconData = {
  "id": "HemaFlavor",
  "name": "HemaFlavor",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 12.00 a 5.54 5.54 0 1 0 11.08 0 a 5.54 5.54 0 1 0 -11.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.14 12.00 a 6.86 6.86 0 1 0 13.71 0 a 6.86 6.86 0 1 0 -13.71 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0"
      }
    ]
  ]
};

export const HemaFlavor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0" />
      <path d="M 7.91 12.00 a 4.09 4.09 0 1 0 8.18 0 a 4.09 4.09 0 1 0 -8.18 0" />
      <path d="M 6.46 12.00 a 5.54 5.54 0 1 0 11.08 0 a 5.54 5.54 0 1 0 -11.08 0" />
      <path d="M 5.14 12.00 a 6.86 6.86 0 1 0 13.71 0 a 6.86 6.86 0 1 0 -13.71 0" />
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0" />
      {children}
    </svg>
  );
});

export default HemaFlavor;
