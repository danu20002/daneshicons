import React from 'react';

export const iconData = {
  "id": "UmbroUnfair",
  "name": "UmbroUnfair",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.89 12.00 L 18.11 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.89 L 12.00 18.11"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 7.72 L 16.28 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 16.28 L 16.28 7.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 9.93 0 1 0 19.85 0 a 9.93 9.93 0 1 0 -19.85 0"
      }
    ]
  ]
};

export const UmbroUnfair = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.89 12.00 L 18.11 12.00" />
      <path d="M 12.00 5.89 L 12.00 18.11" />
      <path d="M 7.72 7.72 L 16.28 16.28" />
      <path d="M 7.72 16.28 L 16.28 7.72" />
      <path d="M 2.07 12.00 a 9.93 9.93 0 1 0 19.85 0 a 9.93 9.93 0 1 0 -19.85 0" />
      {children}
    </svg>
  );
});

export default UmbroUnfair;
