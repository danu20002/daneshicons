import React from 'react';

export const iconData = {
  "id": "MisoQuartz",
  "name": "MisoQuartz",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.70 12.13 A 2.45 6.30 137 0 0 21.35 9.90"
      }
    ],
    [
      "path",
      {
        "d": "M 13.00 3.51 Q 4.13 4.35 10.94 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 3.91 L 21.04 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 3.64 L 10.19 2.46 L 20.78 6.00 L 16.84 3.48 L 6.24 3.78 L 2.18 15.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 10.92 L 11.75 20.58 L 3.46 5.23 L 20.68 14.52 L 16.92 20.74"
      }
    ]
  ]
};

export const MisoQuartz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.70 12.13 A 2.45 6.30 137 0 0 21.35 9.90" />
      <path d="M 13.00 3.51 Q 4.13 4.35 10.94 20.67" />
      <path d="M 13.21 3.91 L 21.04 9.29" />
      <path d="M 8.01 3.64 L 10.19 2.46 L 20.78 6.00 L 16.84 3.48 L 6.24 3.78 L 2.18 15.81" />
      <path d="M 5.96 10.92 L 11.75 20.58 L 3.46 5.23 L 20.68 14.52 L 16.92 20.74" />
      {children}
    </svg>
  );
});

export default MisoQuartz;
