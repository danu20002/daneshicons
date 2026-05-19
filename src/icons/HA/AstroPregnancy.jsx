import React from 'react';

export const iconData = {
  "id": "AstroPregnancy",
  "name": "AstroPregnancy",
  "category": "HA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.26 12.00 a 5.74 5.74 0 1 1 11.48 0 a 5.74 5.74 0 1 1 -11.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.93 12.00 L 21.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 18.87 L 16.96 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 18.87 L 7.04 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 12.00 L 2.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 5.13 L 7.04 3.40"
      }
    ],
    [
      "path",
      {
        "d": "M 15.96 5.13 L 16.96 3.40"
      }
    ]
  ]
};

export const AstroPregnancy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.86 0 a 8.43 8.43 0 1 0 -16.86 0" />
      <path d="M 6.26 12.00 a 5.74 5.74 0 1 1 11.48 0 a 5.74 5.74 0 1 1 -11.48 0" />
      <path d="M 19.93 12.00 L 21.93 12.00" />
      <path d="M 15.96 18.87 L 16.96 20.60" />
      <path d="M 8.04 18.87 L 7.04 20.60" />
      <path d="M 4.07 12.00 L 2.07 12.00" />
      <path d="M 8.04 5.13 L 7.04 3.40" />
      <path d="M 15.96 5.13 L 16.96 3.40" />
      {children}
    </svg>
  );
});

export default AstroPregnancy;
