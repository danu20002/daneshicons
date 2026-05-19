import React from 'react';

export const iconData = {
  "id": "VateFarm",
  "name": "VateFarm",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 12.00 a 5.75 5.75 0 1 1 11.51 0 a 5.75 5.75 0 1 1 -11.51 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.07 12.00 L 22.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.99 16.04 L 20.72 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 18.99 L 17.04 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.07 L 12.00 22.07"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 18.99 L 6.96 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 16.04 L 3.28 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 12.00 L 1.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 7.96 L 3.28 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.96 5.01 L 6.96 3.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.93 L 12.00 1.93"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 5.01 L 17.04 3.28"
      }
    ],
    [
      "path",
      {
        "d": "M 18.99 7.96 L 20.72 6.96"
      }
    ]
  ]
};

export const VateFarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      <path d="M 6.25 12.00 a 5.75 5.75 0 1 1 11.51 0 a 5.75 5.75 0 1 1 -11.51 0" />
      <path d="M 20.07 12.00 L 22.07 12.00" />
      <path d="M 18.99 16.04 L 20.72 17.04" />
      <path d="M 16.04 18.99 L 17.04 20.72" />
      <path d="M 12.00 20.07 L 12.00 22.07" />
      <path d="M 7.96 18.99 L 6.96 20.72" />
      <path d="M 5.01 16.04 L 3.28 17.04" />
      <path d="M 3.93 12.00 L 1.93 12.00" />
      <path d="M 5.01 7.96 L 3.28 6.96" />
      <path d="M 7.96 5.01 L 6.96 3.28" />
      <path d="M 12.00 3.93 L 12.00 1.93" />
      <path d="M 16.04 5.01 L 17.04 3.28" />
      <path d="M 18.99 7.96 L 20.72 6.96" />
      {children}
    </svg>
  );
});

export default VateFarm;
