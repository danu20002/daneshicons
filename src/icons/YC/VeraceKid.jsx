import React from 'react';

export const iconData = {
  "id": "VeraceKid",
  "name": "VeraceKid",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 12.00 a 5.63 5.63 0 1 0 11.27 0 a 5.63 5.63 0 1 0 -11.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 12.00 a 7.17 7.17 0 1 0 14.35 0 a 7.17 7.17 0 1 0 -14.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0"
      }
    ]
  ]
};

export const VeraceKid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.82 12.00 a 2.18 2.18 0 1 0 4.36 0 a 2.18 2.18 0 1 0 -4.36 0" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0" />
      <path d="M 6.37 12.00 a 5.63 5.63 0 1 0 11.27 0 a 5.63 5.63 0 1 0 -11.27 0" />
      <path d="M 4.83 12.00 a 7.17 7.17 0 1 0 14.35 0 a 7.17 7.17 0 1 0 -14.35 0" />
      <path d="M 3.58 12.00 a 8.42 8.42 0 1 0 16.84 0 a 8.42 8.42 0 1 0 -16.84 0" />
      {children}
    </svg>
  );
});

export default VeraceKid;
