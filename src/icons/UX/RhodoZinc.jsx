import React from 'react';

export const iconData = {
  "id": "RhodoZinc",
  "name": "RhodoZinc",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 12.00 L 20.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 17.65 L 16.26 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 17.65 L 7.74 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.48 12.00 L 3.48 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 6.35 L 7.74 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.26 6.35 L 16.26 4.62"
      }
    ]
  ]
};

export const RhodoZinc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.04 0 a 7.02 7.02 0 1 0 -14.04 0" />
      <path d="M 7.07 12.00 a 4.93 4.93 0 1 1 9.86 0 a 4.93 4.93 0 1 1 -9.86 0" />
      <path d="M 18.52 12.00 L 20.52 12.00" />
      <path d="M 15.26 17.65 L 16.26 19.38" />
      <path d="M 8.74 17.65 L 7.74 19.38" />
      <path d="M 5.48 12.00 L 3.48 12.00" />
      <path d="M 8.74 6.35 L 7.74 4.62" />
      <path d="M 15.26 6.35 L 16.26 4.62" />
      {children}
    </svg>
  );
});

export default RhodoZinc;
