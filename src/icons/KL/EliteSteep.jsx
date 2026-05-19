import React from 'react';

export const iconData = {
  "id": "EliteSteep",
  "name": "EliteSteep",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.59 14.48 C 21.58 19.43, 11.92 12.43, 16.44 12.46"
      }
    ],
    [
      "path",
      {
        "d": "M 11.00 9.69 L 5.58 16.03 L 15.29 3.97 L 2.19 15.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.65 13.32 A 6.63 4.14 153 0 0 11.09 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 3.41 12.26 A 5.15 3.20 130 0 0 5.77 14.69"
      }
    ]
  ]
};

export const EliteSteep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.59 14.48 C 21.58 19.43, 11.92 12.43, 16.44 12.46" />
      <path d="M 11.00 9.69 L 5.58 16.03 L 15.29 3.97 L 2.19 15.98" />
      <path d="M 6.65 13.32 A 6.63 4.14 153 0 0 11.09 3.57" />
      <path d="M 3.41 12.26 A 5.15 3.20 130 0 0 5.77 14.69" />
      {children}
    </svg>
  );
});

export default EliteSteep;
