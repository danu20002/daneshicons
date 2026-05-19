import React from 'react';

export const iconData = {
  "id": "CryptScope",
  "name": "CryptScope",
  "category": "CY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.96 4.28 C 5.45 6.04, 18.89 17.98, 20.10 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 8.86 C 17.89 12.50, 5.43 16.24, 15.39 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 3.37 C 10.36 7.13, 17.10 6.56, 18.45 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.17 6.84 C 6.04 13.01, 16.34 19.72, 20.37 14.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.78 2.17 C 19.13 16.00, 10.91 17.25, 20.97 20.15"
      }
    ]
  ]
};

export const CryptScope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.96 4.28 C 5.45 6.04, 18.89 17.98, 20.10 19.40" />
      <path d="M 4.08 8.86 C 17.89 12.50, 5.43 16.24, 15.39 21.08" />
      <path d="M 3.49 3.37 C 10.36 7.13, 17.10 6.56, 18.45 21.73" />
      <path d="M 9.17 6.84 C 6.04 13.01, 16.34 19.72, 20.37 14.08" />
      <path d="M 8.78 2.17 C 19.13 16.00, 10.91 17.25, 20.97 20.15" />
      {children}
    </svg>
  );
});

export default CryptScope;
