import React from 'react';

export const iconData = {
  "id": "TympanFerment",
  "name": "TympanFerment",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.83 12.00 L 18.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.83 L 12.00 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 7.68 L 16.32 16.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 16.32 L 16.32 7.68"
      }
    ],
    [
      "path",
      {
        "d": "M 2.26 12.00 a 9.74 9.74 0 1 0 19.48 0 a 9.74 9.74 0 1 0 -19.48 0"
      }
    ]
  ]
};

export const TympanFerment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.83 12.00 L 18.17 12.00" />
      <path d="M 12.00 5.83 L 12.00 18.17" />
      <path d="M 7.68 7.68 L 16.32 16.32" />
      <path d="M 7.68 16.32 L 16.32 7.68" />
      <path d="M 2.26 12.00 a 9.74 9.74 0 1 0 19.48 0 a 9.74 9.74 0 1 0 -19.48 0" />
      {children}
    </svg>
  );
});

export default TympanFerment;
