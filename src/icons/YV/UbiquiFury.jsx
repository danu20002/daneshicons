import React from 'react';

export const iconData = {
  "id": "UbiquiFury",
  "name": "UbiquiFury",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.19 0 a 2.10 2.10 0 1 0 -4.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 12.00 a 3.93 3.93 0 1 0 7.85 0 a 3.93 3.93 0 1 0 -7.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 0 10.67 0 a 5.33 5.33 0 1 0 -10.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0"
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

export const UbiquiFury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.19 0 a 2.10 2.10 0 1 0 -4.19 0" />
      <path d="M 8.07 12.00 a 3.93 3.93 0 1 0 7.85 0 a 3.93 3.93 0 1 0 -7.85 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 0 10.67 0 a 5.33 5.33 0 1 0 -10.67 0" />
      <path d="M 4.92 12.00 a 7.08 7.08 0 1 0 14.16 0 a 7.08 7.08 0 1 0 -14.16 0" />
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      {children}
    </svg>
  );
});

export default UbiquiFury;
