import React from 'react';

export const iconData = {
  "id": "HelioWarm",
  "name": "HelioWarm",
  "category": "SZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 12.00 a 4.29 4.29 0 1 0 8.58 0 a 4.29 4.29 0 1 0 -8.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.60 12.00 a 6.40 6.40 0 1 0 12.80 0 a 6.40 6.40 0 1 0 -12.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0"
      }
    ]
  ]
};

export const HelioWarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.61 0 a 2.31 2.31 0 1 0 -4.61 0" />
      <path d="M 7.71 12.00 a 4.29 4.29 0 1 0 8.58 0 a 4.29 4.29 0 1 0 -8.58 0" />
      <path d="M 5.60 12.00 a 6.40 6.40 0 1 0 12.80 0 a 6.40 6.40 0 1 0 -12.80 0" />
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0" />
      {children}
    </svg>
  );
});

export default HelioWarm;
