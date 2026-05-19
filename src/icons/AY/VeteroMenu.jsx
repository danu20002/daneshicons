import React from 'react';

export const iconData = {
  "id": "VeteroMenu",
  "name": "VeteroMenu",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.70 21.56 A 5.92 3.11 122 0 1 12.44 10.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.01 12.47 A 6.66 6.96 150 0 0 6.41 12.83"
      }
    ],
    [
      "path",
      {
        "d": "M 20.11 7.16 C 9.02 14.28, 4.00 13.40, 2.82 10.24"
      }
    ],
    [
      "path",
      {
        "d": "M 20.29 20.04 L 9.55 11.72"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 12.24 C 4.58 14.06, 14.06 19.81, 15.37 7.51"
      }
    ],
    [
      "path",
      {
        "d": "M 3.99 2.01 A 2.42 5.69 68 0 0 11.98 17.65"
      }
    ]
  ]
};

export const VeteroMenu = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.70 21.56 A 5.92 3.11 122 0 1 12.44 10.79" />
      <path d="M 14.01 12.47 A 6.66 6.96 150 0 0 6.41 12.83" />
      <path d="M 20.11 7.16 C 9.02 14.28, 4.00 13.40, 2.82 10.24" />
      <path d="M 20.29 20.04 L 9.55 11.72" />
      <path d="M 6.93 12.24 C 4.58 14.06, 14.06 19.81, 15.37 7.51" />
      <path d="M 3.99 2.01 A 2.42 5.69 68 0 0 11.98 17.65" />
      {children}
    </svg>
  );
});

export default VeteroMenu;
