import React from 'react';

export const iconData = {
  "id": "XerofiloLeek",
  "name": "XerofiloLeek",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 6.78 C 6.33 17.45, 7.80 9.63, 18.42 18.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 2.07 C 7.17 12.23, 15.00 18.03, 19.29 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 2.69 4.12 C 6.24 15.75, 17.56 8.71, 18.17 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 3.01 C 16.32 4.94, 9.68 13.11, 18.15 18.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 6.27 C 16.31 17.76, 6.39 4.88, 14.51 17.56"
      }
    ]
  ]
};

export const XerofiloLeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 6.78 C 6.33 17.45, 7.80 9.63, 18.42 18.55" />
      <path d="M 6.46 2.07 C 7.17 12.23, 15.00 18.03, 19.29 14.92" />
      <path d="M 2.69 4.12 C 6.24 15.75, 17.56 8.71, 18.17 19.84" />
      <path d="M 4.41 3.01 C 16.32 4.94, 9.68 13.11, 18.15 18.85" />
      <path d="M 7.40 6.27 C 16.31 17.76, 6.39 4.88, 14.51 17.56" />
      {children}
    </svg>
  );
});

export default XerofiloLeek;
