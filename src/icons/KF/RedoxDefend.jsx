import React from 'react';

export const iconData = {
  "id": "RedoxDefend",
  "name": "RedoxDefend",
  "category": "KF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 12.00 a 5.68 5.68 0 1 0 11.37 0 a 5.68 5.68 0 1 0 -11.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 12.00 a 7.03 7.03 0 1 0 14.07 0 a 7.03 7.03 0 1 0 -14.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.30 12.00 a 8.70 8.70 0 1 0 17.39 0 a 8.70 8.70 0 1 0 -17.39 0"
      }
    ]
  ]
};

export const RedoxDefend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.96 12.00 a 2.04 2.04 0 1 0 4.08 0 a 2.04 2.04 0 1 0 -4.08 0" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.43 0 a 3.72 3.72 0 1 0 -7.43 0" />
      <path d="M 6.32 12.00 a 5.68 5.68 0 1 0 11.37 0 a 5.68 5.68 0 1 0 -11.37 0" />
      <path d="M 4.97 12.00 a 7.03 7.03 0 1 0 14.07 0 a 7.03 7.03 0 1 0 -14.07 0" />
      <path d="M 3.30 12.00 a 8.70 8.70 0 1 0 17.39 0 a 8.70 8.70 0 1 0 -17.39 0" />
      {children}
    </svg>
  );
});

export default RedoxDefend;
