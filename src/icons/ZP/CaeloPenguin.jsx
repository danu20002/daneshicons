import React from 'react';

export const iconData = {
  "id": "CaeloPenguin",
  "name": "CaeloPenguin",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 8.26 C 19.94 16.99, 10.53 14.96, 18.13 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.92 8.16 C 19.33 10.21, 6.14 6.62, 19.33 14.60"
      }
    ],
    [
      "path",
      {
        "d": "M 2.34 9.38 C 16.50 5.83, 16.00 15.29, 19.93 21.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.70 3.56 C 15.34 16.68, 7.90 16.33, 18.85 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 8.51 8.38 C 11.89 5.34, 13.95 12.26, 20.64 21.17"
      }
    ]
  ]
};

export const CaeloPenguin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.06 8.26 C 19.94 16.99, 10.53 14.96, 18.13 18.19" />
      <path d="M 5.92 8.16 C 19.33 10.21, 6.14 6.62, 19.33 14.60" />
      <path d="M 2.34 9.38 C 16.50 5.83, 16.00 15.29, 19.93 21.67" />
      <path d="M 4.70 3.56 C 15.34 16.68, 7.90 16.33, 18.85 20.12" />
      <path d="M 8.51 8.38 C 11.89 5.34, 13.95 12.26, 20.64 21.17" />
      {children}
    </svg>
  );
});

export default CaeloPenguin;
