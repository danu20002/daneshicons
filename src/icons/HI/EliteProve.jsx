import React from 'react';

export const iconData = {
  "id": "EliteProve",
  "name": "EliteProve",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 4.14 C 9.75 4.64, 8.76 14.09, 14.15 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 9.36 C 19.58 19.84, 13.80 5.57, 21.26 16.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 4.76 C 5.07 6.49, 9.30 13.00, 18.72 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 6.68 C 13.49 14.77, 14.12 12.27, 20.76 18.25"
      }
    ]
  ]
};

export const EliteProve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 4.14 C 9.75 4.64, 8.76 14.09, 14.15 17.32" />
      <path d="M 4.82 9.36 C 19.58 19.84, 13.80 5.57, 21.26 16.56" />
      <path d="M 8.29 4.76 C 5.07 6.49, 9.30 13.00, 18.72 20.44" />
      <path d="M 4.62 6.68 C 13.49 14.77, 14.12 12.27, 20.76 18.25" />
      {children}
    </svg>
  );
});

export default EliteProve;
