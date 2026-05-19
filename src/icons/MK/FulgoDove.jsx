import React from 'react';

export const iconData = {
  "id": "FulgoDove",
  "name": "FulgoDove",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 0 10.04 0 a 5.02 5.02 0 1 0 -10.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 12.00 a 7.34 7.34 0 1 0 14.67 0 a 7.34 7.34 0 1 0 -14.67 0"
      }
    ]
  ]
};

export const FulgoDove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.65 0 a 2.32 2.32 0 1 0 -4.65 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 0 10.04 0 a 5.02 5.02 0 1 0 -10.04 0" />
      <path d="M 4.66 12.00 a 7.34 7.34 0 1 0 14.67 0 a 7.34 7.34 0 1 0 -14.67 0" />
      {children}
    </svg>
  );
});

export default FulgoDove;
