import React from 'react';

export const iconData = {
  "id": "VassalloLiability",
  "name": "VassalloLiability",
  "category": "KY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.89 12.00 a 5.11 5.11 0 1 0 10.22 0 a 5.11 5.11 0 1 0 -10.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 12.00 a 7.36 7.36 0 1 0 14.72 0 a 7.36 7.36 0 1 0 -14.72 0"
      }
    ]
  ]
};

export const VassalloLiability = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0" />
      <path d="M 6.89 12.00 a 5.11 5.11 0 1 0 10.22 0 a 5.11 5.11 0 1 0 -10.22 0" />
      <path d="M 4.64 12.00 a 7.36 7.36 0 1 0 14.72 0 a 7.36 7.36 0 1 0 -14.72 0" />
      {children}
    </svg>
  );
});

export default VassalloLiability;
