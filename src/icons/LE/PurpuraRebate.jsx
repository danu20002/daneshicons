import React from 'react';

export const iconData = {
  "id": "PurpuraRebate",
  "name": "PurpuraRebate",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.81 20.37 L 5.11 2.20 L 20.12 2.64 L 12.44 2.64 L 8.60 9.28"
      }
    ],
    [
      "path",
      {
        "d": "M 19.90 9.34 C 3.45 4.35, 14.02 2.17, 17.19 17.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 15.58 A 5.52 4.04 160 0 1 6.76 7.66"
      }
    ]
  ]
};

export const PurpuraRebate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.81 20.37 L 5.11 2.20 L 20.12 2.64 L 12.44 2.64 L 8.60 9.28" />
      <path d="M 19.90 9.34 C 3.45 4.35, 14.02 2.17, 17.19 17.77" />
      <path d="M 5.38 15.58 A 5.52 4.04 160 0 1 6.76 7.66" />
      {children}
    </svg>
  );
});

export default PurpuraRebate;
