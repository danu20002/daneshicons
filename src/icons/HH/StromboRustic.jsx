import React from 'react';

export const iconData = {
  "id": "StromboRustic",
  "name": "StromboRustic",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 12.00 a 4.32 4.32 0 1 0 8.63 0 a 4.32 4.32 0 1 0 -8.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 12.00 a 8.36 8.36 0 1 0 16.72 0 a 8.36 8.36 0 1 0 -16.72 0"
      }
    ]
  ]
};

export const StromboRustic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.54 12.00 a 2.46 2.46 0 1 0 4.93 0 a 2.46 2.46 0 1 0 -4.93 0" />
      <path d="M 7.68 12.00 a 4.32 4.32 0 1 0 8.63 0 a 4.32 4.32 0 1 0 -8.63 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.14 0 a 6.07 6.07 0 1 0 -12.14 0" />
      <path d="M 3.64 12.00 a 8.36 8.36 0 1 0 16.72 0 a 8.36 8.36 0 1 0 -16.72 0" />
      {children}
    </svg>
  );
});

export default StromboRustic;
