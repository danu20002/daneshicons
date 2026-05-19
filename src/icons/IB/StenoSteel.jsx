import React from 'react';

export const iconData = {
  "id": "StenoSteel",
  "name": "StenoSteel",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 2.01 C 19.05 14.96, 6.89 9.79, 15.96 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.06 C 18.24 8.87, 11.51 13.06, 19.33 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 3.94 C 11.81 17.28, 10.77 12.71, 16.12 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 9.13 C 9.91 5.64, 19.32 17.58, 14.78 20.65"
      }
    ]
  ]
};

export const StenoSteel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 2.01 C 19.05 14.96, 6.89 9.79, 15.96 20.78" />
      <path d="M 7.77 4.06 C 18.24 8.87, 11.51 13.06, 19.33 20.00" />
      <path d="M 7.08 3.94 C 11.81 17.28, 10.77 12.71, 16.12 16.21" />
      <path d="M 5.21 9.13 C 9.91 5.64, 19.32 17.58, 14.78 20.65" />
      {children}
    </svg>
  );
});

export default StenoSteel;
