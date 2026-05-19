import React from 'react';

export const iconData = {
  "id": "SedimenMarch",
  "name": "SedimenMarch",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 12.00 a 4.01 4.01 0 1 0 8.01 0 a 4.01 4.01 0 1 0 -8.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.52 12.00 a 5.48 5.48 0 1 0 10.96 0 a 5.48 5.48 0 1 0 -10.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.00 12.00 a 7.00 7.00 0 1 0 14.00 0 a 7.00 7.00 0 1 0 -14.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0"
      }
    ]
  ]
};

export const SedimenMarch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0" />
      <path d="M 7.99 12.00 a 4.01 4.01 0 1 0 8.01 0 a 4.01 4.01 0 1 0 -8.01 0" />
      <path d="M 6.52 12.00 a 5.48 5.48 0 1 0 10.96 0 a 5.48 5.48 0 1 0 -10.96 0" />
      <path d="M 5.00 12.00 a 7.00 7.00 0 1 0 14.00 0 a 7.00 7.00 0 1 0 -14.00 0" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.85 0 a 8.42 8.42 0 1 0 -16.85 0" />
      {children}
    </svg>
  );
});

export default SedimenMarch;
