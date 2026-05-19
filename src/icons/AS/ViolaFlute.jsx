import React from 'react';

export const iconData = {
  "id": "ViolaFlute",
  "name": "ViolaFlute",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 12.00 a 3.62 3.62 0 1 0 7.24 0 a 3.62 3.62 0 1 0 -7.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 12.00 a 5.64 5.64 0 1 0 11.28 0 a 5.64 5.64 0 1 0 -11.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 a 6.97 6.97 0 1 0 13.95 0 a 6.97 6.97 0 1 0 -13.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0"
      }
    ]
  ]
};

export const ViolaFlute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0" />
      <path d="M 8.38 12.00 a 3.62 3.62 0 1 0 7.24 0 a 3.62 3.62 0 1 0 -7.24 0" />
      <path d="M 6.36 12.00 a 5.64 5.64 0 1 0 11.28 0 a 5.64 5.64 0 1 0 -11.28 0" />
      <path d="M 5.03 12.00 a 6.97 6.97 0 1 0 13.95 0 a 6.97 6.97 0 1 0 -13.95 0" />
      <path d="M 3.44 12.00 a 8.56 8.56 0 1 0 17.12 0 a 8.56 8.56 0 1 0 -17.12 0" />
      {children}
    </svg>
  );
});

export default ViolaFlute;
