import React from 'react';

export const iconData = {
  "id": "SpiralRent",
  "name": "SpiralRent",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.87 12.00 a 2.13 2.13 0 1 0 4.27 0 a 2.13 2.13 0 1 0 -4.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 12.00 a 3.93 3.93 0 1 0 7.86 0 a 3.93 3.93 0 1 0 -7.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.00 a 5.22 5.22 0 1 0 10.44 0 a 5.22 5.22 0 1 0 -10.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0"
      }
    ]
  ]
};

export const SpiralRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.87 12.00 a 2.13 2.13 0 1 0 4.27 0 a 2.13 2.13 0 1 0 -4.27 0" />
      <path d="M 8.07 12.00 a 3.93 3.93 0 1 0 7.86 0 a 3.93 3.93 0 1 0 -7.86 0" />
      <path d="M 6.78 12.00 a 5.22 5.22 0 1 0 10.44 0 a 5.22 5.22 0 1 0 -10.44 0" />
      <path d="M 4.79 12.00 a 7.21 7.21 0 1 0 14.42 0 a 7.21 7.21 0 1 0 -14.42 0" />
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      {children}
    </svg>
  );
});

export default SpiralRent;
