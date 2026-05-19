import React from 'react';

export const iconData = {
  "id": "TremoloGolden",
  "name": "TremoloGolden",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.70 12.00 a 2.30 2.30 0 1 0 4.59 0 a 2.30 2.30 0 1 0 -4.59 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.50 12.00 a 6.50 6.50 0 1 0 13.00 0 a 6.50 6.50 0 1 0 -13.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0"
      }
    ]
  ]
};

export const TremoloGolden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.70 12.00 a 2.30 2.30 0 1 0 4.59 0 a 2.30 2.30 0 1 0 -4.59 0" />
      <path d="M 7.96 12.00 a 4.04 4.04 0 1 0 8.08 0 a 4.04 4.04 0 1 0 -8.08 0" />
      <path d="M 5.50 12.00 a 6.50 6.50 0 1 0 13.00 0 a 6.50 6.50 0 1 0 -13.00 0" />
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.51 0 a 8.26 8.26 0 1 0 -16.51 0" />
      {children}
    </svg>
  );
});

export default TremoloGolden;
