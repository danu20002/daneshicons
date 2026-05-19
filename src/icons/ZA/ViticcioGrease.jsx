import React from 'react';

export const iconData = {
  "id": "ViticcioGrease",
  "name": "ViticcioGrease",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 12.00 L 20.14 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.86 L 12.00 20.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 6.30 L 17.70 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.30 17.70 L 17.70 6.30"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0"
      }
    ]
  ]
};

export const ViticcioGrease = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 12.00 L 20.14 12.00" />
      <path d="M 12.00 3.86 L 12.00 20.14" />
      <path d="M 6.30 6.30 L 17.70 17.70" />
      <path d="M 6.30 17.70 L 17.70 6.30" />
      <path d="M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0" />
      {children}
    </svg>
  );
});

export default ViticcioGrease;
