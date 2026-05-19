import React from 'react';

export const iconData = {
  "id": "UretereValiant",
  "name": "UretereValiant",
  "category": "BL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.54 12.00 a 5.46 5.46 0 1 0 10.91 0 a 5.46 5.46 0 1 0 -10.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 12.00 a 8.53 8.53 0 1 0 17.07 0 a 8.53 8.53 0 1 0 -17.07 0",
        "stroke-dasharray": "5 1"
      }
    ]
  ]
};

export const UretereValiant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 12.00 a 2.32 2.32 0 1 0 4.64 0 a 2.32 2.32 0 1 0 -4.64 0" />
      <path d="M 8.35 12.00 a 3.65 3.65 0 1 0 7.30 0 a 3.65 3.65 0 1 0 -7.30 0" />
      <path d="M 6.54 12.00 a 5.46 5.46 0 1 0 10.91 0 a 5.46 5.46 0 1 0 -10.91 0" />
      <path d="M 4.89 12.00 a 7.11 7.11 0 1 0 14.23 0 a 7.11 7.11 0 1 0 -14.23 0" />
      <path d="M 3.47 12.00 a 8.53 8.53 0 1 0 17.07 0 a 8.53 8.53 0 1 0 -17.07 0" stroke-dasharray="5 1" />
      {children}
    </svg>
  );
});

export default UretereValiant;
