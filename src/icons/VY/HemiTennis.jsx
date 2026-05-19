import React from 'react';

export const iconData = {
  "id": "HemiTennis",
  "name": "HemiTennis",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 2.34 C 19.06 8.98, 12.13 13.10, 14.15 14.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 2.53 C 5.68 16.88, 8.61 6.81, 20.50 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.97 5.12 C 14.08 17.11, 11.59 7.96, 15.04 21.99"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 9.39 C 14.14 8.22, 9.13 17.43, 20.40 21.77"
      }
    ],
    [
      "path",
      {
        "d": "M 3.31 9.08 C 4.82 6.04, 19.92 6.88, 21.90 18.44"
      }
    ]
  ]
};

export const HemiTennis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 2.34 C 19.06 8.98, 12.13 13.10, 14.15 14.29" />
      <path d="M 6.50 2.53 C 5.68 16.88, 8.61 6.81, 20.50 15.07" />
      <path d="M 6.97 5.12 C 14.08 17.11, 11.59 7.96, 15.04 21.99" />
      <path d="M 8.46 9.39 C 14.14 8.22, 9.13 17.43, 20.40 21.77" />
      <path d="M 3.31 9.08 C 4.82 6.04, 19.92 6.88, 21.90 18.44" />
      {children}
    </svg>
  );
});

export default HemiTennis;
