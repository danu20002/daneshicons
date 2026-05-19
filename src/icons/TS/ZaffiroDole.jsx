import React from 'react';

export const iconData = {
  "id": "ZaffiroDole",
  "name": "ZaffiroDole",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.96 0 a 2.48 2.48 0 1 0 -4.96 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 12.00 a 5.60 5.60 0 1 0 11.21 0 a 5.60 5.60 0 1 0 -11.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.10 0 a 7.05 7.05 0 1 0 -14.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ]
  ]
};

export const ZaffiroDole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.96 0 a 2.48 2.48 0 1 0 -4.96 0" />
      <path d="M 8.28 12.00 a 3.72 3.72 0 1 0 7.45 0 a 3.72 3.72 0 1 0 -7.45 0" />
      <path d="M 6.40 12.00 a 5.60 5.60 0 1 0 11.21 0 a 5.60 5.60 0 1 0 -11.21 0" />
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.10 0 a 7.05 7.05 0 1 0 -14.10 0" />
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      {children}
    </svg>
  );
});

export default ZaffiroDole;
